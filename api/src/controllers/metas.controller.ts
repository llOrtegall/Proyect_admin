import { getMetasService } from '../services/metas.services'
import { Response, Request } from 'express'

export async function getMetas(req: Request, res: Response) {
  const { zona } = req.params

  if (!zona) return res.status(400).json({ message: 'Zona is required' })
  if (zona !== "39627" && zona !== "39628") {
    return res.status(400).json({ message: 'Zona is invalid' })
  }

  try {
    const result = await getMetasService(zona)
    const ventaTotalxProducto = result.reduce((acc, curr) => {
      const keys = Object.keys(curr)
      keys.forEach(key => {
        if (key !== 'FECHA' && key !== 'SUCURSAL') {
          acc[key] = acc[key] ? acc[key] + curr[key] : curr[key]
        }
      })
      return acc
    })

    return res.json(ventaTotalxProducto)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error })
  }
}