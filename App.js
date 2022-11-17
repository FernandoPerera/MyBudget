import { useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Keyboard,
         Platform, Pressable} from 'react-native'
        
import MovementInput from './components/MovementInput'

import { pallete } from './themes/Colors'

export default function App() {

  const [show, setShow] = useState(true)

  const hideElementsForKeyboard = () => {
    setShow(!show)
    Keyboard.dismiss()
  }

  return (
    <View style={styles.container}>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{flex: 1, width: '100%'}}
          keyboardVerticalOffset={Platform.OS === "ios" ? -20 : -80}>
          
            <View style={styles.balanceContainer}>

              <Text>Balance Container</Text>

            </View>

            <View style={styles.inputContainer}>

              <View style={styles.datesContainer}>

                <View style={styles.listbuttom}>

                  {show ? <Pressable style={styles.pressableToList}>
                              <Text>Mostrar lista</Text>
                          </Pressable>
                          : null}

                </View>

                <MovementInput hideElementsForKeyboard={hideElementsForKeyboard}
                              show={show} setShow={setShow}/>

              </View>

            </View>
          </KeyboardAvoidingView>

      
    </View>
  )
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
  },
  datesContainer: {
    flex: 2,
    backgroundColor: pallete.primaryBackgroundLight,
    width: '75%',
    borderRadius: 15,
    marginVertical: 50,
  },
  listbuttom: {
    flex: 1, 
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  pressableToList: {
    backgroundColor: pallete.primaryBackgroundDark,
    borderRadius: 12,
    padding: 20,
  },
});
