import { StyleSheet, Text, TextInput, View, Pressable} from 'react-native'
import { pallete } from '../themes/Colors'
import { useState } from 'react'

const MovementInput = ({ addMovement, hideElementsForKeyboard, show, setShow }) => {

  const [movement, setMovement] = useState( {
    movement: 0,
    date: 0,
    description: ''
  } )

  const changeMovementHandler= (value) => {
    setMovement(
      {movement: value, date: movement.date, description: movement.description} 
    )
  }

  const changeDateHandler= (value) => {
    setMovement(
      {movement: movement.movement, date: value, description: movement.description} 
    )
  }

  const changeDescriptionHandler= (value) => {
    setMovement(
      {movement: movement.movement, date: movement.date, description: value} 
    )
  }

  const addMovementHandler = () => {

    addMovement(movement.movement, movement.date, movement.description)

    setMovement({movement:'', date:'', description:''})

    !show ? hideElementsForKeyboard() : null
  }

  return (
    <>
            <View style={{flexDirection:'row'}}>

              <TextInput style={styles.rowInputs}
              placeholder='Movimiento...'
              onPressIn={() => !show ? null : setShow(!show)}
              onSubmitEditing={hideElementsForKeyboard}
              onChangeText={changeMovementHandler}
              value={movement.movement}/>

              <TextInput style={styles.rowInputs}
              placeholder='Fecha...'
              onPressIn={() => !show ? null : setShow(!show)}
              onSubmitEditing={hideElementsForKeyboard}
              onChangeText={changeDateHandler}
              value={movement.date}/>

            </View>

            <View style={{flexDirection:'row'}}>

              <TextInput style={styles.descriptionInput}
              placeholder='Descripcion...'
              textAlign='left'
              maxLength={40}
              multiline={true}
              onPressIn={() => !show ? null : setShow(!show)}
              onSubmitEditing={hideElementsForKeyboard}
              onChangeText={changeDescriptionHandler}
              value={movement.description}/>

              <Pressable onPress={addMovementHandler}>

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
        height: 50,
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
        height: 80,
        marginLeft: 15,
        marginBottom: 55
      },
      pressableToAdd: {
        marginTop: 12,
        marginLeft: 23,
        backgroundColor:pallete.primaryBackgroundDark,
        borderRadius: 12,
        padding: Platform.OS === "ios" ? 17 : 12
      }
})

export default MovementInput
