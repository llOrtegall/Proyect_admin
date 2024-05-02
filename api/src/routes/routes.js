import { getSucursales } from '../controllers/metas.controllers.js'
import { Router } from 'express'

export const metas = Router()

metas.get('/sucursales/:empresa', getSucursales)