import { Customer, Company } from '../../client'

export type CustomerDto = {
  id: string
  companyId: string
  firstName: string
  lastName?: string | null
  document?: string | null
  email?: string | null
  phone?: string | null
  address?: string | null
  city?: string | null
  state?: string | null
  country?: string | null
  postalCode?: string | null
  receiveEmail: boolean
  receiveWhatsapp: boolean
  notes?: string | null
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export default class CustomerEntity {
  constructor(
    private data: Customer & {
      company?: Company
    }
  ) {}

  get id() {
    return this.data.id
  }

  async toDto(): Promise<CustomerDto> {
    return {
      id: this.data.id,
      companyId: this.data.companyId,
      firstName: this.data.firstName,
      lastName: this.data.lastName,
      document: this.data.document,
      email: this.data.email,
      phone: this.data.phone,
      address: this.data.address,
      city: this.data.city,
      state: this.data.state,
      country: this.data.country,
      postalCode: this.data.postalCode,
      receiveEmail: this.data.receiveEmail,
      receiveWhatsapp: this.data.receiveWhatsapp,
      notes: this.data.notes,
      isActive: this.data.isActive,
      createdAt: this.data.createdAt,
      updatedAt: this.data.updatedAt
    }
  }
}
