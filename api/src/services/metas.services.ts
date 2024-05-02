import { type MetasYumbo, type MetasJamundi } from '../types/metas'
import { pool_metas } from '../connections/mysqlMetas'
import { SelectQuery } from '../connections/querys'

const PRODUCTOS_JAMUNDI = ['CHANCE', 'CHOLADITO', 'PAGATODO_JAMUNDI', 'GANE5', 'PATA_MILLONARIA', 'DOBLECHANCE', 'CHANCE_MILLONARIO', 'ASTRO', 'LOTERIA_FISICA', 'LOTERIA_VIRTUAL', 'BETPLAY', 'GIROS', 'SOAT', 'PROMO1', 'PROMO2', 'RECAUDOS', 'RECARGAS', 'SUCURSAL', 'PROMEDIO_DIARIO_CHANCE']

const PRODUCTOS_YUMBO = ['CHANCE', 'PAGAMAS', 'PAGATODO', 'GANE5', 'PATA_MILLONARIA', 'DOBLECHANCE', 'CHANCE_MILLONARIO', 'ASTRO', 'LOTERIA_FISICA', 'LOTERIA_VIRTUAL', 'BETPLAY', 'GIROS', 'SOAT', 'PROMO1', 'PROMO2', 'RECAUDOS', 'RECARGAS', 'SUCURSAL']

const ZONA_YUMBO = "39627"
const ZONA_JAMUNDI = "39628"

const getProductos = (zona: string) => zona === ZONA_YUMBO ? PRODUCTOS_YUMBO.join(", ") : PRODUCTOS_JAMUNDI.join(", ")
const TODAY = new Date().toISOString().slice(0, 10)

export const getMetasService = async (zona: string) => {
  const QUERY = `SELECT ${getProductos(zona)} FROM METASPRODUCTOS WHERE FECHA = ? AND ZONA = ?`

  try {
    if (zona === ZONA_YUMBO) {
      return SelectQuery<MetasYumbo>(pool_metas, QUERY, [TODAY, zona])
    } else if (zona === ZONA_JAMUNDI) {
      return SelectQuery<MetasJamundi>(pool_metas, QUERY, [TODAY, zona])
    }
  } catch (error) {
    console.error(error)
    throw new Error('Error fetching metas')
  }
}

export const getSucursalService = async (zona: string) => {
  const QUERY = `SELECT mp.${getProductos(zona)}, ip.NOMBRE AS PDV_NOMBRE, ip.CATEGORIA AS PDV_CATE, ip.CODIGO AS PDV_SUCURSAL
                 FROM METASPRODUCTOS mp 
                 JOIN INFORMACION_PUNTOSVENTA ip ON mp.SUCURSAL = ip.CODIGO 
                 WHERE mp.FECHA = ? AND mp.ZONA = ?`
  try {
    if (zona === ZONA_YUMBO) {
      return SelectQuery<MetasYumbo>(pool_metas, QUERY, [TODAY, zona])
    } else if (zona === ZONA_JAMUNDI) {
      return SelectQuery<MetasJamundi>(pool_metas, QUERY, [TODAY, zona])
    }
  } catch (error) {
    console.error(error)
    throw new Error('Error fetching sucursal')
  }
}