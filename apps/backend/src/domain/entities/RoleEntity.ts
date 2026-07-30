import { Company, Role } from '../../client'

export type RoleDto = {
  id: string
  companyId: string
  name: string
  description?: string | null
  isSystem: boolean
  createdAt: Date
  updatedAt: Date
}

export default class RoleEntity {
  constructor(
    private data: Role & {
      company?: Company
    }
  ) {}

  get id() {
    return this.data.id
  }

  get companyId() {
    return this.data.companyId
  }

  get name() {
    return this.data.name
  }

  get description() {
    return this.data.description
  }

  get isSystem() {
    return this.data.isSystem
  }

  async toDto(): Promise<RoleDto> {
    return {
      id: this.data.id,
      companyId: this.data.companyId,
      name: this.data.name,
      description: this.data.description,
      isSystem: this.data.isSystem,
      createdAt: this.data.createdAt,
      updatedAt: this.data.updatedAt
    }
  }
}
