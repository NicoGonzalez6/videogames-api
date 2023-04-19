import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IgetGamesResponse } from '@definitions';

export class GetGameResponseDto
  implements
    Pick<
      IgetGamesResponse,
      | 'name'
      | 'users_score'
      | 'critics_score'
      | 'release_date'
      | 'image_url'
      | 'description'
      | 'type'
    >
{
  @ApiProperty({
    example: 'example game name',
    description: 'name of the game',
  })
  name: string;
  @ApiProperty({
    example: '8.5',
    description: 'Metacritic users score',
  })
  users_score: string;
  @ApiProperty({
    example: '9',
    description: 'Metacritic critics score',
  })
  critics_score: string;
  @ApiProperty({
    example: '2012-8-30',
    description: 'Release date of the game',
  })
  release_date: string;
  @ApiProperty({
    example:
      'https://static.metacritic.com/images/products/games/1/381270905624fa84865e1fe874eb8eb5-98.jpg',
    description: 'image url',
  })
  image_url: string;
  @ApiProperty({
    example: 'short description of the game',
    description: 'description of the game',
  })
  description: string;
  @ApiPropertyOptional({
    example: 'action',
    description: 'genre of the game',
  })
  type?: string;
}

export class GetGamesResponseDto {
  currentPage: number;
  totalPages: number;
  totalGames: number;
  games: GetGameResponseDto[];
}
