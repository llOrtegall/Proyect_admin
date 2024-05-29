import {
  porcentajeCumplimientoServired,
  CalcularMetaDiaMultired, CalcularMetaDiaServired, CalcularVentaDiaMultired,
  CalcularVentaDiaServired, MapearProductosMultired, MapearProductosServired,
  porcentajeCumplimientoMultired
} from '../utils/funciones'

import { type MetasServired, type MetasMultired } from '../types/metas'

import { CardComponent } from './iu/CardComponent'
import { type Empresa } from '../types/user'
import { useEffect, useState } from 'react'
import { CardMetas } from './iu/cardMetas'
import { CardDia } from './iu/cardDia'
import axios from 'axios'

const DahsBoard = ({ company }: { company: Empresa }): JSX.Element => {
  const [dataServired, setDataServired] = useState<MetasServired>() // * AQUI SE ASIGNA LA DATA PARA SEVIRED
  const [dataMultired, setDataMultired] = useState<MetasMultired>() // * AQUI SE ASIGNA LA DATA PARA MULTIRED

  // TODO: Esta forma de tipar la respuesta funciona sin embargo al implementar un hook personalizado se podria mejorar
  // TODO: por el momento quedara así para continuar con el renderizado de la información
  useEffect(() => {
    const fetchData = (): void => {
      void axios.get(`http://localhost:3000/api/metas/${company === 'Servired' ? '39628' : '39627'}`)
        .then(response => {
          const data = response.data
          if (company === 'Servired') {
            setDataServired(data as MetasServired)
          } else if (company === 'Multired') {
            setDataMultired(data as MetasMultired)
          } else {
            console.log('Company not found')
          }
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

        <article className='w-6/12 h-full'>
          {
            company === 'Servired'
              ? <>
                {dataServired !== undefined ? <CardDia nombre='Meta Del Día' venta={CalcularMetaDiaServired(dataServired)} /> : null}
                {dataServired !== undefined ? <CardDia nombre='Venta Actual Día' venta={CalcularVentaDiaServired(dataServired)} /> : null}
              </>

              : <>
                {dataMultired !== undefined ? <CardDia nombre='Meta Del Día' venta={CalcularMetaDiaMultired(dataMultired)} /> : null}
                {dataMultired !== undefined ? <CardDia nombre='Venta Actual Día' venta={CalcularVentaDiaMultired(dataMultired)} /> : null}
              </>
          }
        </article>

        <article className='flex w-6/12 max-h-max'>
          {
            company === 'Servired'
              ? (dataServired !== undefined ? <CardComponent cumplimiento={'Cumplimiento Chance Del Dia ' + company} porcentaje={porcentajeCumplimientoServired(dataServired)} /> : null)
              : (dataMultired !== undefined ? <CardComponent cumplimiento={'Cumplimiento Chance Del Dia ' + company} porcentaje={porcentajeCumplimientoMultired(dataMultired)} /> : null)
          }
        </article>

      </section>

      <section className='grid grid-cols-3 gap-2 px-12'>
        {
          company === 'Servired'
            ? <>
              {
                dataServired !== undefined
                  ? MapearProductosServired(dataServired).map(item => <CardMetas key={item.id} nombre={item.nombre} porcentaje={item.porcentaje} venta={item.venta} />)
                  : null
              }
            </>
            : <>
              {dataMultired !== undefined
                ? MapearProductosMultired(dataMultired).map(item => <CardMetas key={item.id} nombre={item.nombre} porcentaje={item.porcentaje} venta={item.venta} />)
                : null
              }
            </>
        }
      </section>

    </section>
  )
}

export default DahsBoard
