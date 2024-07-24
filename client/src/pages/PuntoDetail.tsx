import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Card } from '@tremor/react'

const PuntoDetail = (): JSX.Element => {
  const { codigo } = useParams<{ codigo: string }>()

  const [data, setData] = useState()

  console.log(codigo)

  useEffect(() => {
    if (codigo == null) return

    axios.get(`http://localhost:3000/api/metaspdv/${codigo}`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.error('Error en getRecaudo', err)
      })
  }, [codigo])

  return (
    <Card className="p-4 shadow-lg rounded-lg bg-white flex flex-col items-center gap-6">
      {
        data !== undefined
          ? (
            <>
                <p className="font-bold text-gray-700"> <span className="font-bold">Fecha: </span>{data.FECHA}</p>
            </>
            )
          : (
            <h1 className="font-medium text-center text-gray-700">Cargando...</h1>
            )
      }

    </Card>
  )
}

export default PuntoDetail
