export class Account {
  id: string
  email: string
  firstName: string
  lastName: string
  token: string
  constructor(json: any) {
    this.id = json.id
    this.email = json.email
    this.firstName = json.firstName
    this.lastName = json.lastName
    this.token = json.token
  }
}
