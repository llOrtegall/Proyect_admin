import { MetasProductMultired, MetasProductServired } from "../types/interfaces";

function CalcularPorcentaje({venta, meta}: { venta: number, meta: number }): string {
  const porcentaje = (venta / meta) * 100;
  const porcentajeLimitado = Math.min(porcentaje, 100); // Asegura que el máximo sea 100
  return porcentajeLimitado.toFixed(2);
}

function CalcularMetaDiaServired (data: MetasProductServired): number {
  return data.PROMEDIO_DIARIO_CHANCE + data.PROMEDIO_DIARIO_CHOLADITO + data.PROMEDIO_DIARIO_PGTJAMUNDI + data.PROMEDIO_DIARIO_PATAMI + data.PROMEDIO_DIARIO_DOBLECHANCE + data.PROMEDIO_DIARIO_CHMILL
}

function CalcularMetaDiaMultired (data: MetasProductMultired): number {
  return data.PROMEDIO_DIARIO_CHANCE + data.PROMEDIO_DIARIO_PAGAMAS + data.PROMEDIO_DIARIO_PAGATODO + data.PROMEDIO_DIARIO_PATAMI + data.PROMEDIO_DIARIO_DOBLECHANCE + data.PROMEDIO_DIARIO_CHMILL
}

function CalcularVentaProductosChanceServired (data: MetasProductServired): number {
  const VentaChance = data.CHANCE + data.CHOLADITO + data.PAGATODO_JAMUNDI + data.GANE5 + data.PATA_MILLONARIA + data.DOBLECHANCE + data.CHANCE_MILLONARIO
  return (VentaChance)
}

function CalcularVentaProductosChanceMultired (data: MetasProductMultired): number {
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

function MapearProductosServired (data: MetasProductServired) {
  return [
    {
      id: 1,
      nombre: 'ASTRO',
      venta: data.ASTRO,
      porcentaje: CalcularPorcentaje({venta: data.ASTRO, meta: data.PROMEDIO_DIARIO_ASTRO})
    },
    {
      id: 2,
      nombre: 'RECARGAS',
      venta: data.RECARGAS,
      porcentaje: CalcularPorcentaje({venta: data.RECARGAS, meta: data.PROMEDIO_DIARIO_RECARGAS})
    },
    {
      id: 3,
      nombre: 'LOT VIRTUAL',
      venta: data.LOTERIA_VIRTUAL,
      porcentaje: CalcularPorcentaje({venta: data.LOTERIA_VIRTUAL, meta: data.PROMEDIO_DIARIO_LV})
    },
    {
      id: 4,
      nombre: 'BETPLAY',
      venta: data.BETPLAY,
      porcentaje: CalcularPorcentaje({venta: data.BETPLAY, meta: data.PROMEDIO_DIARIO_BETPLAY})
    },
    {
      id: 5,
      nombre: 'BALOTO',
      venta: data.SOAT,
      porcentaje: CalcularPorcentaje({venta: data.SOAT, meta: data.PROMEDIO_DIARIO_SOAT})
    },
    {
      id: 6,
      nombre: 'RASPE Y LISTO',
      venta: data.PROMO2,
      porcentaje: CalcularPorcentaje({venta: data.PROMO2, meta: data.META_PROMO2})
    },
    {
      id: 7,
      nombre: 'GIROS',
      venta: data.GIROS,
      porcentaje: CalcularPorcentaje({venta: data.GIROS, meta: data.PROMEDIO_DIARIO_GIROS})
    },
    {
      id: 8,
      nombre: 'RECAUDOS',
      venta: data.RECAUDOS,
      porcentaje: CalcularPorcentaje({venta: data.RECAUDOS, meta: data.PROMEDIO_DIARIO_RECAUDOS})
    },
    {
      id: 9,
      nombre: 'CHANCE',
      venta: data.CHANCE,
      porcentaje: CalcularPorcentaje({venta: data.CHANCE, meta: data.PROMEDIO_DIARIO_CHANCE})
    },
    {
      id: 10,
      nombre: 'CHOLADITO',
      venta: data.CHOLADITO,
      porcentaje: CalcularPorcentaje({venta: data.CHOLADITO, meta: data.PROMEDIO_DIARIO_CHOLADITO})
    },{
      id: 11,
      nombre: 'PAGA TODO SERVIRED',
      venta: data.PAGATODO_JAMUNDI,
      porcentaje: CalcularPorcentaje({venta: data.PAGATODO_JAMUNDI, meta: data.PROMEDIO_DIARIO_PGTJAMUNDI})
    },{
      id: 12, 
      nombre: 'GANE 5',
      venta: data.GANE5,
      porcentaje: CalcularPorcentaje({venta: data.GANE5, meta: data.PROMEDIO_DIARIO_GANE5})
    },{
      id: 13,
      nombre: 'PATA MILLONARIA',
      venta: data.PATA_MILLONARIA,
      porcentaje: CalcularPorcentaje({venta: data.PATA_MILLONARIA, meta: data.PROMEDIO_DIARIO_PATAMI})
    },{
      id: 14,
      nombre: 'DOBLE CHANCE',
      venta: data.DOBLECHANCE,
      porcentaje: CalcularPorcentaje({venta: data.DOBLECHANCE, meta: data.PROMEDIO_DIARIO_DOBLECHANCE})
    },{
      id: 15,
      nombre: 'CHANCE MILLONARIO',
      venta: data.CHANCE_MILLONARIO,
      porcentaje: CalcularPorcentaje({venta: data.CHANCE_MILLONARIO, meta: data.PROMEDIO_DIARIO_CHMILL})
    }
  ]
}

function MapearProductosMultired (data: MetasProductMultired) {
  return [
    {
      id: 1,
      nombre: 'ASTRO',
      venta: data.ASTRO,
      porcentaje: CalcularPorcentaje({venta: data.ASTRO, meta: data.PROMEDIO_DIARIO_ASTRO})
    },
    {
      id: 2,
      nombre: 'RECARGAS',
      venta: data.RECARGAS,
      porcentaje: CalcularPorcentaje({venta: data.RECARGAS, meta: data.PROMEDIO_DIARIO_RECARGAS})
    },
    {
      id: 3,
      nombre: 'LOT VIRTUAL',
      venta: data.LOTERIA_VIRTUAL,
      porcentaje: CalcularPorcentaje({venta: data.LOTERIA_VIRTUAL, meta: data.PROMEDIO_DIARIO_LV})
    },
    {
      id: 4,
      nombre: 'BETPLAY',
      venta: data.BETPLAY,
      porcentaje: CalcularPorcentaje({venta: data.BETPLAY, meta: data.PROMEDIO_DIARIO_BETPLAY})
    },
    {
      id: 5,
      nombre: 'BALOTO',
      venta: data.SOAT,
      porcentaje: CalcularPorcentaje({venta: data.SOAT, meta: data.PROMEDIO_DIARIO_SOAT})
    },
    {
      id: 6,
      nombre: 'RASPE Y LISTO',
      venta: data.PROMO2,
      porcentaje: CalcularPorcentaje({venta: data.PROMO2, meta: data.META_PROMO2})
    },
    {
      id: 7,
      nombre: 'GIROS',
      venta: data.GIROS,
      porcentaje: CalcularPorcentaje({venta: data.GIROS, meta: data.PROMEDIO_DIARIO_GIROS})
    },
    {
      id: 8,
      nombre: 'RECAUDOS',
      venta: data.RECAUDOS,
      porcentaje: CalcularPorcentaje({venta: data.RECAUDOS, meta: data.PROMEDIO_DIARIO_RECAUDOS})
    },
    {
      id: 9,
      nombre: 'LOT FISICA',
      venta: data.LOTERIA_FISICA,
      porcentaje: CalcularPorcentaje({venta: data.LOTERIA_FISICA, meta: data.PROMEDIO_DIARIO_LF})
    },
    {
      id: 10,
      nombre: 'CHANCE',
      venta: data.CHANCE,
      porcentaje: CalcularPorcentaje({venta: data.CHANCE, meta: data.PROMEDIO_DIARIO_CHANCE})
    },
    {
      id: 11,
      nombre: 'PAGA MAS',
      venta: data.PAGAMAS,
      porcentaje: CalcularPorcentaje({venta: data.PAGAMAS, meta: data.PROMEDIO_DIARIO_PAGAMAS})
    },
    {
      id: 12,
      nombre: 'PAGA TODO',
      venta: data.PAGATODO,
      porcentaje: CalcularPorcentaje({venta: data.PAGATODO, meta: data.PROMEDIO_DIARIO_PAGATODO})
    },
    {
      id: 13,
      nombre: 'GANE 5',
      venta: data.GANE5,
      porcentaje: CalcularPorcentaje({venta: data.GANE5, meta: data.PROMEDIO_DIARIO_GANE5})
    },
    {
      id: 14,
      nombre: 'PATA MILLONARIA',
      venta: data.PATA_MILLONARIA,
      porcentaje: CalcularPorcentaje({venta: data.PATA_MILLONARIA, meta: data.PROMEDIO_DIARIO_PATAMI})
    },
    {
      id: 15,
      nombre: 'DOBLE CHANCE',
      venta: data.DOBLECHANCE,
      porcentaje: CalcularPorcentaje({venta: data.DOBLECHANCE, meta: data.PROMEDIO_DIARIO_DOBLECHANCE})
    },
    {
      id: 16,
      nombre: 'CHANCE MILLONARIO',
      venta: data.CHANCE_MILLONARIO,
      porcentaje: CalcularPorcentaje({venta: data.CHANCE_MILLONARIO, meta: data.PROMEDIO_DIARIO_CHMILL})
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

export function MapearProductosZona (data: MetasProductMultired | MetasProductServired, zona: number) {
  if(zona === 39627) return MapearProductosMultired(data as MetasProductMultired)
  if(zona === 39628) return MapearProductosServired(data as MetasProductServired)
}