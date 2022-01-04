import React, {FC, useContext} from 'react'

import {styles} from './style'
import {StackScreenProps} from '@react-navigation/stack'
import {AuthStackParamList} from '@navigators'
import {View} from 'react-native'
import {Button, Header, TextField} from '@components'
import {Formik} from 'formik'

import {Error} from '@components'
import {Loader} from '@components'
import {validateLoginSchema} from '../../utils/validator'
import DIContext from '../../contexts/dependencies.context'
import {AccountContext} from '../../contexts'

export const LoginScreen: FC<StackScreenProps<AuthStackParamList, 'login'>> = ({
  navigation,
}) => {
  const [loading, setLoading] = React.useState(false)

  const {storeAccount} = useContext(AccountContext)
  const dependencies = React.useContext(DIContext)
  const {authService} = dependencies

  return (
    <View style={styles.container}>
      <Header headerTx="loginScreen.title" style={styles.title} />

      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validateLoginSchema}
        onSubmit={async (
          values: {email: string; password: string},
          actions: {resetForm: () => void},
        ) => {
          actions.resetForm()
          try {
            setLoading(true)
            const res = await authService.login(values)
            if (res.data) {
              storeAccount({accountDetails: res.data})
            }
            setLoading(false)
          } catch (e) {
            setLoading(false)
          }
        }}>
        {({handleChange, handleSubmit, values, errors}) => (
          <View>
            <TextField
              style={styles.input}
              placeholder={'Email'}
              keyboardType={'email-address'}
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <TextField
              style={styles.input}
              placeholder={'Password'}
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Error error={errors.email} />
            <Error error={errors.password} />
            <Button
              style={styles.loginButton}
              tx="loginScreen.loginButton"
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>

      <Button
        tx={'loginScreen.createAccountText'}
        onPress={() => {
          navigation.navigate('register')
        }}
      />
      <Loader loading={loading} />
    </View>
  )
}
