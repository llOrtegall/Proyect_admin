import axios from 'axios'
import { useAuth } from '../auth/AuthProvider'
import { CardComponent } from './iu/CardComponent'
import { CardMetas } from './iu/cardMetas'
import { useEffect } from 'react'

const data = [
  {
    id: 1,
    porcentaje: 10,
    nombre: 'META DEL DIA',
    venta: '$56,702,929'
  },
  {
    id: 2,
    porcentaje: 30,
    nombre: 'VENTA ACTUAL DEL DIA',
    venta: '$15,908,201'
  },
  {
    id: 3,
    porcentaje: 10,
    nombre: 'META DEL MES',
    venta: '$1,200,000,000'
  },
  {
    id: 4,
    porcentaje: 40,
    nombre: 'VENTA ACTUAL DEL MES',
    venta: '$1,200,000,000'
  },
  {
    id: 5,
    porcentaje: 50,
    nombre: 'META DEL AÑO',
    venta: '$1,200,000,000'
  },
  {
    id: 6,
    porcentaje: 10,
    nombre: 'VENTA ACTUAL DEL AÑO',
    venta: '$1,200,000,000'
  },
  {
    id: 7,
    porcentaje: 10,
    nombre: 'META DEL DIA',
    venta: '$1,200,000,000'
  },
  {
    id: 8,
    porcentaje: 10,
    nombre: 'VENTA ACTUAL DEL DIA',
    venta: '$1,200,000,000'
  },
  {
    id: 9,
    porcentaje: 60,
    nombre: 'META DEL DIA',
    venta: '$1,200,000,000'
  }
]

const data2 = [
  {
    id: 1,
    name: 'Metas Del Día',
    venta: '50.000.000',
    porcentaje: 50
  },
  {
    id: 2,
    name: 'Ventas Del Día',
    venta: '23.000.234',
    porcentaje: 60
  }
]

const nombre = 'META DEL DIA'
const cumplimiento = 'Cumplimiento Servired Venta Total Del Día'
const porcentaje = 60

const DahsBoard = (): JSX.Element => {
  const { user } = useAuth()
  const company = user.empresa

  useEffect(() => {
    void axios.get(`http://localhost:3000/api/metas/${company === 'Servired' ? 'aqui cod servired' : 'aqui cod multired'}`)
  }, [])

  return (
    <>
      <section className='flex px-10 justify-center py-6'>
        <CardComponent name={nombre} cumplimiento={cumplimiento} porcentaje={porcentaje} />
      </section>

      <section className='flex px-12 gap-4 pb-4'>
        {
          data2.map(item => {
            return (<CardComponent key={item.id} cumplimiento={item.venta} porcentaje={item.porcentaje} name={item.name} />)
          })
        }
      </section>

      <section className='grid grid-cols-3 mx-10 gap-2'>
        {
          // * Se mapea el array de objetos data y se retorna un componente CardMetas por cada objeto
          data.map(item => {
            return (<CardMetas key={item.id} nombre={item.nombre} venta={item.venta} porcentaje={item.porcentaje} />)
          })
        }
      </section>
    </>
  )
}

export default DahsBoard
