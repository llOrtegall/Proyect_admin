import { type MetasMultired, type MetasServired } from '../types/metas'

export function CalcularMetaDiaServired (data: MetasServired): number {
  return data.PROMEDIO_DIARIO_CHANCE + data.CHOLADITO + data.PAGATODO_JAMUNDI + data.PROMEDIO_DIARIO_PATAMI + data.PROMEDIO_DIARIO_DOBLECHANCE + data.PROMEDIO_DIARIO_CHMILL
}

export function CalcularMetaDiaMultired (data: MetasMultired): number {
  return data.PROMEDIO_DIARIO_CHANCE + data.PAGAMAS + data.PAGATODO + data.PROMEDIO_DIARIO_PATAMI + data.PROMEDIO_DIARIO_DOBLECHANCE + data.PROMEDIO_DIARIO_CHMILL
}

export function CalcularVentaDiaServired (data: MetasServired): number {
  return data.CHANCE + data.CHOLADITO + data.PAGATODO_JAMUNDI + data.GANE5 + data.PATA_MILLONARIA + data.DOBLECHANCE + data.CHANCE_MILLONARIO
}

export function CalcularVentaDiaMultired (data: MetasMultired): number {
  return data.CHANCE + data.PAGAMAS + data.PAGATODO + data.GANE5 + data.PATA_MILLONARIA + data.DOBLECHANCE + data.CHANCE_MILLONARIO
}
