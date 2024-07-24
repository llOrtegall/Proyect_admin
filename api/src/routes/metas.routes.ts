import { getMetasController, getMetasPdv, getMetasSucursal } from '../controllers/metas.controller'
import { Router } from 'express'

export const RouterMetas = Router()

RouterMetas.get('/metas/:zona', getMetasController)

RouterMetas.get('/sucursal/:zona', getMetasPdv)

RouterMetas.get('/metas/:zona/:sucursal', getMetasSucursal)