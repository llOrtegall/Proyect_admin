import { MetasProducts } from '../model/metasproducts.model'
import { getMetasService } from '../services/metas.services'
import { Response, Request } from 'express'

interface ProductsMetas {
  [key: string]: number;
}

export async function getMetas(req: Request, res: Response) {
  const { zona } = req.params

  if (!zona) return res.status(400).json({ message: 'Zona is required' })
  if (zona !== "39627" && zona !== "39628") {
    return res.status(400).json({ message: 'Zona is invalid' })
  }

  try {
    const results = await getMetasService(zona)
    const products = ReturnDatavalues(results)
    const suma = sumarValoresDeObjetos(products)

    const metaDia = CalcularMetaDiaServired(suma)

    return res.status(200).json({suma, metaDia})
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
}

// export async function getSucursal(req: Request, res: Response) {
//   const { zona } = req.params

//   try {
//     const result = await getSucursalService(zona)
//     return res.status(200).json(result)
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error })
//   }
// }

function CalcularMetaDiaServired (data: any): number {
  return data.PROMEDIO_DIARIO_CHANCE + data.PROMEDIO_DIARIO_PATAMI + data.PROMEDIO_DIARIO_DOBLECHANCE + data.PROMEDIO_DIARIO_CHMILL
}

function ReturnDatavalues( results: MetasProducts[] ): ProductsMetas[] {
  return results.map( results => results.dataValues)
}

function sumarValoresDeObjetos(arrayDeObjetos: ProductsMetas[]): ProductsMetas {
  // Asumiendo que ProductsMetas es un tipo con propiedades numéricas
  const objetoSuma: Record<string, number> = {}; // Usando Record para permitir claves de tipo string

  arrayDeObjetos.forEach(objeto => {
    Object.keys(objeto).forEach(key => {
      // Asegurándonos de que objeto[key] es tratado como un número
      const valor = objeto[key] as number;
      if (!objetoSuma[key]) {
        objetoSuma[key] = valor;
      } else {
        objetoSuma[key] += valor;
      }
    });
  });

  // Aquí necesitarás asegurarte de que objetoSuma se ajusta al tipo ProductsMetas antes de retornarlo
  return objetoSuma as ProductsMetas;
}
