import { Account} from '@models'
import {APIServiceImpl, ServiceResponse} from '../api'

import {AuthService} from './auth.service'

export default class AuthServiceImpl
  extends APIServiceImpl
  implements AuthService {
  static readonly ACCOUNT = '/account'
  static readonly ACCESS_TOKEN = '/account/access_token'

  async login(payload: any): Promise<ServiceResponse<Account>> {
    try {
      const response = await this.post(AuthServiceImpl.ACCESS_TOKEN, payload)
      const res = response.data.account;
      res['token'] = response.data.token;
      const account = new Account(res)
      return new ServiceResponse<Account>(account)
    } catch (e) {
      return e.response
        ? new ServiceResponse<Account>(undefined, e.response.status)
        : new ServiceResponse<Account>(undefined, e)
    }
  }

  async register(payload: any): Promise<ServiceResponse<Account>> {
    try {
      const response = await this.post(AuthServiceImpl.ACCOUNT, payload)
      const res = response.data.account;
      res['token'] = response.data.token;
      const account = new Account(res)
      return new ServiceResponse<Account>(account)
    } catch (e) {
      return e.response
        ? new ServiceResponse<Account>(undefined, e.response.status)
        : new ServiceResponse<Account>(undefined, e)
    }
  }
  
  logout(): void {
    // localStorage.removeItem('login');
  }
}
