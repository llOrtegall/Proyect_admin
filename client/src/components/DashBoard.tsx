import { CalcularMetaDiaMultired, CalcularMetaDiaServired, CalcularVentaDiaMultired, CalcularVentaDiaServired } from '../utils/funciones'
import { type MetasServired, type MetasMultired } from '../types/metas'
import { CardComponent } from './iu/CardComponent'
import { type Empresa } from '../types/user'
import { useEffect, useState } from 'react'
import { CardDia } from './iu/cardDia'
import axios from 'axios'

const DahsBoard = ({ company }: { company: Empresa }): JSX.Element => {
  const [dataServired, setDataServired] = useState<MetasServired>()
  const [dataMultired, setDataMultired] = useState<MetasMultired>()

  // TODO: Esta forma de tipar la respuesta funciona sin embargo al implementar un hook personalizado se podria mejorar
  // TODO: por el momento quedara así para continuar con el renderizado de la información
  useEffect(() => {
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
  }, [company])

  // TODO: INTENTAR MANEJAR AMBAS EMPRESAS EN UN SOLO ESTADO ES COMPLICADO MEJOR PROBAR MEJOR IMPLEMENTACIÓN CON UN RENDERIZADO CONDICIONAL  */
  return (
    <section>

      <article className="flex px-10 justify-center py-4 uppercase font-bold">
        <CardComponent cumplimiento={'12'} porcentaje={28} />
      </article>

      {
        company === 'Servired'
          ? (
            <article className='flex px-12 gap-2 pb-4 font-bold'>
              {dataServired !== undefined ? <CardDia nombre='Meta Del Día' venta={CalcularMetaDiaServired(dataServired)} /> : null}
              {dataServired !== undefined ? <CardDia nombre='Venta Actual Día' venta={CalcularVentaDiaServired(dataServired)} /> : null}
            </article>
            )
          : (
            <article className='flex px-12 gap-2 pb-4 font-bold'>
              {dataMultired !== undefined ? <CardDia nombre='Meta Del Día' venta={CalcularMetaDiaMultired(dataMultired)} /> : null}
              {dataMultired !== undefined ? <CardDia nombre='Venta Actual Día' venta={CalcularVentaDiaMultired(dataMultired)} /> : null}
            </article>
            )
      }

    </section>
  )
}

export default DahsBoard
