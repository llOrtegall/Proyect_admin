import { Card, ProgressBar } from '@tremor/react'
import { DeterminarColor } from '../../utils/funciones'

interface Props {
  nombre: string
  venta: number
  porcentaje?: number
}

// TODO: aqui solo recibe un objecto con dos propiedades, nombre y venta
export function CardDia ({ nombre, venta, porcentaje }: Props): JSX.Element {
  return (
    <Card decoration="top" decorationColor={porcentaje !== undefined ? DeterminarColor(porcentaje) : 'blue'}>
      <p className="text-tremor-default text-center mt-1 text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{nombre}</p>
      <p className="text-3xl text-center mt-1 text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        $ {new Intl.NumberFormat('en-ES').format(venta)}
      </p>
      {
        porcentaje !== undefined && (
          <ProgressBar
            className="mt-2"
            value={porcentaje}
            color={DeterminarColor(porcentaje)}
          />
        )
      }
    </Card>

  )
}
