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