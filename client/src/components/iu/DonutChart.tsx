import { DonutChart, Legend } from '@tremor/react'
import { type Product } from '../../types/metas'

export function DonutChartComp({ products }: { products: Product[] }) {

  console.log(products);

  return (
    <>
      {
        products && (
          <DonutChart
            data={products}
            category=""
            index="name"
            valueFormatter={value => value.toLocaleString()}
            colors={['rose-400', 'indigo', 'emerald', 'sky', 'teal', 'purple', 'yellow']}
            className="lg:w-64 lg:h-64 lg:my-2"
          />
        )
      }
      {/* <Legend
        categories={sales.map(sale => sale.name)}
        colors={['rose-400', 'indigo', 'emerald', 'sky', 'teal', 'purple', 'yellow']}
        className=""
      /> */}
    </>
  )
}
