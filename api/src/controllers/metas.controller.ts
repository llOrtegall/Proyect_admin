import { getMetasService } from '../services/metas.services'
import { Response, Request } from 'express'

export async function getMetas(req: Request, res: Response){
  try {
    const result = await getMetasService()
    return res.json(result)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error })
  }
}