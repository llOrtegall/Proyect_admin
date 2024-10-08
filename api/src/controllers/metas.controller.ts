import { Request, Response } from 'express';
import { Meta } from '../model/metas.model';
import { fn, Op } from 'sequelize';

export const getMetasController = async (req: Request, res: Response) => {

  try {
    const results = await Meta.findAll({
      where: {
        fecha: { [Op.eq]: fn('CURDATE') },
        zona: { [Op.eq]: 39627 }
      }
    })

    const suma = results.reduce((acc, curr) => {
      return {
        chance: acc.chance + curr.chance,
        pagamas: acc.pagamas + curr.pagamas,
        pagatodo: acc.pagatodo + curr.pagatodo,
        doblechance: acc.doblechance + curr.doblechance,
        chance_millonario: acc.chance_millonario + curr.chance_millonario,
        astro: acc.astro + curr.astro,
        loteria_fisica: acc.loteria_fisica + curr.loteria_fisica,
        loteria_virtual: acc.loteria_virtual + curr.loteria_virtual,
        betplay: acc.betplay + curr.betplay,
        giros: acc.giros + curr.giros,
        soat: acc.soat + curr.soat,
        recargas: acc.recargas + curr.recargas,
        meta_dia_chance: acc.meta_dia_chance + curr.promedio_diario_chance,
        meta_dia_pagamas: acc.meta_dia_pagamas + curr.promedio_diario_pagamas,
        meta_dia_pagatodo: acc.meta_dia_pagatodo + curr.promedio_diario_pagatodo,
        meta_dia_doblechance: acc.meta_dia_doblechance + curr.promedio_diario_doblechance,
        meta_dia_chmill: acc.meta_dia_chmill + curr.promedio_diario_chmill,
        meta_dia_astro: acc.meta_dia_astro + curr.promedio_diario_astro,
        meta_dia_lf: acc.meta_dia_lf + curr.promedio_diario_lf,
        meta_dia_lv: acc.meta_dia_lv + curr.promedio_diario_lv,
        meta_dia_betplay: acc.meta_dia_betplay + curr.promedio_diario_betplay,
        meta_dia_giros: acc.meta_dia_giros + curr.promedio_diario_giros,
        meta_dia_soat: acc.meta_dia_soat + curr.promedio_diario_soat,
        meta_dia_recargas: acc.meta_dia_recargas + curr.promedio_diario_recargas
      }
    }, {
      chance: 0,
      pagamas: 0,
      pagatodo: 0,
      doblechance: 0,
      chance_millonario: 0,
      astro: 0,
      loteria_fisica: 0,
      loteria_virtual: 0,
      betplay: 0,
      giros: 0,
      soat: 0,
      recargas: 0,
      meta_dia_chance: 0,
      meta_dia_pagamas: 0,
      meta_dia_pagatodo: 0,
      meta_dia_doblechance: 0,
      meta_dia_chmill: 0,
      meta_dia_astro: 0,
      meta_dia_lf: 0,
      meta_dia_lv: 0,
      meta_dia_betplay: 0,
      meta_dia_giros: 0,
      meta_dia_soat: 0,
      meta_dia_recargas: 0
    })
    

    return res.status(200).json({ products: suma, sucursales: results.length})
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }

}