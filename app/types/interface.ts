export interface Account {
  email: string
  firstName: string
  id?: string
  lastName: string
  password?: string
}

export interface LooseObject {
  [key: string]: any
}
