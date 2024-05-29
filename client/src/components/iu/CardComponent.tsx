import { Card, ProgressBar } from '@tremor/react'
import { DeterminarColor } from '../../utils/funciones'

interface Props {
  porcentaje: number
  cumplimiento: string
}

function DeterminarColor (porcentaje: number): string {
  if (porcentaje < 20) {
    return 'red'
  } else if (porcentaje < 40) {
    return 'orange'
  } else if (porcentaje < 60) {
    return 'rose'
  } else if (porcentaje < 80) {
    return 'lime'
  } else if (porcentaje < 100) {
    return 'green'
  } else {
    return 'emerald'
  }
}

export function CardComponent ({ porcentaje, cumplimiento }: Props): JSX.Element {
  return (
    <Card decoration="top" decorationColor={DeterminarColor(porcentaje)} className='flex flex-col justify-around'>
      <p className="text-center font-semibold text-2xl">Venta Productos Chance Empresa:
        <span className='font-bold uppercase'> {cumplimiento} </span>
      </p>
      <p className="text-3xl text-center font-semibold">Cumplimiento: {porcentaje} %</p>
      <ProgressBar className='py-2' value={porcentaje} color={porcentaje > 80 ? 'emerald' : porcentaje > 50 ? 'lime' : 'red' } />
    </Card>
  )
}
