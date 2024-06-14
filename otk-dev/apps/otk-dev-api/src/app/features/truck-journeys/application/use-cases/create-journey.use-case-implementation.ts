import { Injectable } from '@nestjs/common';
import { CreateJourneyCommand, CreateJourneyUseCase } from '../../ports/in/create-journey.use-case';
import { TruckJourneyEntity } from '../../domain/entity/truck-journey.entity';
import { ITruckJourney } from '@otk-dev/shared';
import { TruckJourneyRepositoryFacade } from '../../adapters/persistence/truck-journey.repository-facade';

@Injectable()
export class CreateJourneyUseCaseImplementation implements CreateJourneyUseCase {

  public constructor(
    private readonly createJourneyPort: TruckJourneyRepositoryFacade
  ) {
  }

  public async create(command: CreateJourneyCommand): Promise<Partial<ITruckJourney & TruckJourneyEntity>> {
    return await this.createJourneyPort.create(command);
  }

}
