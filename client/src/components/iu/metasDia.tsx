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
  const [ventadia, setVentadia] = useState<number>(0)
  const [ventatotal, setTotal] = useState<number>(0)
  const [astro, setAstro] = useState<number>(0)
  const [recargas, setRecargas] = useState<number>(0)
  const [loteriaFisica, setLoteriFisica] = useState<number>(0)
  const [loteriaVirtual, setLoteriVirtual] = useState<number>(0)
  const [betplay, setBetplay] = useState<number>(0)
  const [giros, setGiros] = useState<number>(0)
  const [recaudos, setRecaudos] = useState<number>(0)

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

    setVentadia(data.CHANCE + (jamundi | yumbo) + data.GANE5 + data.PATA_MILLONARIA + data.DOBLECHANCE + data.CHANCE_MILLONARIO)

    setTotal(data.PROMEDIO_DIARIO_CHANCE + (jamundipro | yumbopro) + data.PROMEDIO_DIARIO_PATAMI + data.PROMEDIO_DIARIO_DOBLECHANCE + data.PROMEDIO_DIARIO_CHMILL)

    setAstro(Math.round((data.ASTRO / data.PROMEDIO_DIARIO_ASTRO) * 100))

    setRecargas(Math.round((data.RECARGAS / data.PROMEDIO_DIARIO_RECARGAS) * 100))

    setLoteriFisica(Math.round((data.LOTERIA_FISICA / data.PROMEDIO_DIARIO_LF) * 100))

    setLoteriVirtual(Math.round((data.LOTERIA_VIRTUAL / data.PROMEDIO_DIARIO_LV) * 100))

    setBetplay(Math.round((data.BETPLAY / data.PROMEDIO_DIARIO_BETPLAY) * 100))

    setGiros(Math.round((data.GIROS / data.PROMEDIO_DIARIO_GIROS) * 100))

    setRecaudos(Math.round((data.RECAUDOS / data.PROMEDIO_DIARIO_RECAUDOS) * 100))
  }, [data])

  const cumplimientoDIa = [
    {
      id: 1,
      nombre: 'META DEL DIA',
      venta: ventatotal
    },
    {
      id: 2,
      nombre: 'VENTA ACTUAL DEL DIA',
      venta: ventadia
    }
  ]

  const productos = [
    {
      id: 1,
      nombre: 'ASTRO',
      venta: data.ASTRO,
      porcentaje: astro
    },
    {
      id: 2,
      nombre: 'RECARGAS',
      venta: data.RECARGAS,
      porcentaje: recargas
    },
    {
      id: 3,
      nombre: 'LOT FISICA',
      venta: data.LOTERIA_FISICA,
      porcentaje: loteriaFisica
    },
    {
      id: 4,
      nombre: 'LOT VIRTUAL',
      venta: data.LOTERIA_VIRTUAL,
      porcentaje: loteriaVirtual
    },
    {
      id: 5,
      nombre: 'BETPLAY',
      venta: data.BETPLAY,
      porcentaje: betplay
    },
    {
      id: 6,
      nombre: 'GIROS',
      venta: data.GIROS,
      porcentaje: giros
    },
    {
      id: 7,
      nombre: 'RECAUDOS',
      venta: data.RECAUDOS,
      porcentaje: recaudos
    }
  ]

  return (
    <>
      <section className="flex px-10 justify-center py-6">
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

      <section className='flex px-12 gap-5 pb-2'>
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
