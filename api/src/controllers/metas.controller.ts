import { getMetasService } from '../services/metas.services'
import { Request, Response } from 'express'

export const getMetasController = async (req: Request, res: Response) => {
  try {
    const metas = await getMetasService()

    // Asumiendo que todas las metas tienen las mismas claves además de FECHA
    const acc: { [key: string]: number } = {};

    const sumaTotal = metas.reduce((acc, meta) => {
      const { FECHA, SUCURSAL, ZONA, VERSION, ...rest } = meta

      Object.entries(rest).forEach(([key, value]) => {
        if (acc[key]) {
          acc[key] += value
        } else {
          acc[key] = value
        }
      })
      return acc
    }, acc) // Inicializa el acumulador como un objeto vacío

    res.json(sumaTotal) // Devuelve el objeto con la suma total de las propiedades
  } catch (error) {
    console.log(error);
    res.status(500).send('Error en el servidor')
  }
}