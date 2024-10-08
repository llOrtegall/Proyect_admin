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
            category="vta_dia"
            index="producto"
            valueFormatter={value => value.toLocaleString()}
            colors={['rose-400', 'indigo', 'emerald', 'sky', 'teal', 'purple', 'yellow', 'red', 'blue', 'green', 'pink', 'purple', 'yellow']}
            className="w-96 h-96"
          />
        )
      }
      {/* <Legend
        categories={products.map(product => product.producto)}
        colors={['rose-400', 'indigo', 'emerald', 'sky', 'teal', 'purple', 'yellow']}
        className=""
      /> */}
    </>
  )
}
