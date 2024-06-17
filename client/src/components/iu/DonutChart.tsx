import { DonutChart, Legend } from '@tremor/react'
import { type Product } from '../../types/metas'

const sales = [
  {
    name: 'New York',
    sales: 980
  },
  {
    name: 'London',
    sales: 456
  },
  {
    name: 'Hong Kong',
    sales: 390
  },
  {
    name: 'San Francisco',
    sales: 240
  },
  {
    name: 'Singapore',
    sales: 190
  }
]

const valueFormatter = (number: number): string =>
  `$ ${Intl.NumberFormat('CO').format(number).toString()}`

export function DonutChartComp ({ items }: { items: Product[] }): JSX.Element {
  console.log(items)

  return (
    <section className='w-full flex bg-slate-200'>
        <DonutChart
          data={sales}
          category="sales"
          index="name"
          valueFormatter={valueFormatter}
          colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
          className="w-60 h-60"
        />
        <Legend
          categories={['New York', 'London', 'Hong Kong', 'San Francisco', 'Singapore']}
          colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
          className=""
        />
    </section>
  )
}
