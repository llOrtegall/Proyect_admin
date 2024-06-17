import { DeterminarColor } from '../../utils/funciones'
import { Card, ProgressBar } from '@tremor/react'

interface Props {
  titulo: string
  venta: number
  porcentaje: number
}

// TODO: aqui solo recibe un objecto con dos propiedades, nombre y venta
export function CardMetaDia ({ titulo, venta, porcentaje }: Props): JSX.Element {
  const vtaFortCol = new Intl.NumberFormat('es-CO').format(venta)
  return (
    <Card className="flex flex-col gap-2" decoration="top" decorationColor={DeterminarColor(porcentaje)}>
      <p className="text-2xl font-semibold text-center">{titulo}</p>
      <p className="text-2xl font-semibold text-center">$ {vtaFortCol}</p>
      <ProgressBar value={porcentaje} color={DeterminarColor(porcentaje)} />
      <p className='text-center font-medium'>Progreso Meta: {porcentaje} %</p>
    </Card>
  )
}
