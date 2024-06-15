import { PuntosVenta } from '../model/sucursales.model'
import { Metas } from '../model/metasproducts.model'
import { fn } from 'sequelize'

const PRM = 'PROMEDIO_DIARIO_'

const MULTIRED = [
  'ASTRO', 'CHANCE', 'BETPLAY', 'CHANCE_MILLONARIO', 'DOBLECHANCE', 'GANE5', 'PAGAMAS', 'PAGATODO', 
  'PATA_MILLONARIA', 'LOTERIA_VIRTUAL', 'LOTERIA_FISICA', 'RECARGAS', 'SOAT', 'RECAUDOS', 'GIROS', 'PROMO1', 'PROMO2', 
  /* ----------------- */
  'MT_ASTRO','MT_CHANCE', 'MT_BETPLAY', 'MT_CHANCE_MILLONARIO', 'MT_DOBLECHANCE', 'MT_GANE5', 'MT_PAGAMAS', 'MT_PAGATODO', 
  'MT_PATA_MILLONARIA', 'MT_LOTERIA_VIRTUAL', 'MT_LOTERIA_FISICA', 'MT_RECARGAS', 'MT_SOAT', 'MT_RECAUDOS', 'MT_GIROS', 'META_PROMO1', 'META_PROMO2',
  /* ----------------- */ 
  `${PRM}ASTRO`, `${PRM}CHANCE`, `${PRM}BETPLAY`, `${PRM}CHMILL`, `${PRM}DOBLECHANCE`, `${PRM}GANE5`, `${PRM}PAGAMAS`,
  `${PRM}PAGATODO`, `${PRM}PATAMI`, `${PRM}LF`, `${PRM}LV`, `${PRM}RECARGAS`, `${PRM}SOAT`, `${PRM}RECAUDOS`, `${PRM}GIROS`, 
]

const SERVIRED = [
  'ASTRO', 'CHANCE', 'BETPLAY', 'CHANCE_MILLONARIO', 'DOBLECHANCE', 'GANE5', 'CHOLADITO', 'PAGATODO_JAMUNDI', 
  'PATA_MILLONARIA', 'LOTERIA_VIRTUAL', 'LOTERIA_FISICA', 'RECARGAS', 'SOAT', 'RECAUDOS', 'GIROS', 'PROMO1', 'PROMO2', 
  /* ----------------- */
  'MT_ASTRO','MT_CHANCE', 'MT_BETPLAY', 'MT_CHANCE_MILLONARIO', 'MT_DOBLECHANCE', 'MT_GANE5', 'MT_CHOLADITO', 'MT_PAGATODO_JAMUNDI', 
  'MT_PATA_MILLONARIA', 'MT_LOTERIA_VIRTUAL', 'MT_LOTERIA_FISICA', 'MT_RECARGAS', 'MT_SOAT', 'MT_RECAUDOS', 'MT_GIROS', 'META_PROMO1', 'META_PROMO2',
  /* ----------------- */ 
  `${PRM}ASTRO`, `${PRM}CHANCE`, `${PRM}BETPLAY`, `${PRM}CHMILL`, `${PRM}DOBLECHANCE`, `${PRM}GANE5`, `${PRM}CHOLADITO`,
  `${PRM}PGTJAMUNDI`, `${PRM}PATAMI`, `${PRM}LF`, `${PRM}LV`, `${PRM}RECARGAS`, `${PRM}SOAT`, `${PRM}RECAUDOS`, `${PRM}GIROS`, 
]

function ZonaCompany(zona: number) {
  if(zona === 39627) return MULTIRED
  if(zona === 39628) return SERVIRED
  throw new Error('Zona no encontrada')
}


export const getMetasService = async (zona: number) => {
  try {

    const results = await Metas.findAll({
     attributes: ZonaCompany(zona),
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
      attributes: ['NOMBRE', 'CODIGO', 'SUPERVISOR', 'CATEGORIA'],
      where: { ZONA: zona },
      include: {
        attributes: ZonaCompany(zona), // funcion que detecta el tipo de zona para retornar los atributos correctos
        model: Metas,
        where: { ZONA: zona, FECHA: fn('CURDATE') } 
      },
    })

    return results.map(pdv => pdv.dataValues)
  } catch (error) {
    throw error;
  }
}