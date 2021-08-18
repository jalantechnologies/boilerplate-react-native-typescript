import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      backgroundColor: 'white',
      flexDirection: 'row',
      padding: 20,
      borderRadius: 8,
    },
    text: {
      marginLeft: 16,
      fontSize: 18,
      fontWeight: '500',
    }
  });
