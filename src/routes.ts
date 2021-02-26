import { Router } from 'express'
import { AnswerController } from './controllers/AnswerController'
import { SendMailController } from './controllers/SendMailController'
import { SurveysController } from './controllers/SurveysController'

import { UsersController } from './controllers/UsersController'

const routes = Router()

const userController = new UsersController()
const serveysController = new SurveysController()
const sendMailController = new SendMailController()
const answerController = new AnswerController()

// users routes
routes.post('/users', userController.create)

// surveys routes
routes.get('/surveys', serveysController.show)
routes.post('/surveys', serveysController.create)

// sendMail routes
routes.post('/sendMail', sendMailController.execute)

//answer routes
routes.get('/answers/:value', answerController.execute)

export { routes }
