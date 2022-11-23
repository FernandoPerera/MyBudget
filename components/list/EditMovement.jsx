import { Pressable, View, StyleSheet, TextInput, Text } from "react-native"
import { useState } from "react"

import { palette } from "../../themes/Colors"

const EditMovement = ({ id, modifyMovement, setShow }) => {

    const [showPicker, setShowPicker] = useState(false) 

    const [movement, setMovement] = useState( {
        movement: 0,
        date: new Date(Date.now()),
        description: ''
    })

    const changeMovementHandler= (value) => {
        setMovement(
          {movement: value, date: movement.date, description: movement.description} 
        )
    }

    const changeDescriptionHandler= (value) => {
    setMovement(
        {movement: movement.movement, date: movement.date, description: value} 
    )
    }

    const editMovementHandler = () => {

        if ( movement.movement == '' || movement.description == '' ) {
          alert('Debe rellenar todas las casillas para añadir un movimiento')
        }else if ( isNaN(movement.movement) ) {
          alert('El movimiento debe ser un número positivo o negativo')
        } else {
          modifyMovement(id, movement.movement, new Date(Date.now()).toLocaleDateString(), movement.description)
          setShow(false)
        }
        setMovement({ movement: '', date: new Date(), description: '' })
        
      }

  return (
    <View style={styles.container}>

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

            <TextInput style={styles.newMovementContainer}
                placeholder='Nuevo movimiento...'
                placeholderTextColor={palette.secundaryBackgroundDark}
                keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'numeric'}
                onChangeText={changeMovementHandler}
                value={movement.movement}/>

        </View>

        <View style={{borderColor: 'black', borderTopWidth: 1.5, width: '85%'}}>
            <Text> </Text>
        </View>

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

            <TextInput style={styles.newDescriptionContainer}
                placeholder='Descripcion...'
                textAlign='left'
                maxLength={40}
                multiline={true}
                onChangeText={changeDescriptionHandler}
                value={movement.description}/>

        </View>

        <View style={styles.optionsContainer}>

            <Pressable style={styles.cancelOption} onPress={() => setShow(false)}>

                <Text style={{fontSize: palette.primaryFontSize}}>Cancelar</Text>

            </Pressable>

            <Pressable style={styles.modifyOption} onPress={editMovementHandler}>

                <Text style={{fontSize: palette.primaryFontSize}}>Modificar</Text>

            </Pressable>

        </View>

    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },  
    newMovementContainer: {
        padding: 10,
        height: 60,
        width: 180,
        borderRadius: palette.primaryBorderRadius,
        backgroundColor: palette.secundaryBackgroundLight,
        borderColor: palette.containersBorderColor,
        borderWidth: palette.borderWidth
    },
    newDescriptionContainer: {
        padding: 10,
        width: 180,
        height: 90,
        marginLeft: 15,
        borderRadius: palette.primaryBorderRadius,
        backgroundColor: palette.secundaryBackgroundLight,
        borderColor: palette.containersBorderColor,
        borderWidth: palette.borderWidth
    },
    optionsContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    cancelOption: {
        marginHorizontal: '5%',
        padding: 18,
        borderRadius: palette.primaryBorderRadius,
        backgroundColor:palette.secundaryBackgroundDark,
        borderColor: palette.containersBorderColor,
        borderWidth: palette.borderWidth
    },
    modifyOption: {
        marginHorizontal: '5%',
        padding: 18,
        borderRadius: palette.primaryBorderRadius,
        backgroundColor:palette.primaryBackgroundLight,
        borderColor: palette.containersBorderColor,
        borderWidth: palette.borderWidth
    },
})

export default EditMovement