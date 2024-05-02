import { getMetas, getSucursal } from '../controllers/metas.controller'
import { Router } from 'express'

export const RouterMetas = Router()

RouterMetas.get('/metas/:zona', getMetas)

RouterMetas.get('/sucursal/:zona', getSucursal)