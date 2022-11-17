import { useState } from 'react'
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView,
        TouchableWithoutFeedback, Keyboard, Platform, Pressable} from 'react-native'

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
                      : null
                }

              </View>

                <View style={{flexDirection:'row'}}>

                  <TextInput style={styles.rowInputs}
                  placeholder='Movimiento...'
                  onPressIn={() => !show ? null : setShow(!show)}
                  onSubmitEditing={hideElementsForKeyboard}/>

                  <TextInput style={styles.rowInputs}
                  placeholder='Fecha...'
                  onPressIn={() => !show ? null : setShow(!show)}
                  onSubmitEditing={hideElementsForKeyboard}/>

                </View>

                <View style={{flexDirection:'row'}}>

                <TextInput style={styles.descriptionInput}
                  placeholder='Descripcion...'
                  textAlign='left'
                  maxLength={40}
                  multiline={true}
                  onPressIn={() => !show ? null : setShow(!show)}
                  onSubmitEditing={hideElementsForKeyboard}/>

                <Pressable onPress={ !show ? hideElementsForKeyboard : null}>

                  <View style={styles.pressableToAdd}>

                    <Text>Añadir</Text>

                  </View>

                </Pressable>

                </View>

              </View>

            </View>
          </KeyboardAvoidingView>

      
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
  },
  datesContainer: {
    flex: 2,
    backgroundColor: pallete.primaryBackgroundLight,
    width: '75%',
    borderRadius: 15,
    marginVertical: 50,
  },
  rowInputs: {
    flex: 1,
    padding: 10,
    marginHorizontal: 15,
    borderRadius:12,
    marginVertical: 20,
    backgroundColor: pallete.secundaryBackgroundLight,
  },
  descriptionInput: { 
    backgroundColor: pallete.secundaryBackgroundLight,
    borderRadius: 12,
    padding: 10,
    width: 150,
    height: 70,
    marginLeft: 15,
    marginBottom: 65
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
  pressableToAdd: {
    marginTop: 10,
    marginLeft: 23,
    backgroundColor:pallete.primaryBackgroundDark,
    borderRadius: 12,
    padding: 15
  }

});
