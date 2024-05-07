import { useAuth } from '../../auth/AuthProvider'
import { CardComponent } from './CardComponent'
import { useEffect, useState } from 'react'
import { type Metas, type MetasJamundi } from '../../types/metas'
import { CardDia } from './cardDia'
import axios from 'axios'
import { CardMetas } from './cardMetas'

const MetasDia = (): JSX.Element => {
  const { user } = useAuth()
  const [data, setData] = useState<Metas | MetasJamundi>({})
  const [chance, setChance] = useState<number>(0)

  const company = user.empresa

  const cumplimiento = `Cumplimiento Del Chance Del Dia ${company}`

  const jamundi = data.CHOLADITO + data.PAGATODO_JAMUNDI

  const yumbo = data.PAGAMAS + data.PAGATODO

  const jamundipro = data.PROMEDIO_DIARIO_CHOLADITO + data.PROMEDIO_DIARIO_PGTJAMUNDI

  const yumbopro = data.PROMEDIO_DIARIO_PAGAMAS + data.PROMEDIO_DIARIO_PAGATODO

  useEffect(() => {
    const fetchMetas = async (): Promise<void> => {
      try {
        const response = await axios.get(`http://localhost:3000/api/metas/${company === 'Servired' ? '39628' : '39627'}`)
        console.log('first', response.data)
        setData(company === 'Servired' ? response.data as MetasJamundi : response.data as Metas)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    setInterval(() => {
      void fetchMetas()
    }, 5000)
  }, [company])

  useEffect(() => {
    setChance(Math.round((data.CHANCE + (jamundi | yumbo) + data.GANE5 + data.PATA_MILLONARIA + data.DOBLECHANCE + data.CHANCE_MILLONARIO) / (data.PROMEDIO_DIARIO_CHANCE + (jamundipro | yumbopro) + data.PROMEDIO_DIARIO_PATAMI + data.PROMEDIO_DIARIO_DOBLECHANCE + data.PROMEDIO_DIARIO_CHMILL) * 100))
  }, [data])

  const cumplimientoDIa = [
    {
      id: 1,
      nombre: 'META DEL DIA',
      venta: data.PROMEDIO_DIARIO_CHANCE + (jamundipro | yumbopro) + data.PROMEDIO_DIARIO_PATAMI + data.PROMEDIO_DIARIO_DOBLECHANCE + data.PROMEDIO_DIARIO_CHMILL
    },
    {
      id: 2,
      nombre: 'VENTA ACTUAL DEL DIA',
      venta: data.CHANCE + (jamundi | yumbo) + data.GANE5 + data.PATA_MILLONARIA + data.DOBLECHANCE + data.CHANCE_MILLONARIO
    }
  ]

  const productos = [
    {
      id: 1,
      nombre: 'ASTRO',
      venta: data.ASTRO,
      porcentaje: Math.round((data.ASTRO / data.PROMEDIO_DIARIO_ASTRO) * 100)
    },
    {
      id: 2,
      nombre: 'RECARGAS',
      venta: data.RECARGAS,
      porcentaje: Math.round((data.RECARGAS / data.PROMEDIO_DIARIO_RECARGAS) * 100)
    },
    {
      id: 3,
      nombre: 'LOT FISICA',
      venta: data.LOTERIA_FISICA,
      porcentaje: Math.round((data.LOTERIA_FISICA / data.PROMEDIO_DIARIO_LF) * 100)
    },
    {
      id: 4,
      nombre: 'LOT VIRTUAL',
      venta: data.LOTERIA_VIRTUAL,
      porcentaje: Math.round((data.LOTERIA_VIRTUAL / data.PROMEDIO_DIARIO_LV) * 100)
    },
    {
      id: 5,
      nombre: 'BETPLAY',
      venta: data.BETPLAY,
      porcentaje: Math.round((data.BETPLAY / data.PROMEDIO_DIARIO_BETPLAY) * 100)
    },
    {
      id: 6,
      nombre: 'BALOTO',
      venta: data.SOAT,
      porcentaje: Math.round((data.SOAT / data.PROMEDIO_DIARIO_SOAT) * 100)
    },
    {
      id: 7,
      nombre: 'GIROS',
      venta: data.GIROS,
      porcentaje: Math.round((data.GIROS / data.PROMEDIO_DIARIO_GIROS) * 100)
    },
    {
      id: 8,
      nombre: 'RECAUDOS',
      venta: data.RECAUDOS,
      porcentaje: Math.round((data.RECAUDOS / data.PROMEDIO_DIARIO_RECAUDOS) * 100)
    }
  ]

  return (
    <>
      <section className="flex px-10 justify-center py-4">
        <CardComponent
          cumplimiento={cumplimiento}
          porcentaje={chance}
        />
      </section>

      <section className='flex px-12 gap-2 pb-4'>
        {
          cumplimientoDIa.map(item => {
            return (<CardDia
              key={item.id}
              nombre={item.nombre}
              venta={item.venta} />)
          })
        }
      </section>

      <section className='px-12 grid grid-cols-4 gap-2 pb-4 '>
        {
          productos.map(item => {
            return (<CardMetas key={item.id}
              nombre={item.nombre}
              venta={item.venta}
              porcentaje={item.porcentaje} />)
          })
        }
      </section>

    </>
  )
}

export default MetasDia
