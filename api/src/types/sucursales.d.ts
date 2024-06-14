import { Optional } from "sequelize"

export interface Sucursal {
  ZONA: number
  CCOSTO: number
  CODIGO: number
  NOMBRE: string
  DIRECCION: string
  BARRIO: string
  LATITUD: string
  LONGITUD: string
  TIPO: string
  DISPOSITIVO: string
  CATEGORIA: string
  SUPERVISOR: string
  ARRENDATARIO: string
  ESTADO: string
  FECHASYS: Date
  FECHA_ACCESO: Date
  LOGIN: string
  VERSION: string
}

export type SucursalreationAttributes = Optional<Sucursal, 'CODIGO'>
