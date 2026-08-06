import { Repository } from './BaseRepository'
import { Order } from '../../types/models'
import RoleEntity from '../entities/RoleEntity'

export interface RoleRepository extends Repository<RoleEntity> {
  findByName(name: string): Promise<RoleEntity | null>

  findByCompanyId(companyId: string, order?: Order): Promise<RoleEntity[]>

  existsByNameAndCompanyId(name: string, companyId: string): Promise<boolean>

  findSystemRoles(): Promise<RoleEntity[]>

  findCustomRoles(companyId: string, order?: Order): Promise<RoleEntity[]>
}
