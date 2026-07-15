import { AppError } from './AppError'

export class InvalidPasswordError extends AppError {
  constructor() {
    super('Invalid password.', 401)

    this.name = 'InvalidPasswordError'
  }
}

export class EmailAlreadyExistsError extends AppError {
  email: string

  constructor(email: string) {
    super(`A user with email <${email}> already exists.`, 409)

    this.name = 'EmailAlreadyExistsError'
    this.email = email
  }
}