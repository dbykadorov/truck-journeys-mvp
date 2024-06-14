import { IsDateString, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TruckJourneyCreateDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  title: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  departedOn: Date;

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  arrivedOn: Date;

  @ApiProperty()
  @IsString()
  @IsOptional()
  createdBy: string;
}
