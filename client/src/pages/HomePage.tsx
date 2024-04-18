import { CardUsage } from '../components/iu/card'
import { CardMetas } from '../components/iu/cardMetas'

function HomePage (): JSX.Element {
  const data = [
    {
      nombre: 'META DEL DIA',
      venta: '$56,702,929'
    },
    {
      nombre: 'VENTA ACTUAL DEL DIA',
      venta: '$15,908,201'
    }
  ]

  // Utiliza el método map() para renderizar los elementos
  const renderedCards = data.map((item, index) => (
    <div key={index}>
      <CardMetas nombre={item.nombre} venta={item.venta}/>
    </div>
  ))
  const cumplimiento = 'prueba'
  const porcentaje = '1000'

  return (
    <div>
      <CardUsage cumplimiento={cumplimiento} porcentaje={porcentaje}/>
      {renderedCards}
    </div>
  )
}

export default HomePage
