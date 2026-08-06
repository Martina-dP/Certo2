import { Company, Tax } from '../../client'

export type TaxDto = {
  id: string
  companyId: string
  name: string
  rate: number
  isDefault: boolean
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export default class TaxEntity {
  constructor(
    private data: Tax & {
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

  get rate() {
    return this.data.rate
  }

  get isDefault() {
    return this.data.isDefault
  }

  get isActive() {
    return this.data.isActive
  }

  get createdAt() {
    return this.data.createdAt
  }

  get updatedAt() {
    return this.data.updatedAt
  }

  get company() {
    return this.data.company
  }

  toDto(): TaxDto {
    return {
      id: this.data.id,
      companyId: this.data.companyId,
      name: this.data.name,
      rate: Number(this.data.rate),
      isDefault: this.data.isDefault,
      isActive: this.data.isActive,
      createdAt: this.data.createdAt,
      updatedAt: this.data.updatedAt
    }
  }
}
