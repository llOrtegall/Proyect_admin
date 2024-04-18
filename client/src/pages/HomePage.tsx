import { CardUsage } from '../components/iu/card'
import { CardMetas } from '../components/iu/cardMetas'

function HomePage (): JSX.Element {
  const nombre = 'META DEL DIA'
  const venta = '$56,702,929'

  const cumplimiento = '% CUMPLIMIENTO CHANCE DEL DIA YUMBO !!'
  const porcentaje = '29%'

  return (
    <div>
      <CardUsage cumplimiento={cumplimiento} porcentaje={porcentaje}/>
      <CardMetas nombre={nombre} venta={venta}/>
    </div>
  )
}

export default HomePage
