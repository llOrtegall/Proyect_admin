import { Card, ProgressBar } from '@tremor/react'

interface Props {
  porcentaje: number
  cumplimiento: string
}

export function CardComponent ({ porcentaje, cumplimiento }: Props): JSX.Element {
  return (
    <Card decoration="top" decorationColor={porcentaje > 80 ? 'emerald' : porcentaje > 50 ? 'lime' : 'red'} >
      <p className="text-tremor-default text-center mt-1 text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{cumplimiento}</p>
      <p className="text-3xl text-center mt-1 text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{porcentaje} %</p>
      <ProgressBar className='py-2' value={porcentaje} color={porcentaje > 80 ? 'emerald' : porcentaje > 50 ? 'lime' : 'red'}/>
    </Card>
  )
}
