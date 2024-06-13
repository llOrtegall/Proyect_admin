import { Metas } from '../model/metasproducts.model'
import { fn } from 'sequelize'

export const getMetasService = async () => {
  try {

    const results = await Metas.findAll({
      where: { ZONA: 39627, FECHA: fn('CURDATE') },
      limit: 2
    })

    return results.map( meta => meta.dataValues)
  } catch (error) {
    throw error
  }
}