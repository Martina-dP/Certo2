import { User, Role, Company } from '../../client'

export type UserDto = {
  id: string
  companyId: string
  roleId: string
  firstName: string
  lastName: string
  email?: string | null
  passwordHash?: string | null
  pinCode?: string | null
  phone?: string | null
  isActive: boolean
  lastLoginAt?: Date | null
  createdAt: Date
  updatedAt: Date
}

export default class UserEntity {
  constructor(
    private data: User & {
      company?: Company
      role?: Role
    }
  ) {}

  get id() {
    return this.data.id
  }

  async toDto(): Promise<UserDto> {
    return {
      id: this.data.id,
      companyId: this.data.companyId,
      roleId: this.data.roleId,
      firstName: this.data.firstName,
      lastName: this.data.lastName,
      email: this.data.email,
      passwordHash: this.data.passwordHash,
      pinCode: this.data.pinCode,
      phone: this.data.phone,
      isActive: this.data.isActive,
      lastLoginAt: this.data.lastLoginAt,
      createdAt: this.data.createdAt,
      updatedAt: this.data.updatedAt
    }
  }
}
