import axios from 'axios'
import { useAuth } from '../../auth/AuthProvider'
import { CardComponent } from './CardComponent'
import { useEffect, useState } from 'react'
import { type Metas, type MetasJamundi } from '../../types/metas'

const MetasDia = (): JSX.Element => {
  const { user } = useAuth()
  const [data, setData] = useState<Metas | MetasJamundi>()
  const [percentage, setPercentage] = useState<number>(0)

  const company = user.empresa
  const cumplimiento = `Cumplimiento Del Chance Del Dia ${company}`

  console.log('first', company)

  useEffect(() => {
    const fetchMetas = async (): Promise<void> => {
      try {
        const response = await axios.get(`http://localhost:3000/api/metas/${company === 'Servired' ? '39628' : '39627'}`)
        setData(company === 'Servired' ? response.data as MetasJamundi : response.data as Metas)
        console.log('first', response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    void fetchMetas()
  }, [company])

  useEffect(() => {
    const calculatePercentage = (): void => {
      const percentage = Math.round((data.CHANCE + (data.PAGAMAS || data.CHOLADITO || data.PAGATODO || data.PAGATODO_JAMUNDI || 0) + data.GANE5 + data.PATA_MILLONARIA + data.DOBLECHANCE + data.CHANCE_MILLONARIO) /
        (data.PROMEDIO_DIARIO_CHANCE + (data.PROMEDIO_DIARIO_PAGAMAS || data.PROMEDIO_DIARIO_CHOLADITO || data.PROMEDIO_DIARIO_PAGATODO || data.PROMEDIO_DIARIO_PGTJAMUNDI || 0) + data.PROMEDIO_DIARIO_PATAMI + data.PROMEDIO_DIARIO_DOBLECHANCE + data.PROMEDIO_DIARIO_CHMILL) * 100)
      setPercentage(percentage)
    }
    calculatePercentage()
  }, [data])

  return (
    <>
      <section className="flex px-10 justify-center py-6">
        <CardComponent
          cumplimiento={cumplimiento}
          porcentaje={percentage}
        />
      </section>
    </>
  )
}

export default MetasDia
