import { Card, ProgressBar } from '@tremor/react'
import { DeterminarColor } from '../../utils/funciones'

interface Props {
  porcentaje: number
  cumplimiento: string
}

export function CardComponent ({ porcentaje, cumplimiento }: Props): JSX.Element {
  return (
    <Card decoration="top" decorationColor={DeterminarColor(porcentaje)} className='flex flex-col justify-around'>
      <p className="text-center font-semibold text-2xl">Cumplimiento Chance Del Dia:
        <span className='font-bold uppercase'> {cumplimiento} </span>
      </p>
      <p className="text-3xl text-center font-semibold">Cumplimiento: {porcentaje} %</p>
      <ProgressBar className='py-2' value={porcentaje} color={porcentaje > 80 ? 'emerald' : porcentaje > 50 ? 'lime' : 'red' } />
    </Card>
  )
}
