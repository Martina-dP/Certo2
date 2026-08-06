import { Repository } from './BaseRepository'
import { Order } from '../../types/models'
import CompanyEntity from '../entities/CompanyEntity'

export interface CompanyRepository extends Repository<CompanyEntity> {
  findByBusinessName(businessName: string): Promise<CompanyEntity | null>

  existsByBusinessName(businessName: string): Promise<boolean>

  findByTaxId(taxId: string): Promise<CompanyEntity | null>

  existsByTaxId(taxId: string): Promise<boolean>

  findByEmail(email: string): Promise<CompanyEntity | null>

  existsByEmail(email: string): Promise<boolean>

  findByActive(active: boolean, order?: Order): Promise<CompanyEntity[]>

  findByCountry(country: string, order?: Order): Promise<CompanyEntity[]>

  findByCurrency(currency: string, order?: Order): Promise<CompanyEntity[]>
}
