import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import { User } from '../models/User'

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body

    const userRepository = getRepository(User)

    const userExists = await userRepository.findOne({
      email
    })

    if (userExists) {
      return response.status(400).json({
        error: "User already exists!"
      })
    }

    const user = userRepository.create({
      name, email
    })

    await userRepository.save(user)

    return response.status(201).json(user)
  }
}

export { UserController }
