import { type MetasMultired, type MetasServired } from '../types/metas'

interface Products {
  id: number
  nombre: string
  venta: number
  porcentaje: number
}

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
      nombre: 'CHANCE',
      venta: data.CHANCE,
      porcentaje: Math.round((data.CHANCE / data.PROMEDIO_DIARIO_CHANCE) * 100)
    },
    {
      id: 4,
      nombre: 'CHOLADITO',
      venta: data.CHOLADITO,
      porcentaje: Math.round((data.CHOLADITO / data.PROMEDIO_DIARIO_CHOLADITO) * 100)
    },
    {
      id: 5,
      nombre: 'PAGATODO JAMUNDI',
      venta: data.PAGATODO_JAMUNDI,
      porcentaje: Math.round((data.PAGATODO_JAMUNDI / data.PROMEDIO_DIARIO_PGTJAMUNDI) * 100)
    },
    {
      id: 6,
      nombre: 'PATA MILLONARIA',
      venta: data.PATA_MILLONARIA,
      porcentaje: Math.round((data.PATA_MILLONARIA / data.PROMEDIO_DIARIO_PATAMI) * 100)
    },
    {
      id: 7,
      nombre: 'DOBLE CHANCE',
      venta: data.DOBLECHANCE,
      porcentaje: Math.round((data.DOBLECHANCE / data.PROMEDIO_DIARIO_DOBLECHANCE) * 100)
    },
    {
      id: 8,
      nombre: 'CHANCE MILLONARIO',
      venta: data.CHANCE_MILLONARIO,
      porcentaje: Math.round((data.CHANCE_MILLONARIO / data.PROMEDIO_DIARIO_CHMILL) * 100)
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
      nombre: 'CHANCE',
      venta: data.CHANCE,
      porcentaje: Math.round((data.CHANCE / data.PROMEDIO_DIARIO_CHANCE) * 100)
    },
    {
      id: 4,
      nombre: 'PAGAMAS',
      venta: data.PAGAMAS,
      porcentaje: Math.round((data.PAGAMAS / data.PROMEDIO_DIARIO_PAGAMAS) * 100)
    },
    {
      id: 5,
      nombre: 'PAGATODO',
      venta: data.PAGATODO,
      porcentaje: Math.round((data.PAGATODO / data.PROMEDIO_DIARIO_PAGATODO) * 100)
    },
    {
      id: 6,
      nombre: 'PATA MILLONARIA',
      venta: data.PATA_MILLONARIA,
      porcentaje: Math.round((data.PATA_MILLONARIA / data.PROMEDIO_DIARIO_PATAMI) * 100)
    },
    {
      id: 7,
      nombre: 'DOBLE CHANCE',
      venta: data.DOBLECHANCE,
      porcentaje: Math.round((data.DOBLECHANCE / data.PROMEDIO_DIARIO_DOBLECHANCE) * 100)
    },
    {
      id: 8,
      nombre: 'CHANCE MILLONARIO',
      venta: data.CHANCE_MILLONARIO,
      porcentaje: Math.round((data.CHANCE_MILLONARIO / data.PROMEDIO_DIARIO_CHMILL) * 100)
    }
  ]
}
