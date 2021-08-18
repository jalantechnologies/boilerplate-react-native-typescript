import React, {useState, ReactNode} from 'react'

import AsyncStorage from '@react-native-community/async-storage'

import {Account} from '../types'

export interface AccountContextInterface {
  account?: Account
  storeAccount({
    accountDetails,
    token,
  }: {
    accountDetails: Account
    token: string
  }): void
  isUserLoggedIn(): Promise<boolean>
}

interface ProviderProps {
  children: ReactNode
}

export const AccountContext = React.createContext<AccountContextInterface>(
  undefined,
)

export const AccountContextProvider = (props: ProviderProps): JSX.Element => {
  React.useEffect(() => {
    AsyncStorage.getItem('account').then(value => {
      if (value) {
        setAccount(JSON.parse(value))
      }
    })
  }, [])

  const [account, setAccount] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const {children} = props

  /**
   * @description Function to store account information to AsyncStorage.
   * @param response Response contains account information to be stored to AsyncStorage.
   * @returns {void}
   */

  const storeAccount = ({
    accountDetails,
    token,
  }: {
    accountDetails: Account
    token: string
  }): void => {
    AsyncStorage.setItem('token', token)
    AsyncStorage.setItem('account', JSON.stringify(accountDetails))
    setAccount({
      firstName: accountDetails.firstName,
      lastName: accountDetails.lastName,
      email: accountDetails.email,
      password: '',
    })
  }

  const isUserLoggedIn = async (): Promise<boolean> => {
    const token = await AsyncStorage.getItem('token')
    return !!token
  }

  return (
    <AccountContext.Provider
      value={{
        account,
        storeAccount,
        isUserLoggedIn,
      }}>
      {children}
    </AccountContext.Provider>
  )
}
