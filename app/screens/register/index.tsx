import React, { useContext } from 'react'

import {styles} from './style'
import {FC} from 'react'
import {StackScreenProps} from '@react-navigation/stack'
import {AuthStackParamList} from '@navigators'
import {View} from 'react-native'
import {Button, Header, TextField} from '@components'
import {Error} from '@components'
import {Loader} from '@components'
import {Formik} from 'formik'
import {validateRegisterSchema} from '@utils'
import DIContext from '../../contexts/dependencies.context'
import { AccountContext } from '../../contexts'

export const RegisterScreen: FC<
  StackScreenProps<AuthStackParamList, 'register'>
> = ({navigation}) => {
  const [loading, setLoading] = React.useState(false)

  const { storeAccount } = useContext(AccountContext)

  const dependencies = React.useContext(DIContext);

  const { authService } = dependencies;

  return (
    <View style={styles.container}>
      <Button
        style={styles.closeIcon}
        text={'Close'}
        onPress={() => {
          navigation.pop()
        }}
      />
      <Header headerTx={'registerScreen.title'} style={styles.title} />
      <Formik
        initialValues={{email: '', password: '', firstName: '', lastName: ''}}
        validationSchema={validateRegisterSchema}
        onSubmit={async (
          values: {email: string; password: string; firstName: string; lastName: string},
          actions: {resetForm: () => void},
        ) => {
          actions.resetForm()
          try {
            setLoading(true)
            const res = await authService.register({email:values.email, password: values.password, firstName: values.firstName, lastName: values.lastName});
            if(res.data){
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
              placeholder={'First Name'}
              value={values.firstName}
              onChangeText={handleChange('firstName')}
            />
            <TextField
              style={styles.input}
              placeholder={'Last Name'}
              value={values.lastName}
              onChangeText={handleChange('lastName')}
            />
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
              tx={'registerScreen.registerButton'}
              style={styles.loginButton}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
      <Loader loading={loading} />
    </View>
  )
}
