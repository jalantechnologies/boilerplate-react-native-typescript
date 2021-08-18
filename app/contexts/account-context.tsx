import React, {useState, ReactNode} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

import {Account} from '../types'

export interface AccountContextInterface {
  account?: Account
  storeAccount({
    accountDetails
  }: {
    accountDetails: Account
  }): void
  isUserLoggedIn(): boolean,
  logout(): void
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
    token: ''
  })
  const {children} = props

  /**
   * @description Function to store account information to AsyncStorage.
   * @param response Response contains account information to be stored to AsyncStorage.
   * @returns {void}
   */

  const storeAccount = ({
    accountDetails,
  }: {
    accountDetails: Account
  }): void => {
    AsyncStorage.setItem('account', JSON.stringify(accountDetails))
    setAccount({
      firstName: accountDetails.firstName,
      lastName: accountDetails.lastName,
      email: accountDetails.email,
      token: accountDetails.token
    })
  }

  const isUserLoggedIn = (): boolean => {
    const token = account.token
    return !!token
  }

  const logout = (): void => {
    AsyncStorage.removeItem('account')
    setAccount({
      firstName: '',
      lastName: '',
      email: '',
      token: ''
    })
  }

  return (
    <AccountContext.Provider
      value={{
        account,
        storeAccount,
        isUserLoggedIn,
        logout
      }}>
      {children}
    </AccountContext.Provider>
  )
}
