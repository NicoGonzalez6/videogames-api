import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class GetGameDto {
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'game id',
  })
  id: number;
}

export class GetGamesDto {
  @ApiPropertyOptional({
    example: 'star',
    description: 'name of the game',
  })
  name?: string;
  @ApiPropertyOptional({
    description: 'current page',
  })
  currentPage: number;
}
