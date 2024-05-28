import { type MetasServired, type MetasMultired } from '../types/metas'
import { useEffect, useState } from 'react'
import { type Empresa } from '../types/user'
/* import MetasDia from './iu/metasDia' */
import axios from 'axios'
import { CardComponent } from './iu/CardComponent'

const DahsBoard = ({ company }: { company: Empresa }): JSX.Element => {
  const [data, setData] = useState<MetasMultired | MetasServired>()

  // TODO: Esta forma de tipar la respuesta funciona sin embargo al implementar un hook personalizado se podria mejorar por el momento quedara así para continuar con el renderizado de la información
  useEffect(() => {
    void axios.get(`http://localhost:3000/api/metas/${company === 'Servired' ? '39628' : '39627'}`)
      .then(response => {
        const data = response.data
        if (company === 'Servired') {
          setData(data as MetasServired)
        } else if (company === 'Multired') {
          setData(data as MetasMultired)
        } else {
          console.log('Company not found')
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <section>
      <article className="flex px-10 justify-center py-4 uppercase font-bold">

      </article>
    </section>
  )
}

export default DahsBoard
