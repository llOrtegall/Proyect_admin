import { DonutChart, Legend } from '@tremor/react'

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

export function DonutChartComp (): JSX.Element {
  return (
    <section className=''>
        <DonutChart
          data={sales}
          category="sales"
          index="name"
          valueFormatter={valueFormatter}
          colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
          className="w-40"
        />
        <Legend
          categories={['New York', 'London', 'Hong Kong', 'San Francisco', 'Singapore']}
          colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
          className="max-w-xs"
        />
    </section>
  )
}