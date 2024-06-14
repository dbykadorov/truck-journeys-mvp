import {ITruckJourney} from "@otk-dev/shared";

export interface CreateJourneyUseCase {
  create(command: CreateJourneyCommand): Promise<ITruckJourney>;
}

export interface CreateJourneyCommand {
  title?: string;
  description?: string;
  departedOn?: Date;
  arrivedOn?: Date;
  createdBy?: string;
}

export const CreateJourneyUseCase = Symbol('CreateJourneyUseCase');
