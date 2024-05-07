import { type MetasYumbo, type MetasJamundi } from '../types/metas'
import { pool_metas } from '../connections/mysqlMetas'
import { SelectQuery } from '../connections/querys'

const PRODUCTOS_JAMUNDI = ['CHANCE', 'CHOLADITO', 'PAGATODO_JAMUNDI', 'GANE5', 'PATA_MILLONARIA', 'DOBLECHANCE', 'CHANCE_MILLONARIO', 'ASTRO', 'LOTERIA_FISICA', 'LOTERIA_VIRTUAL', 'BETPLAY', 'GIROS', 'SOAT', 'RECAUDOS', 'RECARGAS', 'PROMO2', 'SUCURSAL', 'PROMEDIO_DIARIO_CHANCE', 'PROMEDIO_DIARIO_CHOLADITO', 'PROMEDIO_DIARIO_PGTJAMUNDI', 'PROMEDIO_DIARIO_GANE5', 'PROMEDIO_DIARIO_PATAMI', 'PROMEDIO_DIARIO_DOBLECHANCE', 'PROMEDIO_DIARIO_CHMILL', 'PROMEDIO_DIARIO_ASTRO', 'PROMEDIO_DIARIO_LF', 'PROMEDIO_DIARIO_LV', 'PROMEDIO_DIARIO_BETPLAY', 'PROMEDIO_DIARIO_GIROS', 'PROMEDIO_DIARIO_SOAT',  'PROMEDIO_DIARIO_RECAUDOS', 'PROMEDIO_DIARIO_RECARGAS', 'META_PROMO2']

const PRODUCTOS_YUMBO = ['CHANCE', 'PAGAMAS', 'PAGATODO', 'GANE5', 'PATA_MILLONARIA', 'DOBLECHANCE', 'CHANCE_MILLONARIO', 'ASTRO', 'LOTERIA_FISICA', 'LOTERIA_VIRTUAL', 'BETPLAY', 'GIROS', 'SOAT', 'RECAUDOS', 'RECARGAS', 'PROMO2', 'SUCURSAL', 'PROMEDIO_DIARIO_CHANCE', 'PROMEDIO_DIARIO_PAGAMAS', 'PROMEDIO_DIARIO_PAGATODO', 'PROMEDIO_DIARIO_GANE5', 'PROMEDIO_DIARIO_PATAMI', 'PROMEDIO_DIARIO_DOBLECHANCE', 'PROMEDIO_DIARIO_CHMILL', 'PROMEDIO_DIARIO_ASTRO', 'PROMEDIO_DIARIO_LF', 'PROMEDIO_DIARIO_LV', 'PROMEDIO_DIARIO_BETPLAY', 'PROMEDIO_DIARIO_GIROS', 'PROMEDIO_DIARIO_SOAT',  'PROMEDIO_DIARIO_RECAUDOS', 'PROMEDIO_DIARIO_RECARGAS', 'META_PROMO2']

const ZONA_YUMBO = "39627"
const ZONA_JAMUNDI = "39628"

const getProductos = (zona: string) => zona === ZONA_YUMBO ? PRODUCTOS_YUMBO.join(",") : PRODUCTOS_JAMUNDI.join(",")
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
  const QUERY = `SELECT mp.${getProductos(zona)},ip.NOMBRE AS PDV_NOMBRE,ip.CATEGORIA AS PDV_CATE,ip.CODIGO AS PDV_SUCURSAL
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