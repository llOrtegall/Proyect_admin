import { DataTypes, Model, Optional } from 'sequelize';
import { con_db } from '../connections'


interface MetaAttributes {
  sucursal: number;
  zona: number;
  fecha: Date;
  chance: number;
  pagamas: number;
  pagatodo: number;
  doblechance: number;
  chance_millonario: number;
  astro: number;
  loteria_fisica: number;
  loteria_virtual: number;
  betplay: number;
  giros: number;
  soat: number;
  recargas: number;
}

type MetaCreationAttributes = Optional<MetaAttributes, 'sucursal'>;

export class Meta extends Model<MetaAttributes, MetaCreationAttributes> {
  declare sucursal: number;
  declare zona: number;
  declare fecha: Date;
  declare chance: number;
  declare pagamas: number;
  declare pagatodo: number;
  declare doblechance: number;
  declare chance_millonario: number;
  declare astro: number;
  declare loteria_fisica: number;
  declare loteria_virtual: number;
  declare betplay: number;
  declare giros: number;
  declare soat: number;
  declare recargas: number;
}

Meta.init({
  sucursal: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
  zona: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
  fecha: { type: DataTypes.DATE, allowNull: false, primaryKey: true },
  chance: { type: DataTypes.INTEGER, allowNull: false },
  pagamas: { type: DataTypes.INTEGER, allowNull: false },
  pagatodo: { type: DataTypes.INTEGER, allowNull: false },
  doblechance: { type: DataTypes.INTEGER, allowNull: false },
  chance_millonario: { type: DataTypes.INTEGER, allowNull: false },
  astro: { type: DataTypes.INTEGER, allowNull: false },
  loteria_fisica: { type: DataTypes.INTEGER, allowNull: false },
  loteria_virtual: { type: DataTypes.INTEGER, allowNull: false },
  betplay: { type: DataTypes.INTEGER, allowNull: false },
  giros: { type: DataTypes.INTEGER, allowNull: false },
  soat: { type: DataTypes.INTEGER, allowNull: false },
  recargas: { type: DataTypes.INTEGER, allowNull: false }
}, {
  sequelize: con_db,
  tableName: 'METASPRODUCTOS',
  timestamps: false
});