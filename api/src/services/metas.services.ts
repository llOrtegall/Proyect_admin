import { pool_metas } from '../connections/mysqlMetas'
import { type MetasYumbo } from '../types/metas'
import { SelectQuery } from '../connections/querys'

export const getMetasService = async (zona: string) => {
  const PRODUCTOS = ['CHANCE', 'PAGAMAS', 'PAGATODO', 'GANE5', 'PATA_MILLONARIA', 'DOBLECHANCE', 'CHANCE_MILLONARIO', 'ASTRO', 'LOTERIA_FISICA', 'LOTERIA_VIRTUAL', 'BETPLAY', 'GIROS', 'SOAT', 'PROMO1', 'PROMO2', 'RECAUDOS', 'RECARGAS', 'SUCURSAL']
  const QUERY = `select ${PRODUCTOS} from METASPRODUCTOS where FECHA = ? and ZONA = ?`;
  const TODAY = new Date().toISOString().slice(0, 10) 
  return SelectQuery<MetasYumbo>(pool_metas, QUERY, [TODAY, zona])
}