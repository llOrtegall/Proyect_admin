import { Request, Response } from 'express';
import { Meta } from '../model/metas.model';
import { fn, Op } from 'sequelize';

export const getMetasController = async (req: Request, res: Response) => {

  try {
    const results = await Meta.findAll({
      where: {
        fecha: { [Op.eq]: fn('CURDATE') },
        zona: { [Op.eq]: 39627 }
      }
    })

    return res.status(200).json(results)
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }

}