import { getMetasService } from '../services/metas.services'
import { Request, Response } from 'express'

interface ACC { 
  [key: string]: number
}

export const getMetasController = async (req: Request, res: Response) => {
  try {
    const metas = await getMetasService()

    const newMeta = metas.map( meta => {
      const { FECHA, ZONA, SUCURSAL, VERSION, CCOSTO,  ...rest } = meta
      return rest
    })

    const reduceMetas = newMeta.reduce((acc: ACC, meta: any) => {
      for (const key in meta) {
        if (acc[key]) {
          acc[key] += meta[key]
        } else {
          acc[key] = meta[key]
        }
      }
      return acc
    }, {})

    res.json(reduceMetas) // Devuelve el objeto con la suma total de las propiedades
  } catch (error) {
    console.log(error);
    res.status(500).send('Error en el servidor')
  }
}