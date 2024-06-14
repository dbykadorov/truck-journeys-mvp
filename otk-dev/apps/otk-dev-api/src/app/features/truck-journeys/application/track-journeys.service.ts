import { Injectable } from '@nestjs/common';
import { TruckJourneyRepositoryFacade } from '../adapters/persistence/truck-journey.repository-facade';
import { TruckJourneyEntity } from '../domain/entity/truck-journey.entity';
import { CreateJourneyUseCaseImplementation } from './use-cases/create-journey.use-case-implementation';
import { CreateJourneyCommand } from '../ports/in/create-journey.use-case';

@Injectable()
export class TrackJourneysService {
  constructor(
    private readonly truckJourneyRepositoryFacade: TruckJourneyRepositoryFacade,
    private readonly createJourneyUseCase: CreateJourneyUseCaseImplementation,
  ) {
  }

  public async create(command: CreateJourneyCommand): Promise<TruckJourneyEntity> {
    return this.createJourneyUseCase.create(command);
  }

  public async list(): Promise<TruckJourneyEntity[]> {
    return this.truckJourneyRepositoryFacade.repository.find();
  }
}
