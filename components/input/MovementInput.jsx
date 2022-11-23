import { StyleSheet, Text, TextInput, View, Pressable, Platform} from 'react-native'
import { palette } from '../../themes/Colors'
import { useState } from 'react'

import DateTimePickerModal from "react-native-modal-datetime-picker"

const MovementInput = ({ addMovement, hideElementsForKeyboard, show, setShow }) => {

  const [showPicker, setShowPicker] = useState(false) 

  const [movement, setMovement] = useState( {
    movement: 0,
    date: new Date(Date.now()),
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
    hideDatePicker()
  }

  const changeDescriptionHandler= (value) => {
    setMovement(
      {movement: movement.movement, date: movement.date, description: value} 
    )
  }

  const addMovementHandler = () => {

    if ( movement.movement == '' || movement.date == '' || movement.description == '' ) {
      alert('Debe rellenar todas las casillas para añadir un movimiento')
    }else if ( isNaN(movement.movement) ) {
      alert('El movimiento debe ser un número positivo o negativo')
    } else {
      addMovement(movement.movement, movement.date.toLocaleDateString(), movement.description)
    }
    hideElementsForKeyboard()
    setMovement({ movement: '', date: new Date(), description: '' })
    
  }

  const showDatePicker = () => {
    setShowPicker(true)
  }

  const hideDatePicker = () => {
    setShowPicker(false)
  }

  return (
    <>
      <View style={{flexDirection:'row'}}>

        <TextInput style={styles.rowInputs}
          placeholder='Movimiento...'
          keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'numeric'}
          onPressIn={() => !show ? null : setShow(!show)}
          onSubmitEditing={hideElementsForKeyboard}
          onChangeText={changeMovementHandler}
          value={movement.movement}/>

        <Pressable style={styles.rowInputs} onPress={showDatePicker}>

          <Text style={{marginTop: 6}}>Selec. Fecha</Text>
          
        </Pressable>

        <DateTimePickerModal
            isVisible={showPicker}
            mode='date'
            date={movement.date}
            onConfirm={changeDateHandler}
            onCancel={hideDatePicker}/>

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

              <Text style={{fontSize: palette.primaryFontSize}}>Añadir</Text>

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
        marginVertical: 15,
        borderRadius: palette.primaryBorderRadius,
        backgroundColor: palette.secundaryBackgroundLight,
        borderColor: palette.containersBorderColor,
        borderWidth: palette.borderWidth
      },
      descriptionInput: { 
        padding: 10,
        width: 150,
        height: Platform.OS === 'ios' ? 75 : 60,
        marginLeft: 15,
        marginBottom: 40,
        borderRadius: palette.primaryBorderRadius,
        backgroundColor: palette.secundaryBackgroundLight,
        borderColor: palette.containersBorderColor,
        borderWidth: palette.borderWidth
      },
      pressableToAdd: {
        marginTop: 9,
        marginLeft: 23,
        padding: Platform.OS === "ios" ? 18.5 : 15,
        borderRadius: palette.primaryBorderRadius,
        backgroundColor:palette.primaryBackgroundDark,
        borderColor: palette.containersBorderColor,
        borderWidth: palette.borderWidth
      }
})

export default MovementInput
