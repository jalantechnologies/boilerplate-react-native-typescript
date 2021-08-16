import React from 'react';

import { AuthContext } from '../contexts/AuthContext';
import { styles } from './style';
import { FC } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '../../navigators';
import { View } from 'react-native';
import { Button, Header, TextField } from '../../components';
import { Error } from '../../components/error/error';
import { Loader } from '../../components/loader/loader';
import * as yup from 'yup';
import { Formik } from 'formik';

const reviewRegisterSchema = yup.object({
  email: yup.string()
    .required()
    .email()
    .min(4),
  password: yup.string()
    .required()
    .min(8),
});

export const RegisterScreen: FC<StackScreenProps<AuthStackParamList, "Register">> = ({ navigation }) => {
  const { register } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(false);

  return (
    <View style={styles.container}>
      <Button
        style={styles.closeIcon}
        text={'Close'}
        onPress={() => {
          navigation.pop();
        }}
      />
      <Header style={styles.title}/>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={reviewRegisterSchema}
        onSubmit={async (values: { email: string, password: string }, actions: { resetForm: () => void; }) => {
          actions.resetForm();
          try {
            setLoading(true);
            await register(email, password);
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
      <Error error={errors} />
      <Button
        text={'Register'}
        style={styles.loginButton}
        onPress={handleSubmit}
      />
      </View>)
      }
      </Formik>
      <Loader loading={loading} />
    </View>
  );
}
