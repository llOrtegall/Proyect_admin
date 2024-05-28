import { Card, ProgressCircle } from '@tremor/react'

interface Props {
  porcentaje: number
  nombre: string
  venta: number
}

// TODO: aqui solo recibe un objecto con dos propiedades, nombre y venta
export function CardMetas ({ nombre, venta, porcentaje }: Props): JSX.Element {
  return (
    <Card decoration="top" decorationColor={porcentaje > 80 ? 'emerald' : porcentaje > 50 ? 'lime' : 'red'} >
      <p className="text-tremor-default text-center mt-1 text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{nombre}</p>
      <p className="text-3xl text-center mt-1 text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        {nombre === 'GIROS' ? '#' : nombre === 'RECAUDOS' ? '#' : '$'} {new Intl.NumberFormat('en-ES').format(venta)}
      </p>
      <ProgressCircle className='py-2' size="lg" value={porcentaje} color={porcentaje > 80 ? 'emerald' : porcentaje > 50 ? 'lime' : 'red'}>
        <p className="text-xl text-center mt-1 text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{porcentaje}%</p>
      </ProgressCircle>
    </Card>
  )
}
