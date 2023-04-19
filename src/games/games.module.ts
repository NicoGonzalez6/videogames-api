import { GamesModel } from '../../libs/database/src/models';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GamesController } from './controllers';
import { GamesServices } from './services';

@Module({
  imports: [SequelizeModule.forFeature([GamesModel])],
  controllers: [GamesController],
  providers: [GamesServices],
})
export class GamesModule {}
