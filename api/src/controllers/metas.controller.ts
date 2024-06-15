import { getMetasService, getMetasPdvService } from '../services/metas.services'
import { MetasProduct } from '../types/interfaces'
import { Request, Response } from 'express'

export const getMetasController = async (req: Request, res: Response) => {
  const data = req.params;
  const zona = parseInt(data.zona);

  try {
    const metas = await getMetasService(zona);

    const test = metas.reduce((acc: MetasProduct, meta: MetasProduct) => {
      return {
        ASTRO: acc.ASTRO + meta.ASTRO,
        BETPLAY: acc.BETPLAY + meta.BETPLAY,
        CCOSTO: acc.CCOSTO + meta.CCOSTO,
        CHANCE: acc.CHANCE + meta.CHANCE,
        CHANCE_MILLONARIO: acc.CHANCE_MILLONARIO + meta.CHANCE_MILLONARIO,
        CHOLADITO: acc.CHOLADITO + meta.CHOLADITO,
        DOBLECHANCE: acc.DOBLECHANCE + meta.DOBLECHANCE,
        GANE5: acc.GANE5 + meta.GANE5,
        GIROS: acc.GIROS + meta.GIROS,
        LOTERIA_FISICA: acc.LOTERIA_FISICA + meta.LOTERIA_FISICA,
        LOTERIA_VIRTUAL: acc.LOTERIA_VIRTUAL + meta.LOTERIA_VIRTUAL,
        MT_ASTRO: acc.MT_ASTRO + meta.MT_ASTRO,
        MT_BETPLAY: acc.MT_BETPLAY + meta.MT_BETPLAY,
        MT_CHANCE: acc.MT_CHANCE + meta.MT_CHANCE,
        MT_CHANCE_MILLONARIO: acc.MT_CHANCE_MILLONARIO + meta.MT_CHANCE_MILLONARIO,
        MT_CHOLADITO: acc.MT_CHOLADITO + meta.MT_CHOLADITO,
        MT_DOBLECHANCE: acc.MT_DOBLECHANCE + meta.MT_DOBLECHANCE,
        MT_GANE5: acc.MT_GANE5 + meta.MT_GANE5,
        MT_GIROS: acc.MT_GIROS + meta.MT_GIROS,
        MT_LOTERIA_FISICA: acc.MT_LOTERIA_FISICA + meta.MT_LOTERIA_FISICA,
        MT_LOTERIA_VIRTUAL: acc.MT_LOTERIA_VIRTUAL + meta.MT_LOTERIA_VIRTUAL,
        MT_PAGAMAS: acc.MT_PAGAMAS + meta.MT_PAGAMAS,
        MT_PAGATODO: acc.MT_PAGATODO + meta.MT_PAGATODO,
        MT_PAGATODO_JAMUNDI: acc.MT_PAGATODO_JAMUNDI + meta.MT_PAGATODO_JAMUNDI,
        MT_PATA_MILLONARIA: acc.MT_PATA_MILLONARIA + meta.MT_PATA_MILLONARIA,
        MT_RECARGAS: acc.MT_RECARGAS + meta.MT_RECARGAS,
        MT_RECAUDOS: acc.MT_RECAUDOS + meta.MT_RECAUDOS,
        MT_SOAT: acc.MT_SOAT + meta.MT_SOAT,
        PAGAMAS: acc.PAGAMAS + meta.PAGAMAS,
        PAGATODO: acc.PAGATODO + meta.PAGATODO,
        PAGATODO_JAMUNDI: acc.PAGATODO_JAMUNDI + meta.PAGATODO_JAMUNDI,
        PATA_MILLONARIA: acc.PATA_MILLONARIA + meta.PATA_MILLONARIA,
        META_PROMO1: acc.META_PROMO1 + meta.META_PROMO1,
        META_PROMO2: acc.META_PROMO2 + meta.META_PROMO2,
        PROMEDIO_DIARIO_ASTRO: acc.PROMEDIO_DIARIO_ASTRO + meta.PROMEDIO_DIARIO_ASTRO,
        PROMEDIO_DIARIO_BETPLAY: acc.PROMEDIO_DIARIO_BETPLAY + meta.PROMEDIO_DIARIO_BETPLAY,
        PROMEDIO_DIARIO_CHANCE: acc.PROMEDIO_DIARIO_CHANCE + meta.PROMEDIO_DIARIO_CHANCE,
        PROMEDIO_DIARIO_CHMILL: acc.PROMEDIO_DIARIO_CHMILL + meta.PROMEDIO_DIARIO_CHMILL,
        PROMEDIO_DIARIO_CHOLADITO: acc.PROMEDIO_DIARIO_CHOLADITO + meta.PROMEDIO_DIARIO_CHOLADITO,
        PROMEDIO_DIARIO_DOBLECHANCE: acc.PROMEDIO_DIARIO_DOBLECHANCE + meta.PROMEDIO_DIARIO_DOBLECHANCE,
        PROMEDIO_DIARIO_GANE5: acc.PROMEDIO_DIARIO_GANE5 + meta.PROMEDIO_DIARIO_GANE5,
        PROMEDIO_DIARIO_GIROS: acc.PROMEDIO_DIARIO_GIROS + meta.PROMEDIO_DIARIO_GIROS,
        PROMEDIO_DIARIO_LF: acc.PROMEDIO_DIARIO_LF + meta.PROMEDIO_DIARIO_LF,
        PROMEDIO_DIARIO_LV: acc.PROMEDIO_DIARIO_LV + meta.PROMEDIO_DIARIO_LV,
        PROMEDIO_DIARIO_PAGAMAS: acc.PROMEDIO_DIARIO_PAGAMAS + meta.PROMEDIO_DIARIO_PAGAMAS,
        PROMEDIO_DIARIO_PAGATODO: acc.PROMEDIO_DIARIO_PAGATODO + meta.PROMEDIO_DIARIO_PAGATODO,
        PROMEDIO_DIARIO_PATAMI: acc.PROMEDIO_DIARIO_PATAMI + meta.PROMEDIO_DIARIO_PATAMI,
        PROMEDIO_DIARIO_PGTJAMUNDI: acc.PROMEDIO_DIARIO_PGTJAMUNDI + meta.PROMEDIO_DIARIO_PGTJAMUNDI,
        PROMEDIO_DIARIO_RECARGAS: acc.PROMEDIO_DIARIO_RECARGAS + meta.PROMEDIO_DIARIO_RECARGAS,
        PROMEDIO_DIARIO_RECAUDOS: acc.PROMEDIO_DIARIO_RECAUDOS + meta.PROMEDIO_DIARIO_RECAUDOS,
        PROMEDIO_DIARIO_SOAT: acc.PROMEDIO_DIARIO_SOAT + meta.PROMEDIO_DIARIO_SOAT,
        PROMO1: acc.PROMO1 + meta.PROMO1,
        PROMO2: acc.PROMO2 + meta.PROMO2,
        RECARGAS: acc.RECARGAS + meta.RECARGAS,
        RECAUDOS: acc.RECAUDOS + meta.RECAUDOS,
        SOAT: acc.SOAT + meta.SOAT
      };

    }, {
      ASTRO: 0,
      BETPLAY: 0,
      CCOSTO: 0,
      CHANCE: 0,
      CHANCE_MILLONARIO: 0,
      CHOLADITO: 0,
      DOBLECHANCE: 0,
      GANE5: 0,
      GIROS: 0,
      LOTERIA_FISICA: 0,
      LOTERIA_VIRTUAL: 0,
      MT_ASTRO: 0,
      MT_BETPLAY: 0,
      MT_CHANCE: 0,
      MT_CHANCE_MILLONARIO: 0,
      MT_CHOLADITO: 0,
      MT_DOBLECHANCE: 0,
      MT_GANE5: 0,
      MT_GIROS: 0,
      MT_LOTERIA_FISICA: 0,
      MT_LOTERIA_VIRTUAL: 0,
      MT_PAGAMAS: 0,
      MT_PAGATODO: 0,
      MT_PAGATODO_JAMUNDI: 0,
      MT_PATA_MILLONARIA: 0,
      MT_RECARGAS: 0,
      MT_RECAUDOS: 0,
      MT_SOAT: 0,
      PAGAMAS: 0,
      PAGATODO: 0,
      PAGATODO_JAMUNDI: 0,
      PATA_MILLONARIA: 0,
      META_PROMO1: 0,
      META_PROMO2: 0,
      PROMEDIO_DIARIO_ASTRO: 0,
      PROMEDIO_DIARIO_BETPLAY: 0,
      PROMEDIO_DIARIO_CHANCE: 0,
      PROMEDIO_DIARIO_CHMILL: 0,
      PROMEDIO_DIARIO_CHOLADITO: 0,
      PROMEDIO_DIARIO_DOBLECHANCE: 0,
      PROMEDIO_DIARIO_GANE5: 0,
      PROMEDIO_DIARIO_GIROS: 0,
      PROMEDIO_DIARIO_LF: 0,
      PROMEDIO_DIARIO_LV: 0,
      PROMEDIO_DIARIO_PAGAMAS: 0,
      PROMEDIO_DIARIO_PAGATODO: 0,
      PROMEDIO_DIARIO_PATAMI: 0,
      PROMEDIO_DIARIO_PGTJAMUNDI: 0,
      PROMEDIO_DIARIO_RECARGAS: 0,
      PROMEDIO_DIARIO_RECAUDOS: 0,
      PROMEDIO_DIARIO_SOAT: 0,
      PROMO1: 0,
      PROMO2: 0,
      RECARGAS: 0,
      RECAUDOS: 0,
      SOAT: 0,
    } as MetasProduct);

    return res.json(test);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Error en el servidor');
  }
};

export const getMetasPdv = async (req: Request, res: Response) => {
  const data = req.params
  const zona = parseInt(data.zona)

  try {
    const data = await getMetasPdvService(zona)

    return res.json(data)
  } catch (error) {
    console.log(error);
    return res.status(500).send('Error en el servidor')
  }
}