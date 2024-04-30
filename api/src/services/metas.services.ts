import { pool_metas } from '../connections/mysqlMetas'
import { type MetasYumbo, type MetasJamundi } from '../types/metas'
import { SelectQuery } from '../connections/querys'

const PRODUCTOS_JAMUNDI = ['CHANCE', 'CHOLADITO', 'PAGATODO_JAMUNDI', 'GANE5', 'PATA_MILLONARIA', 'DOBLECHANCE', 'CHANCE_MILLONARIO', 'ASTRO', 'LOTERIA_FISICA', 'LOTERIA_VIRTUAL', 'BETPLAY', 'GIROS', 'SOAT', 'PROMO1', 'PROMO2', 'RECAUDOS', 'RECARGAS', 'SUCURSAL']

const PRODUCTOS_YUMBO = ['CHANCE', 'PAGAMAS', 'PAGATODO', 'GANE5', 'PATA_MILLONARIA', 'DOBLECHANCE', 'CHANCE_MILLONARIO', 'ASTRO', 'LOTERIA_FISICA', 'LOTERIA_VIRTUAL', 'BETPLAY', 'GIROS', 'SOAT', 'PROMO1', 'PROMO2', 'RECAUDOS', 'RECARGAS', 'SUCURSAL']

// "39627": YUMBO  "39628": JAMUNDI

export const getMetasService = async (zona: string) => {
  const QUERY = `select ${zona === '39627' ? PRODUCTOS_YUMBO : PRODUCTOS_JAMUNDI } from METASPRODUCTOS where FECHA = ? and ZONA = ?`;
  const TODAY = new Date().toISOString().slice(0, 10) 
  
  if(zona === "39627"){
    return SelectQuery<MetasYumbo>(pool_metas, QUERY, [TODAY, zona])
  } else if(zona === "39628"){
    return SelectQuery<MetasJamundi>(pool_metas, QUERY, [TODAY, zona])
  }
}

export const getSucursalService = async (zona: string) => {
  const QUERY = `SELECT mp.${zona === '39627' ? PRODUCTOS_YUMBO : PRODUCTOS_JAMUNDI }, ip.NOMBRE AS PDV_NOMBRE, ip.CATEGORIA AS PDV_CATE, ip.CODIGO AS PDV_SUCURSAL
                 FROM METASPRODUCTOS mp 
                 JOIN INFORMACION_PUNTOSVENTA ip ON mp.SUCURSAL = ip.CODIGO 
                 WHERE mp.FECHA = ? AND mp.ZONA = ?`;
  const TODAY = new Date().toISOString().slice(0, 10)

  if(zona === "39627"){
    return SelectQuery<MetasYumbo>(pool_metas, QUERY, [TODAY, zona])
  } else if(zona === "39628"){
    return SelectQuery<MetasJamundi>(pool_metas, QUERY, [TODAY, zona])
  }
}