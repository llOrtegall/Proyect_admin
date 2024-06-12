import { getMetasService } from '../services/metas.services'
import { Response, Request } from 'express'

export async function getMetas(req: Request, res: Response) {
  const { zona } = req.params

  if (!zona) return res.status(400).json({ message: 'Zona is required' })
  if (zona !== "39627" && zona !== "39628") {
    return res.status(400).json({ message: 'Zona is invalid' })
  }

  try {
    const results = await getMetasService(zona)
    return res.status(200).json(results)
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
}

// export async function getSucursal(req: Request, res: Response) {
//   const { zona } = req.params

//   try {
//     const result = await getSucursalService(zona)
//     return res.status(200).json(result)
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error })
//   }
// }