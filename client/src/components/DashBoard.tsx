import { useEffect, useState } from 'react'
import { type Empresa } from '../types/user'
/* import MetasDia from './iu/metasDia' */
import axios from 'axios'

const DahsBoard = ({ company }: { company: Empresa }): JSX.Element => {
  const [data, setData] = useState()

  useEffect(() => {
    void axios.get(`http://localhost:3000/api/metas/${company === 'Servired' ? '39628' : '39627'}`)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    /* setData(company === 'Servired' ? response.data as MetasJamundi : response.data as Metas) */
  }, [])

  return (
    <section>

    </section>
  )
}

export default DahsBoard
