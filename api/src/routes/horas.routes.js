import { getHoras } from '../controllers/horas.controllers.js'
import { Router } from 'express'

export const horas = Router()

horas.get('/horas', getHoras)