import { Sucursal, SucursalreationAttributes } from '../types/sucursales'
import { Model, DataTypes } from 'sequelize'
import { con_db } from '../connections/mariaDB'

class Sucursales extends Model<Sucursal, SucursalreationAttributes> {
  declare ZONA: number
  declare CCOSTO: number
  declare CODIGO: number
  declare NOMBRE: string
  declare DIRECCION: string
  declare BARRIO: string
  declare LATITUD: string
  declare LONGITUD: string
  declare TIPO: string
  declare DISPOSITIVO: string
  declare CATEGORIA: string
  declare SUPERVISOR: string
  declare ARRENDATARIO: string
  declare ESTADO: string
  declare FECHASYS: Date
  declare FECHA_ACCESO: Date
  declare LOGIN: string
  declare VERSION: string
}

Sucursales.init({
  ZONA: { type: DataTypes.INTEGER },
  CCOSTO: { type: DataTypes.INTEGER },
  CODIGO: { type: DataTypes.NUMBER, primaryKey: true , unique: true},
  NOMBRE: { type: DataTypes.STRING },
  DIRECCION: { type: DataTypes.STRING },
  BARRIO: { type: DataTypes.STRING },
  LATITUD: { type: DataTypes.STRING },
  LONGITUD: { type: DataTypes.STRING },
  TIPO: { type: DataTypes.STRING },
  DISPOSITIVO: { type: DataTypes.STRING },
  CATEGORIA: { type: DataTypes.STRING },
  SUPERVISOR: { type: DataTypes.STRING },
  ARRENDATARIO: { type: DataTypes.STRING },
  ESTADO: { type: DataTypes.STRING },
  FECHASYS: { type: DataTypes.DATE },
  FECHA_ACCESO: { type: DataTypes.DATE },
  LOGIN: { type: DataTypes.STRING },
  VERSION: { type: DataTypes.STRING }
}, {
  sequelize: con_db,
  modelName: 'sucursales',
  tableName: 'INFORMACION_PUNTOSVENTA',
  timestamps: false
})