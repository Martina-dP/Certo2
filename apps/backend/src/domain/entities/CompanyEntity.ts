import { Company, Role, User, Tax } from '../../client'
import RoleEntity from './RoleEntity'
import UserEntity from './UserEntity'
import TaxEntity from './TaxEntity'
import { UserDto } from './UserEntity'
import { RoleDto } from './RoleEntity'
import { TaxDto } from './TaxEntity'

export type CompanyDto = {
  id: string
  businessName: string
  tradeName?: string | null
  taxId?: string | null
  email?: string | null
  phone?: string | null
  address?: string | null
  city?: string | null
  state?: string | null
  country?: string | null
  postalCode?: string | null
  logoUrl?: string | null
  currency: string
  timezone: string
  isActive: boolean

  users: UserDto[]
  roles: RoleDto[]
  taxes: TaxDto[]

  createdAt: Date
  updatedAt: Date
}

export default class CompanyEntity {
  constructor(
    private data: Company & {
      users?: User[]
      roles?: Role[]
      taxes?: Tax[]
    }
  ) {}

  get id() {
    return this.data.id
  }

  get businessName() {
    return this.data.businessName
  }

  get tradeName() {
    return this.data.tradeName
  }

  get taxId() {
    return this.data.taxId
  }

  get email() {
    return this.data.email
  }

  get phone() {
    return this.data.phone
  }

  get address() {
    return this.data.address
  }

  get city() {
    return this.data.city
  }

  get state() {
    return this.data.state
  }

  get country() {
    return this.data.country
  }

  get postalCode() {
    return this.data.postalCode
  }

  get logoUrl() {
    return this.data.logoUrl
  }

  get currency() {
    return this.data.currency
  }

  get timezone() {
    return this.data.timezone
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

  get users(): UserEntity[] {
    return (this.data.users ?? []).map((user) => new UserEntity(user))
  }

  get roles(): RoleEntity[] {
    return (this.data.roles ?? []).map((role) => new RoleEntity(role))
  }

  get taxes(): TaxEntity[] {
    return (this.data.taxes ?? []).map((tax) => new TaxEntity(tax))
  }

  async toDto(): Promise<CompanyDto> {
    return {
      id: this.data.id,
      businessName: this.data.businessName,
      tradeName: this.data.tradeName,
      taxId: this.data.taxId,
      email: this.data.email,
      phone: this.data.phone,
      address: this.data.address,
      city: this.data.city,
      state: this.data.state,
      country: this.data.country,
      postalCode: this.data.postalCode,
      logoUrl: this.data.logoUrl,
      currency: this.data.currency,
      timezone: this.data.timezone,
      isActive: this.data.isActive,
      users: await Promise.all(this.users.map((u) => u.toDto())),
      roles: await Promise.all(this.roles.map((r) => r.toDto())),
      taxes: await Promise.all(this.taxes.map((t) => t.toDto())),
      createdAt: this.data.createdAt,
      updatedAt: this.data.updatedAt
    }
  }
}
