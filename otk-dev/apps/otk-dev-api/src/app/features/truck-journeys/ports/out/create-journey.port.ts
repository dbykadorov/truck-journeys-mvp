import {ITruckJourney} from "@otk-dev/shared";
import {CreateJourneyCommand} from "../in/create-journey.use-case";

export interface CreateJourneyPort{
  create(command: CreateJourneyCommand): Promise<Partial<ITruckJourney>>;
}

export const CreateJourneyPort = Symbol('CreateJourneyPort');
