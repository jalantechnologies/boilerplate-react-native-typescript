import React from 'react'

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

export const RegisterScreen: FC<
  StackScreenProps<AuthStackParamList, 'register'>
> = ({navigation}) => {
  const [loading, setLoading] = React.useState(false)

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
        initialValues={{email: '', password: ''}}
        validationSchema={validateRegisterSchema}
        onSubmit={async (
          values: {email: string; password: string},
          actions: {resetForm: () => void},
        ) => {
          actions.resetForm()
          try {
            setLoading(true)
            //  await register(values.email, values.password);
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
