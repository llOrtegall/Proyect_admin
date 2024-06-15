import { type Dashboard } from '../types/metas'

import { CardComponent } from './iu/CardComponent'
import { type Empresa } from '../types/user'
import { useEffect, useState } from 'react'
import { CardMetas } from './iu/cardMetas'
import { CardDia } from './iu/cardDia'
import axios from 'axios'

const DahsBoard = ({ company }: { company: Empresa }): JSX.Element => {
  const [data, setData] = useState<Dashboard>()

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

  // TODO: INTENTAR MANEJAR AMBAS EMPRESAS EN UN SOLO ESTADO ES COMPLICADO MEJOR PROBAR MEJOR IMPLEMENTACIÓN CON UN RENDERIZADO CONDICIONAL  */
  return (
    <section className='flex flex-col gap-4'>

      <section className='flex gap-2 px-12'>

        <article className='flex w-6/12 max-h-max'>
          {
            data?.porcentaje !== undefined && <CardComponent key={1} porcentaje={data.porcentaje} cumplimiento={company} />
          }
        </article>

        <article className='w-6/12 h-full'>
          {
            data?.metaDia !== undefined && data.ventaChance !== undefined && (
              <>
                <CardDia nombre='Meta Del Día Chance' venta={data?.metaDia} />
                <CardDia nombre='Venta Actual Día Chance' venta={data?.ventaChance} />
              </>
            )
          }
        </article>

      </section>

      <section className='grid grid-cols-3 gap-2 px-12'>
        {
          data?.products !== undefined && data?.products.length !== 0 && (
            data.products.map(item => (
              <CardMetas key={item.id} nombre={item.nombre} venta={item.venta} porcentaje={item.porcentaje} />
            ))
          )
        }
      </section>

    </section>
  )
}

export default DahsBoard
