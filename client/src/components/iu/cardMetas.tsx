import { Card, ProgressBar } from '@tremor/react'

interface Props {
  porcentaje: number
  nombre: string
  venta: string
}

// TODO: aqui solo recibe un objecto con dos propiedades, nombre y venta
export function CardMetas ({ nombre, venta, porcentaje }: Props): JSX.Element {
  return (
        <Card decoration="top" decorationColor={porcentaje > 50 ? 'green' : 'rose'}>
            <p className="text-tremor-default text-center mt-1 text-tremor-content dark:text-dark-tremor-content">{nombre}</p>
            <p className="text-3xl text-center mt-1 text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{venta}</p>
            <ProgressBar value={porcentaje} />

        </Card>

  )
}
