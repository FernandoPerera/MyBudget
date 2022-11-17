import { StyleSheet, Text, TextInput, View, Pressable} from 'react-native'
import { pallete } from '../themes/Colors'

const MovementInput = ({ pallete, hideElementsForKeyboard, show, setShow }) => {

  return (
    
    <>

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

    </>

  )
}

const styles = StyleSheet.create({
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
      pressableToAdd: {
        marginTop: 10,
        marginLeft: 23,
        backgroundColor:pallete.primaryBackgroundDark,
        borderRadius: 12,
        padding: 15
      }
})

export default MovementInput
