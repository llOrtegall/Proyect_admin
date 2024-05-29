import { Card, ProgressCircle } from '@tremor/react'

interface Props {
  nombre: string
  venta: number
  porcentaje: number
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

// TODO: COLORES QUE ACEPTA ["slate", "gray", "zinc", "neutral", "stone", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"]

// TODO: aqui solo recibe un objecto con dos propiedades, nombre y venta
export function CardMetas ({ nombre, venta, porcentaje }: Props): JSX.Element {
  console.log(porcentaje)
  return (
    <Card decoration="top" decorationColor={DeterminarColor(porcentaje)} >
      <p className="text-tremor-default text-center mt-1 text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{nombre}</p>
      <p className="text-3xl text-center mt-1 text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        {nombre === 'GIROS' ? '#' : nombre === 'RECAUDOS' ? '#' : '$'} {new Intl.NumberFormat('en-ES').format(venta)}
      </p>
      <ProgressCircle className='py-2' size="lg" value={porcentaje} color={DeterminarColor(porcentaje)}>
        <p className="text-xl text-center mt-1 text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{porcentaje}%</p>
      </ProgressCircle>
    </Card>
  )
}
