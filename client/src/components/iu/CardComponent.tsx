import { Card, ProgressBar } from '@tremor/react'

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
    <Card decoration="top" decorationColor={DeterminarColor(porcentaje)} >
      <p className="text-tremor-default text-center mt-1 text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{cumplimiento}</p>
      <p className="text-3xl text-center mt-1 text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{porcentaje} %</p>
      <ProgressBar className='py-2' value={porcentaje} color={porcentaje > 80 ? 'emerald' : porcentaje > 50 ? 'lime' : 'red'}/>
    </Card>
  )
}
