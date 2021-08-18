import {AccessToken} from '@models'
import {APIServiceImpl, ServiceResponse} from '../api'

import {AuthService} from './auth.service'

export default class AuthServiceImpl
  extends APIServiceImpl
  implements AuthService {
  static readonly RESOURCE = '/account/access_token'

  async login(payload: any): Promise<ServiceResponse<AccessToken>> {
    try {
      const response = await this.post(AuthServiceImpl.RESOURCE, payload)
      const accessToken = new AccessToken(response.data)
      return new ServiceResponse<AccessToken>(accessToken)
    } catch (e) {
      return e.response
        ? new ServiceResponse<AccessToken>(undefined, e.response.status)
        : new ServiceResponse<AccessToken>(undefined, e)
    }
  }

  logout(): void {
    // localStorage.removeItem('login');
  }

  isLoggedIn(): boolean {
    // will return true if login key has value 'true'
    return true //localStorage.getItem('login') === 'true';
  }
}
