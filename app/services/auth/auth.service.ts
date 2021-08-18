import {Account} from '@models'
import {ServiceResponse} from '../api'

export interface AuthService {
  logout: () => void
  login: (payload: any) => Promise<ServiceResponse<Account>>
  register: (payload: any) => Promise<ServiceResponse<Account>>
}
