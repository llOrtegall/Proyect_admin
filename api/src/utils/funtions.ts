import { MetasProductMultired, MetasProductServired } from "../types/interfaces";
function CalcularMetaDiaServired (data: MetasProductServired): number {
  return data.PROMEDIO_DIARIO_CHANCE + data.PROMEDIO_DIARIO_CHOLADITO + data.PROMEDIO_DIARIO_PGTJAMUNDI + data.PROMEDIO_DIARIO_PATAMI + data.PROMEDIO_DIARIO_DOBLECHANCE + data.PROMEDIO_DIARIO_CHMILL
}
function CalcularMetaDiaMultired (data: MetasProductMultired): number {
  return data.PROMEDIO_DIARIO_CHANCE + data.PROMEDIO_DIARIO_PAGAMAS + data.PROMEDIO_DIARIO_PAGATODO + data.PROMEDIO_DIARIO_PATAMI + data.PROMEDIO_DIARIO_DOBLECHANCE + data.PROMEDIO_DIARIO_CHMILL
}
function CalcularVentaProductosChanceServired (data: MetasProductServired): number {
  // * falta agregar todos los productos para la venta total de servired
  const VentaChance = data.CHANCE + data.CHOLADITO + data.PAGATODO_JAMUNDI + data.GANE5 + data.PATA_MILLONARIA + data.DOBLECHANCE + data.CHANCE_MILLONARIO
  return (VentaChance)
}
function CalcularVentaProductosChanceMultired (data: MetasProductMultired): number {
  // * falta agregar todos los productos para la venta total de Multired
  const VentaChance = data.CHANCE + data.PAGAMAS + data.PAGATODO + data.GANE5 + data.PATA_MILLONARIA + data.DOBLECHANCE + data.CHANCE_MILLONARIO
  return (VentaChance)
}
function porcentajeCumplimientoServired (data: MetasProductServired): number {
  const VentaChance = data.CHANCE + data.CHOLADITO + data.PAGATODO_JAMUNDI + data.GANE5 + data.PATA_MILLONARIA + data.DOBLECHANCE + data.CHANCE_MILLONARIO
  const Promedio = data.PROMEDIO_DIARIO_CHANCE + data.PROMEDIO_DIARIO_CHOLADITO + data.PROMEDIO_DIARIO_PGTJAMUNDI + data.PROMEDIO_DIARIO_GANE5 + data.PROMEDIO_DIARIO_PATAMI + data.PROMEDIO_DIARIO_DOBLECHANCE + data.PROMEDIO_DIARIO_CHMILL

  return (Math.round((VentaChance / Promedio) * 100))
}
function porcentajeCumplimientoMultired (data: MetasProductMultired): number {
  const VentaChance = data.CHANCE + data.PAGAMAS + data.PAGATODO + data.GANE5 + data.PATA_MILLONARIA + data.DOBLECHANCE + data.CHANCE_MILLONARIO
  const Promedio = data.PROMEDIO_DIARIO_CHANCE + data.PROMEDIO_DIARIO_PAGAMAS + data.PROMEDIO_DIARIO_PAGATODO + data.PROMEDIO_DIARIO_GANE5 + data.PROMEDIO_DIARIO_PATAMI + data.PROMEDIO_DIARIO_DOBLECHANCE + data.PROMEDIO_DIARIO_CHMILL

  return (Math.round((VentaChance / Promedio) * 100))
}

export function MapearProductos (data: any) {
  return [
    {
      id: 2,
      nombre: 'ASTRO',
      venta: data?.ASTRO,
      porcentaje: Math.round((data?.ASTRO / data?.PROMEDIO_DIARIO_ASTRO) * 100)
    },
    {
      id: 3,
      nombre: 'RECARGAS',
      venta: data?.RECARGAS,
      porcentaje: Math.round((data?.RECARGAS / data?.PROMEDIO_DIARIO_RECARGAS) * 100)
    },
    {
      id: 4,
      nombre: 'LOT VIRTUAL',
      venta: data?.LOTERIA_VIRTUAL,
      porcentaje: Math.round((data?.LOTERIA_VIRTUAL / data?.PROMEDIO_DIARIO_LV) * 100)
    },
    {
      id: 5,
      nombre: 'BETPLAY',
      venta: data?.BETPLAY,
      porcentaje: Math.round((data?.BETPLAY / data?.PROMEDIO_DIARIO_BETPLAY) * 100)
    },
    {
      id: 6,
      nombre: 'BALOTO',
      venta: data?.SOAT,
      porcentaje: Math.round((data?.SOAT / data?.PROMEDIO_DIARIO_SOAT) * 100)
    },
    {
      id: 7,
      nombre: 'RASPE Y LISTO',
      venta: data?.PROMO2,
      porcentaje: Math.round((data?.PROMO2 / data?.META_PROMO2) * 100)
    },
    {
      id: 8,
      nombre: 'GIROS',
      venta: data?.GIROS,
      porcentaje: Math.round((data?.GIROS / data?.PROMEDIO_DIARIO_GIROS) * 100)
    },
    {
      id: 9,
      nombre: 'RECAUDOS',
      venta: data?.RECAUDOS,
      porcentaje: Math.round((data?.RECAUDOS / data?.PROMEDIO_DIARIO_RECAUDOS) * 100)
    },
    {
      id: 10,
      nombre: 'CHANCE MILLONARIO',
      venta: data?.CHANCE_MILLONARIO,
      porcentaje: Math.round((data?.CHANCE_MILLONARIO / data?.PROMEDIO_DIARIO_CHMILL) * 100)
    },
    {
      id: 11,
      nombre: 'LOT FISICA',
      venta: data?.LOTERIA_FISICA,
      porcentaje: Math.round((data?.LOTERIA_FISICA / data?.PROMEDIO_DIARIO_LF) * 100)
    },
    {
      id: 12,
      nombre: 'CHOLADITO',
      venta: data?.CHOLADITO,
      porcentaje: Math.round((data?.CHOLADITO / data?.PROMEDIO_DIARIO_CHOLADITO) * 100)
    }
  ]
}

export function ReduceMultired (acc: MetasProductMultired, meta: MetasProductMultired){
  return {
    ASTRO: acc.ASTRO + meta.ASTRO,
    BETPLAY: acc.BETPLAY + meta.BETPLAY,
    CHANCE: acc.CHANCE + meta.CHANCE,
    CHANCE_MILLONARIO: acc.CHANCE_MILLONARIO + meta.CHANCE_MILLONARIO,
    DOBLECHANCE: acc.DOBLECHANCE + meta.DOBLECHANCE,
    GANE5: acc.GANE5 + meta.GANE5,
    GIROS: acc.GIROS + meta.GIROS,
    LOTERIA_FISICA: acc.LOTERIA_FISICA + meta.LOTERIA_FISICA,
    LOTERIA_VIRTUAL: acc.LOTERIA_VIRTUAL + meta.LOTERIA_VIRTUAL,
    MT_ASTRO: acc.MT_ASTRO + meta.MT_ASTRO,
    MT_BETPLAY: acc.MT_BETPLAY + meta.MT_BETPLAY,
    MT_CHANCE: acc.MT_CHANCE + meta.MT_CHANCE,
    MT_CHANCE_MILLONARIO: acc.MT_CHANCE_MILLONARIO + meta.MT_CHANCE_MILLONARIO,
    MT_DOBLECHANCE: acc.MT_DOBLECHANCE + meta.MT_DOBLECHANCE,
    MT_GANE5: acc.MT_GANE5 + meta.MT_GANE5,
    MT_GIROS: acc.MT_GIROS + meta.MT_GIROS,
    MT_LOTERIA_FISICA: acc.MT_LOTERIA_FISICA + meta.MT_LOTERIA_FISICA,
    MT_LOTERIA_VIRTUAL: acc.MT_LOTERIA_VIRTUAL + meta.MT_LOTERIA_VIRTUAL,
    MT_PAGAMAS: acc.MT_PAGAMAS + meta.MT_PAGAMAS,
    MT_PAGATODO: acc.MT_PAGATODO + meta.MT_PAGATODO,
    MT_PATA_MILLONARIA: acc.MT_PATA_MILLONARIA + meta.MT_PATA_MILLONARIA,
    MT_RECARGAS: acc.MT_RECARGAS + meta.MT_RECARGAS,
    MT_RECAUDOS: acc.MT_RECAUDOS + meta.MT_RECAUDOS,
    MT_SOAT: acc.MT_SOAT + meta.MT_SOAT,
    PAGAMAS: acc.PAGAMAS + meta.PAGAMAS,
    PAGATODO: acc.PAGATODO + meta.PAGATODO,
    PATA_MILLONARIA: acc.PATA_MILLONARIA + meta.PATA_MILLONARIA,
    META_PROMO1: acc.META_PROMO1 + meta.META_PROMO1,
    META_PROMO2: acc.META_PROMO2 + meta.META_PROMO2,
    PROMEDIO_DIARIO_ASTRO: acc.PROMEDIO_DIARIO_ASTRO + meta.PROMEDIO_DIARIO_ASTRO,
    PROMEDIO_DIARIO_BETPLAY: acc.PROMEDIO_DIARIO_BETPLAY + meta.PROMEDIO_DIARIO_BETPLAY,
    PROMEDIO_DIARIO_CHANCE: acc.PROMEDIO_DIARIO_CHANCE + meta.PROMEDIO_DIARIO_CHANCE,
    PROMEDIO_DIARIO_CHMILL: acc.PROMEDIO_DIARIO_CHMILL + meta.PROMEDIO_DIARIO_CHMILL,
    PROMEDIO_DIARIO_DOBLECHANCE: acc.PROMEDIO_DIARIO_DOBLECHANCE + meta.PROMEDIO_DIARIO_DOBLECHANCE,
    PROMEDIO_DIARIO_GANE5: acc.PROMEDIO_DIARIO_GANE5 + meta.PROMEDIO_DIARIO_GANE5,
    PROMEDIO_DIARIO_GIROS: acc.PROMEDIO_DIARIO_GIROS + meta.PROMEDIO_DIARIO_GIROS,
    PROMEDIO_DIARIO_LF: acc.PROMEDIO_DIARIO_LF + meta.PROMEDIO_DIARIO_LF,
    PROMEDIO_DIARIO_LV: acc.PROMEDIO_DIARIO_LV + meta.PROMEDIO_DIARIO_LV,
    PROMEDIO_DIARIO_PAGAMAS: acc.PROMEDIO_DIARIO_PAGAMAS + meta.PROMEDIO_DIARIO_PAGAMAS,
    PROMEDIO_DIARIO_PAGATODO: acc.PROMEDIO_DIARIO_PAGATODO + meta.PROMEDIO_DIARIO_PAGATODO,
    PROMEDIO_DIARIO_PATAMI: acc.PROMEDIO_DIARIO_PATAMI + meta.PROMEDIO_DIARIO_PATAMI,
    PROMEDIO_DIARIO_RECARGAS: acc.PROMEDIO_DIARIO_RECARGAS + meta.PROMEDIO_DIARIO_RECARGAS,
    PROMEDIO_DIARIO_RECAUDOS: acc.PROMEDIO_DIARIO_RECAUDOS + meta.PROMEDIO_DIARIO_RECAUDOS,
    PROMEDIO_DIARIO_SOAT: acc.PROMEDIO_DIARIO_SOAT + meta.PROMEDIO_DIARIO_SOAT,
    PROMO1: acc.PROMO1 + meta.PROMO1,
    PROMO2: acc.PROMO2 + meta.PROMO2,
    RECARGAS: acc.RECARGAS + meta.RECARGAS,
    RECAUDOS: acc.RECAUDOS + meta.RECAUDOS,
    SOAT: acc.SOAT + meta.SOAT
  };
}

export function ReduceServired (acc: MetasProductServired, meta: MetasProductServired){
  return {
    ASTRO: acc.ASTRO + meta.ASTRO,
    BETPLAY: acc.BETPLAY + meta.BETPLAY,
    CHANCE: acc.CHANCE + meta.CHANCE,
    CHANCE_MILLONARIO: acc.CHANCE_MILLONARIO + meta.CHANCE_MILLONARIO,
    PAGATODO_JAMUNDI: acc.PAGATODO_JAMUNDI + meta.PAGATODO_JAMUNDI,
    DOBLECHANCE: acc.DOBLECHANCE + meta.DOBLECHANCE,
    CHOLADITO: acc.CHOLADITO + meta.CHOLADITO,
    GANE5: acc.GANE5 + meta.GANE5,
    GIROS: acc.GIROS + meta.GIROS,
    LOTERIA_FISICA: acc.LOTERIA_FISICA + meta.LOTERIA_FISICA,
    LOTERIA_VIRTUAL: acc.LOTERIA_VIRTUAL + meta.LOTERIA_VIRTUAL,
    MT_ASTRO: acc.MT_ASTRO + meta.MT_ASTRO,
    MT_BETPLAY: acc.MT_BETPLAY + meta.MT_BETPLAY,
    MT_CHANCE: acc.MT_CHANCE + meta.MT_CHANCE,
    MT_PAGATODO_JAMUNDI: acc.MT_PAGATODO_JAMUNDI + meta.MT_PAGATODO_JAMUNDI,
    MT_CHANCE_MILLONARIO: acc.MT_CHANCE_MILLONARIO + meta.MT_CHANCE_MILLONARIO,
    MT_DOBLECHANCE: acc.MT_DOBLECHANCE + meta.MT_DOBLECHANCE,
    MT_GANE5: acc.MT_GANE5 + meta.MT_GANE5,
    MT_GIROS: acc.MT_GIROS + meta.MT_GIROS,
    MT_LOTERIA_FISICA: acc.MT_LOTERIA_FISICA + meta.MT_LOTERIA_FISICA,
    MT_LOTERIA_VIRTUAL: acc.MT_LOTERIA_VIRTUAL + meta.MT_LOTERIA_VIRTUAL,
    MT_CHOLADITO: acc.MT_CHOLADITO + meta.MT_CHOLADITO,
    MT_PATA_MILLONARIA: acc.MT_PATA_MILLONARIA + meta.MT_PATA_MILLONARIA,
    MT_RECARGAS: acc.MT_RECARGAS + meta.MT_RECARGAS,
    MT_RECAUDOS: acc.MT_RECAUDOS + meta.MT_RECAUDOS,
    MT_SOAT: acc.MT_SOAT + meta.MT_SOAT,
    PATA_MILLONARIA: acc.PATA_MILLONARIA + meta.PATA_MILLONARIA,
    META_PROMO1: acc.META_PROMO1 + meta.META_PROMO1,
    META_PROMO2: acc.META_PROMO2 + meta.META_PROMO2,
    PROMEDIO_DIARIO_ASTRO: acc.PROMEDIO_DIARIO_ASTRO + meta.PROMEDIO_DIARIO_ASTRO,
    PROMEDIO_DIARIO_CHOLADITO: acc.PROMEDIO_DIARIO_CHOLADITO + meta.PROMEDIO_DIARIO_CHOLADITO,
    PROMEDIO_DIARIO_BETPLAY: acc.PROMEDIO_DIARIO_BETPLAY + meta.PROMEDIO_DIARIO_BETPLAY,
    PROMEDIO_DIARIO_CHANCE: acc.PROMEDIO_DIARIO_CHANCE + meta.PROMEDIO_DIARIO_CHANCE,
    PROMEDIO_DIARIO_CHMILL: acc.PROMEDIO_DIARIO_CHMILL + meta.PROMEDIO_DIARIO_CHMILL,
    PROMEDIO_DIARIO_DOBLECHANCE: acc.PROMEDIO_DIARIO_DOBLECHANCE + meta.PROMEDIO_DIARIO_DOBLECHANCE,
    PROMEDIO_DIARIO_GANE5: acc.PROMEDIO_DIARIO_GANE5 + meta.PROMEDIO_DIARIO_GANE5,
    PROMEDIO_DIARIO_GIROS: acc.PROMEDIO_DIARIO_GIROS + meta.PROMEDIO_DIARIO_GIROS,
    PROMEDIO_DIARIO_LF: acc.PROMEDIO_DIARIO_LF + meta.PROMEDIO_DIARIO_LF,
    PROMEDIO_DIARIO_LV: acc.PROMEDIO_DIARIO_LV + meta.PROMEDIO_DIARIO_LV,
    PROMEDIO_DIARIO_PGTJAMUNDI: acc.PROMEDIO_DIARIO_PGTJAMUNDI + meta.PROMEDIO_DIARIO_PGTJAMUNDI,
    PROMEDIO_DIARIO_PATAMI: acc.PROMEDIO_DIARIO_PATAMI + meta.PROMEDIO_DIARIO_PATAMI,
    PROMEDIO_DIARIO_RECARGAS: acc.PROMEDIO_DIARIO_RECARGAS + meta.PROMEDIO_DIARIO_RECARGAS,
    PROMEDIO_DIARIO_RECAUDOS: acc.PROMEDIO_DIARIO_RECAUDOS + meta.PROMEDIO_DIARIO_RECAUDOS,
    PROMEDIO_DIARIO_SOAT: acc.PROMEDIO_DIARIO_SOAT + meta.PROMEDIO_DIARIO_SOAT,
    PROMO1: acc.PROMO1 + meta.PROMO1,
    PROMO2: acc.PROMO2 + meta.PROMO2,
    RECARGAS: acc.RECARGAS + meta.RECARGAS,
    RECAUDOS: acc.RECAUDOS + meta.RECAUDOS,
    SOAT: acc.SOAT + meta.SOAT
  }
}

export function MetaChance (data: MetasProductMultired | MetasProductServired, zona: number) {
  if(zona === 39627) return CalcularMetaDiaMultired(data as MetasProductMultired)
  if(zona === 39628) return CalcularMetaDiaServired(data as MetasProductServired)
}

export function VentaChanceDia (data: MetasProductMultired | MetasProductServired, zona: number) {
  if(zona === 39627) return CalcularVentaProductosChanceMultired(data as MetasProductMultired)
  if(zona === 39628) return CalcularVentaProductosChanceServired(data as MetasProductServired)
}

export function PorcentajeCumplimiento (data: MetasProductMultired | MetasProductServired, zona: number) {
  if(zona === 39627) return porcentajeCumplimientoMultired(data as MetasProductMultired)
  if(zona === 39628) return porcentajeCumplimientoServired(data as MetasProductServired)
}