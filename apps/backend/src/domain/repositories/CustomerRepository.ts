import { Repository } from './BaseRepository'
import { Order } from '../../types/models'
import CustomerEntity from '../entities/CustomerEntity'

export interface CustomerRepository extends Repository<CustomerEntity> {
  findByCompanyId(companyId: string, order?: Order): Promise<CustomerEntity[]>

  findByEmail(email: string): Promise<CustomerEntity | null>

  existsByEmail(email: string): Promise<boolean>

  findByDocument(document: string): Promise<CustomerEntity | null>

  existsByDocument(document: string): Promise<boolean>

  findByActive(active: boolean, order?: Order): Promise<CustomerEntity[]>

  search(
    companyId: string,
    query: string,
    order?: Order
  ): Promise<CustomerEntity[]>

  findCustomersToNotifyByEmail(
    companyId: string,
    order?: Order
  ): Promise<CustomerEntity[]>

  findCustomersToNotifyByWhatsapp(
    companyId: string,
    order?: Order
  ): Promise<CustomerEntity[]>
}
