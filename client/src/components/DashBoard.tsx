import { CardMetas, CardDia } from './iu'

import { type Dashboard } from '../types/metas'
import { type Empresa } from '../types/user'

import { useEffect, useState } from 'react'
import axios from 'axios'

import { DonutChartComp } from './iu/DonutChart'
import { Card } from '@tremor/react'

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
    <>
      <Card className='flex'>
        <div className='flex w-8/12 justify-center flex-col items-center gap-2'>
          <h1 className='text-center text-3xl font-semibold dark:text-white'>Productos Chance {company}</h1>
          <DonutChartComp items={data.products} />
        </div>

        {
          <div className='flex w-3/12 justify-center flex-col gap-2'>
            <h1 className='text-center text-3xl font-semibold dark:text-white'>Cumplimiento {company} </h1>
            <CardDia nombre='Meta Chance' venta={data?.metaDia} />
            <CardDia nombre='Venta Actual Chance' venta={data?.ventaChance} />
          </div>
        }
      </Card>

      <h1 className='text-center text-2xl py-2 font-semibold dark:text-white'>Resumen Cumplimiento Productos y/o Servicios {company}</h1>
      <section className='grid grid-cols-4 gap-2 px-2'>
        {
          data.products.map(item => (
            <CardMetas key={item.id} nombre={item.nombre} venta={item.venta} porcentaje={item.porcentaje} />
          ))
        }
      </section>

    </>
  )
}

export default DahsBoard
