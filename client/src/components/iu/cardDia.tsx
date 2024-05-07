import { Card } from '@tremor/react'

interface Props {
  nombre: string
  venta: number
}

// TODO: aqui solo recibe un objecto con dos propiedades, nombre y venta
export function CardDia ({ nombre, venta }: Props): JSX.Element {
  return (
        <Card decoration="top" decorationColor={'blue'}>
            <p className="text-tremor-default text-center mt-1 text-tremor-content dark:text-dark-tremor-content">{nombre}</p>
            <p className="text-3xl text-center mt-1 text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{new Intl.NumberFormat('en-ES').format(venta)}</p>
        </Card>

  )
}
