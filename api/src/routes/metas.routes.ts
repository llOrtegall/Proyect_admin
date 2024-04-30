import { getMetas } from '../controllers/metas.controller'
import { Router } from 'express'

export const RouterMetas = Router()

RouterMetas.get('/metas', getMetas)