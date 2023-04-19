import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  GetGameResponseDto,
  GetGameDto,
  GetGamesDto,
  GetGamesResponseDto,
} from '../dtos';
import { GamesServices } from '../services';

@ApiTags('Games')
@Controller('games')
export class GamesController {
  constructor(private gamesServices: GamesServices) {}
  @ApiResponse({
    type: GetGameResponseDto,
    isArray: true,
    status: 200,
  })
  @Get()
  async getAll(
    @Query() { name, currentPage }: GetGamesDto,
  ): Promise<GetGamesResponseDto> {
    return await this.gamesServices.getAllGames(name, currentPage);
  }
  @ApiResponse({
    type: GetGameResponseDto,
    status: 200,
  })
  @Get(':id')
  async getSingle(@Param() { id }: GetGameDto): Promise<GetGameResponseDto> {
    return await this.gamesServices.getGame(id);
  }
}
