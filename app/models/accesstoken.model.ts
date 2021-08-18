export class AccessToken {
  id: string
  token: string
  constructor(accesstoken: any) {
    this.id = accesstoken.account.id
    this.token = accesstoken.token
  }
}
