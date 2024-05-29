import { type MetasMultired, type MetasServired } from '../types/metas'

interface Products {
  id: number
  nombre: string
  venta: number
  porcentaje: number
}

export function porcentajeCumplimientoServired (data: MetasServired): number {
  const VentaChance = data.CHANCE + data.CHOLADITO + data.PAGATODO_JAMUNDI + data.GANE5 + data.PATA_MILLONARIA + data.DOBLECHANCE + data.CHANCE_MILLONARIO
  const Promedio = data.PROMEDIO_DIARIO_CHANCE + data.PROMEDIO_DIARIO_CHOLADITO + data.PROMEDIO_DIARIO_PGTJAMUNDI + data.PROMEDIO_DIARIO_GANE5 + data.PROMEDIO_DIARIO_PATAMI + data.PROMEDIO_DIARIO_DOBLECHANCE + data.PROMEDIO_DIARIO_CHMILL

  return (Math.round((VentaChance / Promedio) * 100))
}

export function porcentajeCumplimientoMultired (data: MetasMultired): number {
  const VentaChance = data.CHANCE + data.PAGAMAS + data.PAGATODO + data.GANE5 + data.PATA_MILLONARIA + data.DOBLECHANCE + data.CHANCE_MILLONARIO
  const Promedio = data.PROMEDIO_DIARIO_CHANCE + data.PROMEDIO_DIARIO_PAGAMAS + data.PROMEDIO_DIARIO_PAGATODO + data.PROMEDIO_DIARIO_GANE5 + data.PROMEDIO_DIARIO_PATAMI + data.PROMEDIO_DIARIO_DOBLECHANCE + data.PROMEDIO_DIARIO_CHMILL

  return (Math.round((VentaChance / Promedio) * 100))
}

export function CalcularMetaDiaServired (data: MetasServired): number {
  const Promedio = data.PROMEDIO_DIARIO_CHANCE + data.PROMEDIO_DIARIO_CHOLADITO + data.PROMEDIO_DIARIO_PGTJAMUNDI + data.PROMEDIO_DIARIO_PATAMI + data.PROMEDIO_DIARIO_DOBLECHANCE + data.PROMEDIO_DIARIO_CHMILL
  return (Promedio)
}

export function CalcularMetaDiaMultired (data: MetasMultired): number {
  const Promedio = data.PROMEDIO_DIARIO_CHANCE + data.PROMEDIO_DIARIO_PAGAMAS + data.PROMEDIO_DIARIO_PAGATODO + data.PROMEDIO_DIARIO_PATAMI + data.PROMEDIO_DIARIO_DOBLECHANCE + data.PROMEDIO_DIARIO_CHMILL
  return (Promedio)
}

export function CalcularVentaDiaServired (data: MetasServired): number {
  // * falta agregar todos los productos para la venta total de servired
  const VentaChance = data.CHANCE + data.CHOLADITO + data.PAGATODO_JAMUNDI + data.GANE5 + data.PATA_MILLONARIA + data.DOBLECHANCE + data.CHANCE_MILLONARIO
  return (VentaChance)
}

export function CalcularVentaDiaMultired (data: MetasMultired): number {
  // * falta agregar todos los productos para la venta total de Multired
  const VentaChance = data.CHANCE + data.PAGAMAS + data.PAGATODO + data.GANE5 + data.PATA_MILLONARIA + data.DOBLECHANCE + data.CHANCE_MILLONARIO
  return (VentaChance)
}

export function MapearProductosServired (data: MetasServired): Products[] {
  return [
    {
      id: 1,
      nombre: 'ASTRO',
      venta: data.ASTRO,
      porcentaje: Math.round((data.ASTRO / data.PROMEDIO_DIARIO_ASTRO) * 100)
    },
    {
      id: 2,
      nombre: 'RECARGAS',
      venta: data.RECARGAS,
      porcentaje: Math.round((data.RECARGAS / data.PROMEDIO_DIARIO_RECARGAS) * 100)
    },
    {
      id: 3,
      nombre: 'LOT FISICA',
      venta: data.LOTERIA_FISICA,
      porcentaje: Math.round((data.LOTERIA_FISICA / data.PROMEDIO_DIARIO_LF) * 100)
    },
    {
      id: 4,
      nombre: 'LOT VIRTUAL',
      venta: data.LOTERIA_VIRTUAL,
      porcentaje: Math.round((data.LOTERIA_VIRTUAL / data.PROMEDIO_DIARIO_LV) * 100)
    },
    {
      id: 5,
      nombre: 'BETPLAY',
      venta: data.BETPLAY,
      porcentaje: Math.round((data.BETPLAY / data.PROMEDIO_DIARIO_BETPLAY) * 100)
    },
    {
      id: 6,
      nombre: 'BALOTO',
      venta: data.SOAT,
      porcentaje: Math.round((data.SOAT / data.PROMEDIO_DIARIO_SOAT) * 100)
    },
    {
      id: 7,
      nombre: 'RASPE Y LISTO',
      venta: data.PROMO2,
      porcentaje: Math.round((data.PROMO2 / data.META_PROMO2) * 100)
    },
    {
      id: 8,
      nombre: 'GIROS',
      venta: data.GIROS,
      porcentaje: Math.round((data.GIROS / data.PROMEDIO_DIARIO_GIROS) * 100)
    },
    {
      id: 9,
      nombre: 'RECAUDOS ',
      venta: data.RECAUDOS,
      porcentaje: Math.round((data.RECAUDOS / data.PROMEDIO_DIARIO_RECAUDOS) * 100)
    }
  ]
}

export function MapearProductosMultired (data: MetasMultired): Products[] {
  return [
    {
      id: 1,
      nombre: 'ASTRO',
      venta: data.ASTRO,
      porcentaje: Math.round((data.ASTRO / data.PROMEDIO_DIARIO_ASTRO) * 100)
    },
    {
      id: 2,
      nombre: 'RECARGAS',
      venta: data.RECARGAS,
      porcentaje: Math.round((data.RECARGAS / data.PROMEDIO_DIARIO_RECARGAS) * 100)
    },
    {
      id: 3,
      nombre: 'LOT FISICA',
      venta: data.LOTERIA_FISICA,
      porcentaje: Math.round((data.LOTERIA_FISICA / data.PROMEDIO_DIARIO_LF) * 100)
    },
    {
      id: 4,
      nombre: 'LOT VIRTUAL',
      venta: data.LOTERIA_VIRTUAL,
      porcentaje: Math.round((data.LOTERIA_VIRTUAL / data.PROMEDIO_DIARIO_LV) * 100)
    },
    {
      id: 5,
      nombre: 'BETPLAY',
      venta: data.BETPLAY,
      porcentaje: Math.round((data.BETPLAY / data.PROMEDIO_DIARIO_BETPLAY) * 100)
    },
    {
      id: 6,
      nombre: 'BALOTO',
      venta: data.SOAT,
      porcentaje: Math.round((data.SOAT / data.PROMEDIO_DIARIO_SOAT) * 100)
    },
    {
      id: 7,
      nombre: 'RASPE Y LISTO',
      venta: data.PROMO2,
      porcentaje: Math.round((data.PROMO2 / data.META_PROMO2) * 100)
    },
    {
      id: 8,
      nombre: 'GIROS',
      venta: data.GIROS,
      porcentaje: Math.round((data.GIROS / data.PROMEDIO_DIARIO_GIROS) * 100)
    },
    {
      id: 9,
      nombre: 'RECAUDOS ',
      venta: data.RECAUDOS,
      porcentaje: Math.round((data.RECAUDOS / data.PROMEDIO_DIARIO_RECAUDOS) * 100)
    }
  ]
}
