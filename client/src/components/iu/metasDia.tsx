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

  useEffect(() => {
    const fetchMetas = async (): Promise<void> => {
      try {
        const response = await axios.get(`http://localhost:3000/api/metas/${company === 'Servired' ? '39628' : '39627'}`)
        setData(company === 'Servired' ? response.data as MetasJamundi : response.data as Metas)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    void fetchMetas()
  }, [company])

  useEffect(() => {
    const calculatePercentage = (): void => {
      const chance = Math.round((data.CHANCE +
      (data.PAGAMAS | data.CHOLADITO | data.PAGATODO | data.PAGATODO_JAMUNDI) +
      data.GANE5 + data.PATA_MILLONARIA + data.DOBLECHANCE + data.CHANCE_MILLONARIO) /
      (data.PROMEDIO_DIARIO_CHANCE + (data.PROMEDIO_DIARIO_PAGAMAS | data.PROMEDIO_DIARIO_CHOLADITO | data.PROMEDIO_DIARIO_PAGATODO | data.PROMEDIO_DIARIO_PGTJAMUNDI) +
      data.PROMEDIO_DIARIO_PATAMI + data.PROMEDIO_DIARIO_DOBLECHANCE + data.PROMEDIO_DIARIO_CHMILL) * 100)
      setChance(chance)
    }
    calculatePercentage()
  }, [data])

  useEffect(() => {
    const calculateVentaDia = (): void => {
      const ventadia = (
        data.CHANCE +
        (data.PAGAMAS |
        data.CHOLADITO |
        data.PAGATODO |
        data.PAGATODO_JAMUNDI) +
        data.GANE5 +
        data.PATA_MILLONARIA +
        data.DOBLECHANCE +
        data.CHANCE_MILLONARIO
      )
      setVentadia(ventadia)
    }

    const calculateVentaTotal = (): void => {
      const ventatotal = (data.PROMEDIO_DIARIO_CHANCE +
      (data.PROMEDIO_DIARIO_PAGAMAS |
      data.PROMEDIO_DIARIO_CHOLADITO |
      data.PROMEDIO_DIARIO_PAGATODO |
      data.PROMEDIO_DIARIO_PGTJAMUNDI) +
      data.PROMEDIO_DIARIO_PATAMI +
      data.PROMEDIO_DIARIO_DOBLECHANCE +
      data.PROMEDIO_DIARIO_CHMILL)
      ventatotal.toLocaleString()
      setTotal(ventatotal)
    }

    calculateVentaDia()
    calculateVentaTotal()
  }, [data])

  useEffect(() => {
    const calculateAstro = (): void => {
      const astro = Math.round((data.ASTRO / data.PROMEDIO_DIARIO_ASTRO) * 100)
      setAstro(astro)
    }

    const calculateRecargas = (): void => {
      const recargas = Math.round((data.RECARGAS / data.PROMEDIO_DIARIO_RECARGAS) * 100)
      setRecargas(recargas)
    }

    const calculateLoteriaFisica = (): void => {
      const loteriaFisica = Math.round((data.LOTERIA_FISICA / data.PROMEDIO_DIARIO_LF) * 100)
      setLoteriFisica(loteriaFisica)
    }

    const calculateLoteriaVirtual = (): void => {
      const loteriaVirtual = Math.round((data.LOTERIA_VIRTUAL / data.PROMEDIO_DIARIO_LV) * 100)
      setLoteriVirtual(loteriaVirtual)
    }

    const calculateBetplay = (): void => {
      const betplay = Math.round((data.BETPLAY / data.PROMEDIO_DIARIO_BETPLAY) * 100)
      setBetplay(betplay)
    }

    const calculateGiros = (): void => {
      const giros = Math.round((data.GIROS / data.PROMEDIO_DIARIO_GIROS) * 100)
      setGiros(giros)
    }

    const calculateRecaudos = (): void => {
      const recaudos = Math.round((data.RECAUDOS / data.PROMEDIO_DIARIO_RECAUDOS) * 100)
      setRecaudos(recaudos)
    }

    calculateAstro()
    calculateRecargas()
    calculateLoteriaFisica()
    calculateLoteriaVirtual()
    calculateBetplay()
    calculateGiros()
    calculateRecaudos()
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
      id: 1,
      nombre: 'LOT FISICA',
      venta: data.LOTERIA_FISICA,
      porcentaje: loteriaFisica
    },
    {
      id: 3,
      nombre: 'LOT VIRTUAL',
      venta: data.LOTERIA_VIRTUAL,
      porcentaje: loteriaVirtual
    },
    {
      id: 4,
      nombre: 'BETPLAY',
      venta: data.BETPLAY,
      porcentaje: betplay
    },
    {
      id: 5,
      nombre: 'GIROS',
      venta: data.GIROS,
      porcentaje: giros
    },
    {
      id: 6,
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
            return (<CardDia key={item.id} nombre={item.nombre} venta={item.venta} />)
          })
        }
      </section>

      <section className='flex px-12 gap-5 pb-2'>
        {
          productos.map(item => {
            return (<CardMetas key={item.id} nombre={item.nombre} venta={item.venta} porcentaje={item.porcentaje} />)
          })
        }
      </section>

    </>
  )
}

export default MetasDia
