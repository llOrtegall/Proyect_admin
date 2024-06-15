interface Product {
  id: number
  nombre: string
  venta: number
  porcentaje: number
}

export interface Dashboard {
  metaDia: number
  ventaChance: number
  porcentaje: number
  products: Product[]
}
