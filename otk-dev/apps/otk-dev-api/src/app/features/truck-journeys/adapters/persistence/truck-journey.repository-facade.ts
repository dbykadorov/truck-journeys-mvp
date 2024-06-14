import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TruckJourneyEntity } from '../../domain/entity/truck-journey.entity';
import { CreateJourneyPort } from '../../ports/out/create-journey.port';
import { ITruckJourney } from '@otk-dev/shared';
import { CreateJourneyCommand } from '../../ports/in/create-journey.use-case';

@Injectable()
export class TruckJourneyRepositoryFacade implements CreateJourneyPort {
  constructor(
    @InjectRepository(TruckJourneyEntity)
    private truckJourneyEntityRepository: Repository<TruckJourneyEntity>,
  ) {
  }

  async create(command: CreateJourneyCommand): Promise<TruckJourneyEntity & ITruckJourney> {
    const entity = new TruckJourneyEntity();

    entity.title = command.title;
    entity.description = command.description;
    entity.departedOn = command.departedOn;
    entity.arrivedOn = command.arrivedOn;
    entity.createdBy = command.createdBy;

    return await this.truckJourneyEntityRepository.save(entity);
  }

  get repository(): Repository<TruckJourneyEntity> {
    return this.truckJourneyEntityRepository;
  }
}
