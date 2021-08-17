import React, { FC } from 'react';

import { styles } from './style'
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '../../navigators';
import { View } from 'react-native';
import { Button, Header, Text, TextField } from '../../components';
import { Formik } from 'formik';

import { Error } from '../../components/error/error';
import { Loader } from '../../components/loader/loader';
import { validateLoginSchema } from '../../utils/validator';

export const LoginScreen: FC<StackScreenProps<AuthStackParamList, "login">> = ({ navigation }) => {
  const [loading, setLoading] = React.useState(false);

  return (
    <View style={styles.container}>
      <Header
        headerTx="demoListScreen.title"
        style={styles.title} />

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validateLoginSchema}
        onSubmit={async (values: { email: string, password: string }, actions: { resetForm: () => void; }) => {
          actions.resetForm();
          try {
            setLoading(true);
            //   await login(values.email, values.password);
          } catch (e) {
            setLoading(false);
          }
        }}>

        {({
          handleChange,
          handleSubmit,
          values,
          errors
        }) => (
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
              tx="demoScreen.demoList"
              onPress={handleSubmit}
            />
          </View>)}
      </Formik>

      <Button
        text={'Have u an account? Create one'}
        onPress={() => {
          navigation.navigate('register');
        }}
      />
      <Loader loading={loading} />
    </View>
  );
}
