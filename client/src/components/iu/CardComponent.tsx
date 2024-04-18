import { Card } from '@tremor/react'

interface Props {
  name: string
  cumplimiento: string
  porcentaje: number
}

export function CardComponent ({ cumplimiento, porcentaje, name }: Props): JSX.Element {
  return (
    <Card decoration="top" decorationColor="red" >
      <p className="text-tremor-default text-center mt-1 text-tremor-content dark:text-dark-tremor-content">{name}</p>
      <p className="text-tremor-default text-center mt-1 text-tremor-content dark:text-dark-tremor-content">{cumplimiento}</p>
      <p className="text-3xl text-center mt-1 text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{porcentaje} %</p>
    </Card>

  )
}
