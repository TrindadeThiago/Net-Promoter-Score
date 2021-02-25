import { Router } from 'express'
import { SurveysController } from './controllers/SurveysController'

import { UsersController } from './controllers/UsersController'

const routes = Router()

const userController = new UsersController()
const serveysController = new SurveysController()

// users routes
routes.post('/users', userController.create)

// surveys routes
routes.get('/surveys', serveysController.show)
routes.post('/surveys', serveysController.create)

export default routes
