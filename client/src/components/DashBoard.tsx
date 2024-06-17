import { CardMetas, CardMetaDia } from './iu'

import { type Dashboard } from '../types/metas'
import { type Empresa } from '../types/user'

import { useEffect, useState } from 'react'
import axios from 'axios'

import { DonutChartComp } from './iu/DonutChart'
import { Card } from '@tremor/react'
import { CardVentaDia } from './iu/CardVentaDia'

const DahsBoard = ({ company }: { company: Empresa }): JSX.Element => {
  const [data, setData] = useState<Dashboard>({ metaDia: 0, porcentaje: 0, products: [], ventaChance: 0 })

  useEffect(() => {
    const fetchData = (): void => {
      void axios.get(`http://localhost:3000/api/metas/${company === 'Servired' ? '39628' : '39627'}`)
        .then(response => {
          setData(response.data as Dashboard)
        })
        .catch(error => {
          console.log(error)
        })
    }

    fetchData() // Fetch data immediately

    const intervalId = setInterval(fetchData, 5 * 60 * 1000) // Fetch data every 5 minutes

    return () => { clearInterval(intervalId) } // TODO: limpia el intervalo para evitar fugas de memoria y errores cuando el componente se desmonta
  }, [company])

  return (
    <section>

      <article className='flex gap-2 mx-1'>
        <Card className='w-8/12 flex flex-col justify-center items-center'>
          <h1 className='text-center text-3xl font-semibold dark:text-white'>Productos Chance {company}</h1>
          <DonutChartComp items={data.products} />
        </Card>

        <Card className='w-4/12 flex flex-col justify-center gap-4'>

          <h1 className='text-center text-3xl font-semibold dark:text-white'>Cumplimiento {company} </h1>
          <CardMetaDia titulo='Meta Productos Chance' venta={data?.metaDia} porcentaje={data.porcentaje} />
          <CardVentaDia nombre='Venta Actual Chance' venta={data.ventaChance} />
        </Card>
      </article>

      <h1 className='text-center text-2xl py-2 font-semibold dark:text-white'>Resumen Cumplimiento Productos y/o Servicios {company}</h1>
      <section className='grid grid-cols-4 gap-2 px-2'>
        {
          data.products.map(item => (
            <CardMetas key={item.id} nombre={item.nombre} venta={item.venta} porcentaje={item.porcentaje} />
          ))
        }
      </section>

    </section>
  )
}

export default DahsBoard
