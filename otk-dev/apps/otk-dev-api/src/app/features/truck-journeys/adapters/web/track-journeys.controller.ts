import { Body, Controller, Get, Post } from '@nestjs/common';
import {TrackJourneysService} from "../../application/track-journeys.service";
import { TruckJourneyCreateDto } from './dto';
import { CreateJourneyCommand } from '../../ports/in/create-journey.use-case';
import { ApiOperation } from '@nestjs/swagger';

@Controller('track-journeys')
export class TrackJourneysController {
  constructor(
    private readonly service: TrackJourneysService,
  ) {
  }

  @Get('list')
  public async list() {
    return this.service.list();
  }


  @Post('create')
  public async create(
    @Body() createDto: TruckJourneyCreateDto
  ) {
    return await this.service.create({
      ...createDto,
    } as CreateJourneyCommand);
  }
}
