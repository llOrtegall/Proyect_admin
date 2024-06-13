import { con_db } from '../connections/mariaDB'
import { Model, Optional, Sequelize, DataTypes } from 'sequelize'

export interface MetasAttributes {
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
  MT_CHANCE: number,
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
  declare MT_CHANCE: number
  declare PROMEDIO_DIARIO_CHANCE: number
  declare MT_PAGAMAS: number
  declare PROMEDIO_DIARIO_PAGAMAS: number
  declare MT_PAGATODO: number
  declare PROMEDIO_DIARIO_PAGATODO: number
  declare MT_GANE5: number
  declare PROMEDIO_DIARIO_GANE5: number
  declare MT_PAGATODO_JAMUNDI: number
  declare PROMEDIO_DIARIO_PGTJAMUNDI: number
  declare MT_CHOLADITO: number
  declare PROMEDIO_DIARIO_CHOLADITO: number
  declare MT_PATA_MILLONARIA: number
  declare PROMEDIO_DIARIO_PATAMI: number
  declare MT_DOBLECHANCE: number
  declare PROMEDIO_DIARIO_DOBLECHANCE: number
  declare MT_CHANCE_MILLONARIO: number
  declare PROMEDIO_DIARIO_CHMILL: number
  declare MT_ASTRO: number
  declare PROMEDIO_DIARIO_ASTRO: number
  declare MT_LOTERIA_FISICA: number
  declare PROMEDIO_DIARIO_LF: number
  declare MT_LOTERIA_VIRTUAL: number
  declare PROMEDIO_DIARIO_LV: number
  declare MT_BETPLAY: number
  declare PROMEDIO_DIARIO_BETPLAY: number
  declare MT_GIROS: number
  declare PROMEDIO_DIARIO_GIROS: number
  declare MT_SOAT: number
  declare PROMEDIO_DIARIO_SOAT: number
  declare MT_RECAUDOS: number
  declare PROMEDIO_DIARIO_RECAUDOS: number
  declare MT_RECARGAS: number
  declare PROMEDIO_DIARIO_RECARGAS: number
  declare PROMO1: number
  declare META_PROMO1: number
  declare PROMO2: number
  declare META_PROMO2: number
  declare VERSION: string
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
  SUCURSAL: { type: DataTypes.NUMBER, allowNull: false, primaryKey: true},
  MT_CHANCE: { type: DataTypes.NUMBER, allowNull: false },
  PROMEDIO_DIARIO_CHANCE: { type: DataTypes.NUMBER, allowNull: false },
  MT_PAGAMAS: { type: DataTypes.NUMBER, allowNull: false },
  PROMEDIO_DIARIO_PAGAMAS: { type: DataTypes.NUMBER, allowNull: false },
  MT_PAGATODO: { type: DataTypes.NUMBER, allowNull: false },
  PROMEDIO_DIARIO_PAGATODO: { type: DataTypes.NUMBER, allowNull: false },
  MT_GANE5: { type: DataTypes.NUMBER, allowNull: false },
  PROMEDIO_DIARIO_GANE5: { type: DataTypes.NUMBER, allowNull: false },
  MT_PAGATODO_JAMUNDI: { type: DataTypes.NUMBER, allowNull: false },
  PROMEDIO_DIARIO_PGTJAMUNDI: { type: DataTypes.NUMBER, allowNull: false },
  MT_CHOLADITO: { type: DataTypes.NUMBER, allowNull: false },
  PROMEDIO_DIARIO_CHOLADITO: { type: DataTypes.NUMBER, allowNull: false },
  MT_PATA_MILLONARIA: { type: DataTypes.NUMBER, allowNull: false },
  PROMEDIO_DIARIO_PATAMI: { type: DataTypes.NUMBER, allowNull: false },
  MT_DOBLECHANCE: { type: DataTypes.NUMBER, allowNull: false },
  PROMEDIO_DIARIO_DOBLECHANCE: { type: DataTypes.NUMBER, allowNull: false },
  MT_CHANCE_MILLONARIO: { type: DataTypes.NUMBER, allowNull: false },
  PROMEDIO_DIARIO_CHMILL: { type: DataTypes.NUMBER, allowNull: false },
  MT_ASTRO: { type: DataTypes.NUMBER, allowNull: false },
  PROMEDIO_DIARIO_ASTRO: { type: DataTypes.NUMBER, allowNull: false },
  MT_LOTERIA_FISICA: { type: DataTypes.NUMBER, allowNull: false },
  PROMEDIO_DIARIO_LF: { type: DataTypes.NUMBER, allowNull: false },
  MT_LOTERIA_VIRTUAL: { type: DataTypes.NUMBER, allowNull: false },
  PROMEDIO_DIARIO_LV: { type: DataTypes.NUMBER, allowNull: false },
  MT_BETPLAY: { type: DataTypes.NUMBER, allowNull: false },
  PROMEDIO_DIARIO_BETPLAY: { type: DataTypes.NUMBER, allowNull: false },
  MT_GIROS: { type: DataTypes.NUMBER, allowNull: false },
  PROMEDIO_DIARIO_GIROS: { type: DataTypes.NUMBER, allowNull: false },
  MT_SOAT: { type: DataTypes.NUMBER, allowNull: false },
  PROMEDIO_DIARIO_SOAT: { type: DataTypes.NUMBER, allowNull: false },
  MT_RECAUDOS: { type: DataTypes.NUMBER, allowNull: false },
  PROMEDIO_DIARIO_RECAUDOS: { type: DataTypes.NUMBER, allowNull: false },
  MT_RECARGAS: { type: DataTypes.NUMBER, allowNull: false },
  PROMEDIO_DIARIO_RECARGAS: { type: DataTypes.NUMBER, allowNull: false },
  PROMO1: { type: DataTypes.NUMBER, allowNull: false },
  META_PROMO1: { type: DataTypes.NUMBER, allowNull: false },
  PROMO2: { type: DataTypes.NUMBER, allowNull: false },
  META_PROMO2: { type: DataTypes.NUMBER, allowNull: false },
  VERSION: { type: DataTypes.STRING, allowNull: false }
}, {
  sequelize: con_db,
  modelName: 'metas',
  tableName: 'METASPRODUCTOS',
  timestamps: false
})

export { Metas }