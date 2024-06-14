import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TrackJourneysController} from "./features/truck-journeys/adapters/web/track-journeys.controller";
import {TrackJourneysService} from "./features/truck-journeys/application/track-journeys.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TruckJourneyEntity} from "./features/truck-journeys/domain/entity/truck-journey.entity";
import {
  TruckJourneyRepositoryFacade
} from "./features/truck-journeys/adapters/persistence/truck-journey.repository-facade";
import {CreateJourneyUseCase} from "./features/truck-journeys/ports/in/create-journey.use-case";
import {CreateJourneyPort} from "./features/truck-journeys/ports/out/create-journey.port";
import {
  CreateJourneyUseCaseImplementation
} from './features/truck-journeys/application/use-cases/create-journey.use-case-implementation';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './otk-dev.db',
      entities: [
        TruckJourneyEntity
      ],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([
      TruckJourneyEntity
    ])
  ],
  controllers: [
    AppController,
    TrackJourneysController,
  ],
  providers: [
    AppService,
    TrackJourneysService,
    TruckJourneyRepositoryFacade,
    // Use cases
    {
      provide: CreateJourneyUseCase,
      useClass: CreateJourneyUseCaseImplementation,
    },
    //
    {
      provide: CreateJourneyPort,
      useClass: TruckJourneyRepositoryFacade,
    },
    CreateJourneyUseCaseImplementation,
  ],
})
export class AppModule {}
