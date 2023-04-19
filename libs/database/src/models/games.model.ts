import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  DefaultScope,
} from 'sequelize-typescript';
import { Igames } from '../definitions';
import { GamesTypesModel } from './games_type.model';

@DefaultScope(() => ({
  raw: true,
  attributes: {
    include: ['game_type.type'],
    exclude: ['game_type_id'],
  },
  include: [
    {
      model: GamesTypesModel,
      attributes: [],
    },
  ],
}))
@Table({
  tableName: 'games',
  timestamps: false,
})
export class GamesModel extends Model implements Igames {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id?: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  users_score: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  critics_score: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  release_date: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image_url: string;
  @Column({
    type: DataType.STRING(350),
    allowNull: false,
  })
  description: string;
  @ForeignKey(() => GamesTypesModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  game_type_id: number;

  @BelongsTo(() => GamesTypesModel)
  game_type: GamesTypesModel;
}
