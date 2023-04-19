import { Table, Column, Model, DataType, HasOne } from 'sequelize-typescript';
import { IgamesType, Egames_type } from '../definitions';
import { GamesModel } from './games.model';

@Table({
  tableName: 'games_type',
  timestamps: false,
})
export class GamesTypesModel extends Model implements IgamesType {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id?: number;
  @Column({
    type: DataType.ENUM(...Object.values(Egames_type)),
    allowNull: false,
  })
  type: Egames_type;

  @HasOne(() => GamesModel)
  game: GamesModel;
}
