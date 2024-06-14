import { Metas } from '../model/metasproducts.model'
import { PuntosVenta } from '../model/sucursales.model'
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

export const getMetasPdvService = async (zona: number) => {
  try {
    const results = await PuntosVenta.findAll({
      attributes: ['CODIGO', 'NOMBRE', 'SUPERVISOR', 'CATEGORIA', 'VERSION'],
      where: { ZONA: zona },
      include: [{
        model: Metas,
        where: { ZONA: zona, FECHA: fn('CURDATE') } 
      }],
    })

    console.log(results.map( m => m.dataValues.));
    

    return results.map(meta => meta.dataValues)
  } catch (error) {
    throw error;
  }
}