import { Repository } from './BaseRepository'
import { Order } from '../../types/models'
import TaxEntity from '../entities/TaxEntity'

export interface TaxRepository extends Repository<TaxEntity> {
  findByName(companyId: string, name: string): Promise<TaxEntity | null>

  existsByName(companyId: string, name: string): Promise<boolean>

  findByCompanyId(companyId: string, order?: Order): Promise<TaxEntity[]>

  findDefaultByCompanyId(companyId: string): Promise<TaxEntity | null>

  findActiveByCompanyId(companyId: string, order?: Order): Promise<TaxEntity[]>

  findInactiveByCompanyId(
    companyId: string,
    order?: Order
  ): Promise<TaxEntity[]>
}
