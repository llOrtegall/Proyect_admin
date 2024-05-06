import { Card } from '@tremor/react'

interface Props {
  nombre: string
  venta: number
}

// TODO: aqui solo recibe un objecto con dos propiedades, nombre y venta
export function CardDia ({ nombre, venta }: Props): JSX.Element {
  const formattedVentatotal = venta.toLocaleString('es-CO', { style: 'decimal', currency: 'COP' })
  return (
        <Card decoration="top" decorationColor={'blue'}>
            <p className="text-tremor-default text-center mt-1 text-tremor-content dark:text-dark-tremor-content">{nombre}</p>
            <p className="text-3xl text-center mt-1 text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{formattedVentatotal}</p>
        </Card>

  )
}
