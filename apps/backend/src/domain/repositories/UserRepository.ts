import UserEntity from '../entities/UserEntity'
import { Repository } from './BaseRepository'
import { Order } from '../../types/models'

export interface UserRepository extends Repository<UserEntity> {
  findByEmail(email: string): Promise<UserEntity | null>

  existsByEmail(email: string): Promise<boolean>

  findByCompanyId(companyId: string, order?: Order): Promise<UserEntity[]>

  findByRoleId(roleId: string, order?: Order): Promise<UserEntity[]>

  findByActive(active: boolean): Promise<UserEntity[]>

  findByPinCode(pinCode: string): Promise<UserEntity | null>
}
