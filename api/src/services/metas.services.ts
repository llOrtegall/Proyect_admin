import { Metas } from '../model/metasproducts.model'
import { fn } from 'sequelize'

export const getMetasService = async (zona: number) => {
  try {

    const results = await Metas.findAll({
      where: { ZONA: zona, FECHA: fn('CURDATE') }
    })

    return results.map(meta => meta.dataValues)
  } catch (error) {
    throw error
  }
}