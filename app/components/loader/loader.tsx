import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { LoaderProps } from './loader.props';
import { styles } from './loader.style';

export const Loader = ({ loading }: LoaderProps) => {
  if (!loading) {
    return <View />;
  }

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator color={'black'} />
        <Text style={styles.text}>Loading...</Text>
      </View>
    </View>
  );
}
