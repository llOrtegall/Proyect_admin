import { DonutChart, Legend } from '@tremor/react'
import { type Product } from '../../types/metas'

const valueFormatter = (number: number): string =>
  `$ ${Intl.NumberFormat('es-CO').format(number).toString()}`

export function DonutChartComp ({ items }: { items: Product[] }): JSX.Element {
  // Determina el número de elementos que deseas seleccionar
  const numberOfItemsToSelect = 6
  // Calcula el índice de inicio para seleccionar los últimos elementos
  const startIndex = Math.max(items.length - numberOfItemsToSelect, 0)
  // Selecciona los últimos elementos basado en el startIndex
  const selectedProducts = items.slice(startIndex)

  const sales = selectedProducts.map(item => ({ name: item.nombre, sales: item.venta }))
  /*
    "slate", "gray", "zinc", "neutral", "stone", "red", "orange", "amber", "yellow", "lime", "green",
    "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"
  */
  return (
    <section className=''>
      <DonutChart
        data={sales}
        category="sales"
        index="name"
        valueFormatter={valueFormatter}
        colors={['blue', 'indigo', 'emerald', 'sky', 'teal', 'purple', 'indigo']}
        className="w-80 h-80 text-2xl font-semibold"
      />
      <Legend
        categories={sales.map(sale => sale.name)}
        colors={['blue', 'indigo', 'emerald', 'sky', 'teal', 'purple', 'indigo']}
        className="font-semibold text-lg mt-4 w-80 h-20 overflow-y-auto"
      />
    </section>
  )
}
