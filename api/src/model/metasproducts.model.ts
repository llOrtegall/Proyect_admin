import { con_db } from '../connections/mariaDB'
import { Model, Optional, Sequelize, DataTypes } from 'sequelize'

type MetasAttributes = {
  FECHA: Date,
  CHANCE: number,
  PAGAMAS: number,
  PAGATODO: number,
  GANE5: number,
  PATA_MILLONARIA: number,
  DOBLECHANCE: number,
  CHANCE_MILLONARIO: number,
  ASTRO: number,
  LOTERIA_FISICA: number,
  LOTERIA_VIRTUAL: number,
  BETPLAY: number,
  GIROS: number,
  SOAT: number,
  RECAUDOS: number,
  RECARGAS: number,
  ZONA: number,
  CCOSTO: number,
  SUCURSAL: number,
  /* MT_CHANCE: number,
  PROMEDIO_DIARIO_CHANCE: number,
  MT_PAGAMAS: number,
  PROMEDIO_DIARIO_PAGAMAS: number,
  MT_PAGATODO: number,
  PROMEDIO_DIARIO_PAGATODO: number,
  MT_GANE5: number,
  PROMEDIO_DIARIO_GANE5: number,
  MT_PAGATODO_JAMUNDI: number,
  PROMEDIO_DIARIO_PGTJAMUNDI: number,
  MT_CHOLADITO: number,
  PROMEDIO_DIARIO_CHOLADITO: number,
  MT_PATA_MILLONARIA: number,
  PROMEDIO_DIARIO_PATAMI: number,
  MT_DOBLECHANCE: number,
  PROMEDIO_DIARIO_DOBLECHANCE: number,
  MT_CHANCE_MILLONARIO: number,
  PROMEDIO_DIARIO_CHMILL: number,
  MT_ASTRO: number,
  PROMEDIO_DIARIO_ASTRO: number,
  MT_LOTERIA_FISICA: number,
  PROMEDIO_DIARIO_LF: number,
  MT_LOTERIA_VIRTUAL: number,
  PROMEDIO_DIARIO_LV: number,
  MT_BETPLAY: number,
  PROMEDIO_DIARIO_BETPLAY: number,
  MT_GIROS: number,
  PROMEDIO_DIARIO_GIROS: number,
  MT_SOAT: number,
  PROMEDIO_DIARIO_SOAT: number,
  MT_RECAUDOS: number,
  PROMEDIO_DIARIO_RECAUDOS: number,
  MT_RECARGAS: number,
  PROMEDIO_DIARIO_RECARGAS: number,
  PROMO1: number,
  META_PROMO1: number,
  PROMO2: number,
  META_PROMO2: number,
  VERSION: string
  */
}

type MetasCreationAttributes = Optional<MetasAttributes, 'SUCURSAL'>

class Metas extends Model<MetasAttributes, MetasCreationAttributes> {
  declare FECHA: Date
  declare CHANCE: number
  declare PAGAMAS: number
  declare PAGATODO: number
  declare GANE5: number
  declare PATA_MILLONARIA: number
  declare DOBLECHANCE: number
  declare CHANCE_MILLONARIO: number
  declare ASTRO: number
  declare LOTERIA_FISICA: number
  declare LOTERIA_VIRTUAL: number
  declare BETPLAY: number
  declare GIROS: number
  declare SOAT: number
  declare RECAUDOS: number
  declare RECARGAS: number
  declare ZONA: number
  declare CCOSTO: number
  declare SUCURSAL: number
}

Metas.init({
  FECHA: { type: DataTypes.DATE, allowNull: false, primaryKey: true },
  ASTRO: { type: DataTypes.NUMBER, allowNull: false },
  BETPLAY: { type: DataTypes.NUMBER, allowNull: false },
  CCOSTO: { type: DataTypes.NUMBER, allowNull: false },
  CHANCE: { type: DataTypes.NUMBER, allowNull: false },
  CHANCE_MILLONARIO: { type: DataTypes.NUMBER, allowNull: false },
  DOBLECHANCE: { type: DataTypes.NUMBER, allowNull: false },
  GANE5: { type: DataTypes.NUMBER, allowNull: false },
  GIROS: { type: DataTypes.NUMBER, allowNull: false },
  LOTERIA_FISICA: { type: DataTypes.NUMBER, allowNull: false },
  LOTERIA_VIRTUAL: { type: DataTypes.NUMBER, allowNull: false },
  PAGAMAS: { type: DataTypes.NUMBER, allowNull: false },
  PAGATODO: { type: DataTypes.NUMBER, allowNull: false },
  PATA_MILLONARIA: { type: DataTypes.NUMBER, allowNull: false },
  RECAUDOS: { type: DataTypes.NUMBER, allowNull: false },
  RECARGAS: { type: DataTypes.NUMBER, allowNull: false },
  SOAT: { type: DataTypes.NUMBER, allowNull: false },
  ZONA: { type: DataTypes.NUMBER, allowNull: false },
  SUCURSAL: { type: DataTypes.NUMBER, allowNull: false, primaryKey: true}
}, {
  sequelize: con_db,
  modelName: 'metas',
  tableName: 'METASPRODUCTOS',
  timestamps: false
})

export { Metas }