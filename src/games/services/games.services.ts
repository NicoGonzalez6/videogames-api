import { GamesModel } from '../../../libs/database/src/models';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Igames } from '../../../libs/database/src/definitions';
import { Op } from 'sequelize';
import { GetGamesResponseDto } from '../dtos';

@Injectable()
export class GamesServices {
  constructor(
    @InjectModel(GamesModel)
    private gamesModel: typeof GamesModel,
  ) {}

  async getAllGames(
    name: string,
    currentPage = 1,
  ): Promise<GetGamesResponseDto> {
    if (currentPage <= 0) {
      throw new BadRequestException('Page cannot be less than 0');
    }

    const searchGameLimit = 10;
    let totalPages = undefined;

    const params = {
      where: {},
      offset: searchGameLimit * (currentPage - 1),
      limit: searchGameLimit,
    };

    if (name) {
      params['where'] = {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      };
      totalPages = await this.gamesModel.count({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
    } else {
      totalPages = await this.gamesModel.count();
    }

    const games = await this.gamesModel.findAll({
      ...params,
      order: [['name', 'ASC']],
    });

    return {
      totalGames: games.length,
      currentPage: +currentPage,
      totalPages: Math.ceil(totalPages / searchGameLimit),
      games,
    };
  }

  async getGame(id): Promise<Igames> {
    const game = await this.gamesModel.findOne({
      where: {
        id,
      },
    });

    if (!game) {
      throw new NotFoundException('No game found');
    }

    return game;
  }
}
