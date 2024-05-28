import { RowDataPacket } from 'mysql2/promise';

export interface MetasYumbo extends RowDataPacket{
  FECHA: Date
  CHANCE: number
  PAGAMAS: number
  PAGATODO: number
  GANE5: number
  PATA_MILLONARIA: number
  DOBLECHANCE: number
  CHANCE_MILLONARIO: number
  ASTRO: number
  LOTERIA_FISICA: number
  LOTERIA_VIRTUAL: number
  BETPLAY: number
  GIROS: number
  SOAT: number
  RECAUDOS: number
  RECARGAS: number
  PROMO2: number
  PROMEDIO_DIARIO_CHANCE: number
  PROMEDIO_DIARIO_PAGAMAS: number
  PROMEDIO_DIARIO_PAGATODO: number
  PROMEDIO_DIARIO_GANE5: number
  PROMEDIO_DIARIO_PATAMI: number
  PROMEDIO_DIARIO_DOBLECHANCE: number
  PROMEDIO_DIARIO_CHMILL: number
  PROMEDIO_DIARIO_ASTRO: number
  PROMEDIO_DIARIO_LF: number
  PROMEDIO_DIARIO_LV: number
  PROMEDIO_DIARIO_BETPLAY: number
  PROMEDIO_DIARIO_GIROS: number
  PROMEDIO_DIARIO_SOAT: number
  PROMEDIO_DIARIO_RECAUDOS  : number
  PROMEDIO_DIARIO_RECARGAS: number
  META_PROMO2: number
}

export interface MetasJamundi extends RowDataPacket{
  FECHA: Date
  CHANCE: number
  CHOLADITO: number
  PAGATODO_JAMUNDI: number
  GANE5: number
  PATA_MILLONARIA: number
  DOBLECHANCE: number
  CHANCE_MILLONARIO: number
  ASTRO: number
  LOTERIA_FISICA: number
  LOTERIA_VIRTUAL: number
  BETPLAY: number
  GIROS: number
  SOAT: number
  RECAUDOS: number
  RECARGAS: number
  PROMO2: number
  PROMEDIO_DIARIO_CHANCE: number
  PROMEDIO_DIARIO_CHOLADITO: number
  PROMEDIO_DIARIO_PGTJAMUNDI: number
  PROMEDIO_DIARIO_GANE5: number
  PROMEDIO_DIARIO_PATAMI: number
  PROMEDIO_DIARIO_DOBLECHANCE: number     
  PROMEDIO_DIARIO_CHMILL: number
  PROMEDIO_DIARIO_ASTRO: number
  PROMEDIO_DIARIO_LF: number
  PROMEDIO_DIARIO_LV: number
  PROMEDIO_DIARIO_BETPLAY: number
  PROMEDIO_DIARIO_GIROS: number
  PROMEDIO_DIARIO_SOAT: number
  PROMEDIO_DIARIO_RECAUDOS: number
  PROMEDIO_DIARIO_RECARGAS: number
  META_PROMO2: number
}