import { DonutChart, Legend } from '@tremor/react'
import { type Product } from '../../types/metas'

const valueFormatter = (number: number): string =>
  `$ ${Intl.NumberFormat('es-CO').format(number).toString()}`

export function DonutChartComp ({ items }: { items: Product[] }): JSX.Element {
  // Determina el número de elementos que deseas seleccionar
  const numberOfItemsToSelect = 7
  // Calcula el índice de inicio para seleccionar los últimos elementos
  const startIndex = Math.max(items.length - numberOfItemsToSelect, 0)
  // Selecciona los últimos elementos basado en el startIndex
  const selectedProducts = items.slice(startIndex)

  const sales = selectedProducts.map(item => ({ name: item.nombre, sales: item.venta }))

  return (
    <>
      <DonutChart
        data={sales}
        category="sales"
        index="name"
        valueFormatter={valueFormatter}
        colors={['rose-400', 'indigo', 'emerald', 'sky', 'teal', 'purple', 'yellow']}
        className="lg:w-64 lg:h-64 lg:my-2"
      />
      <Legend
        categories={sales.map(sale => sale.name)}
        colors={['rose-400', 'indigo', 'emerald', 'sky', 'teal', 'purple', 'yellow']}
        className=""
      />
    </>
  )
}
