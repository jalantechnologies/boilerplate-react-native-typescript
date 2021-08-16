import React, { FC } from 'react';

import { AuthContext } from '../contexts/AuthContext';
import { styles } from './login.style'
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '../../navigators';
import { View } from 'react-native';
import { Button, Header, Text, TextField } from '../../components';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Error } from '../../components/error/error';
import { Loader } from '../../components/loader/loader';

const reviewLoginSchema = yup.object({
  email: yup.string()
    .required()
    .email()
    .min(4),
  password: yup.string()
    .required()
    .min(8),
});

export const LoginScreen: FC<StackScreenProps<AuthStackParamList, "Login">> = ({ navigation }) => {
  const { login } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(false);

  return (
    <View style={styles.container}>
      <Header
        headerTx="demoListScreen.title"
        style={styles.title} />

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={reviewLoginSchema}
        onSubmit={async (values: { email: string, password: string }, actions: { resetForm: () => void; }) => {
          actions.resetForm();
          try {
            setLoading(true);
            await login(email, password);
          } catch (e) {
            setError(e.message);
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
          <Error error={errors} />
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
          navigation.navigate('Register');
        }}
      />

      <Loader loading={loading} />
    </View>
  );
}
