import { Router } from 'express'
import { SendMailController } from './controllers/SendMailController'
import { SurveysController } from './controllers/SurveysController'

import { UsersController } from './controllers/UsersController'

const routes = Router()

const userController = new UsersController()
const serveysController = new SurveysController()
const sendMailController = new SendMailController()

// users routes
routes.post('/users', userController.create)

// surveys routes
routes.get('/surveys', serveysController.show)
routes.post('/surveys', serveysController.create)

// sendMail routes
routes.post('/sendMail', sendMailController.execute)

export { routes }
