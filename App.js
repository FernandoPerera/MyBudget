import { StyleSheet, Text, View } from 'react-native'

import { pallete } from './themes/Colors'

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.balanceContainer}>

        <Text>Balance Container</Text>

      </View>

      <View style={styles.inputContainer}>

        <Text>Input Container</Text>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pallete.secundaryBackgroundDark,
    alignItems: 'center',
    justifyContent: 'center'
  },
  balanceContainer: {
    flex: 1,
    backgroundColor: pallete.primaryBackgroundLight,
    width: '100%',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }

});
