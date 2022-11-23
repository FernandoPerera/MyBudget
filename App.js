import { useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Keyboard,
         Platform, Pressable, Image, Modal} from 'react-native'

import { v4 as uuidv4 } from 'uuid';
        
import MovementInput from './components/input/MovementInput'
import MovementList from './components/list/MovementList';

import { palette } from './themes/Colors'

export default function App() {

  const [show, setShow] = useState(true)
  const [showModal, setShowModal] = useState(false)

  const [transaction, setTransaction] = useState(0)

  const [movementList, setMovementList] = useState([])

  const addMovementHandler = (movementQuantity, movementDate, movementDescription) => {
    setMovementList( currentItems => [
      ...currentItems,(
        { id: uuidv4(), transactionQuantity:movementQuantity, date: movementDate, description: movementDescription}
      )
    ])
    let transactionQuantity = transaction
    setTransaction( transactionQuantity += parseFloat(movementQuantity))
  }

  const deleteMovementHandler = (id) => {
    setMovementList( () => movementList.filter( (movement) => movement.id !== id) )
  }

  const modifyMovementHandler = (id, newMovement, newDate, newDescription) => {

    deleteMovementHandler(id)
    
    setMovementList( currentItems => [
      ...currentItems,(
        { id: id, transactionQuantity: newMovement, date: newDate, description: newDescription}
      )
    ])
    let transactionQuantity = 0

    newMovement < 0
      ?  transactionQuantity = transaction + parseFloat(newMovement)
      : transactionQuantity = transaction - parseFloat(newMovement)

    setTransaction( parseFloat(transactionQuantity) )
  }

  const hideElementsForKeyboard = () => {
      setShow(!show)
      Keyboard.dismiss()
  }

  const changeVisibilityOfModal = () => {
    setShowModal(!showModal)
  }

  return (
    <View style={styles.container}>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex: 1, width: '100%'}}
        keyboardVerticalOffset={Platform.OS === "ios" ? -60 : -160}>
        
        <View style={styles.balanceContainer}>

          <View style={styles.title}>

            <Text style={{fontSize:palette.titleFontSize}}>MyBudget</Text>

          </View>

          <View style={styles.transactionContainer}>

            {
            movementList == 0
              ? <Text style={{textAlign:'center', fontSize: Platform.OS === 'ios' ? palette.secundaryFontSize : 17}}>
                  No se han realizado transacciones
                </Text>
              : transaction >= 0 
                ? 
                  <View style={{flexDirection: 'row'}}>
                    <Image style={styles.imageStyle} source={require('./assets/bills.png')}/>
                    <Text style={{flex: 1, textAlign:'center', fontSize: 30, marginTop: 13, color: palette.primaryBackgroundDark}}>
                      {transaction} €
                    </Text>
                  </View>
                : 
                  <View style={{flexDirection: 'row'}}>
                    <Image style={styles.imageStyle} source={require('./assets/money.png')}/>

                    <Text style={{flex: 1, textAlign:'center', fontSize: 30, marginTop: 13, color: '#D12222'}}>
                      {transaction} €
                    </Text>
                  </View>
            }

          </View>

        </View>

        <View style={styles.inputContainer}>

          <View style={styles.datesContainer}>

            <View style={styles.listbuttom}>

              {show ? <Pressable style={styles.pressableToList} onPress={changeVisibilityOfModal}>
                          <Text style={{fontSize: palette.primaryFontSize}}>Mostrar lista</Text>
                      </Pressable>
                      : null}

            </View>
            
            <Modal 
              animationType='fade'
              visible={showModal}>
            
              <MovementList movementList={movementList} changeVisibilityOfModal={changeVisibilityOfModal}
                            deleteMovement={deleteMovementHandler} modifyMovement={modifyMovementHandler}/>

            </Modal>

            <MovementInput hideElementsForKeyboard={hideElementsForKeyboard}
                show={show} setShow={setShow} addMovement={addMovementHandler}/>

          </View>

        </View>
      </KeyboardAvoidingView>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.secundaryBackgroundDark
  },
  balanceContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    borderBottomLeftRadius: palette.secundaryBorderRadius,
    borderBottomRightRadius: palette.secundaryBorderRadius,
    backgroundColor: palette.primaryBackgroundLight
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    marginTop: 55,
    borderRadius: palette.primaryBorderRadius,
    backgroundColor: palette.primaryBackgroundDark,
    borderColor: palette.containersBorderColor,
    borderWidth: 3
  },
  transactionContainer: {
    flex: 2,
    alignItems:'center',
    justifyContent:'center',
    width: 250,
    height: 150,
    marginVertical: 70,
    borderRadius: palette.primaryBorderRadius,
    backgroundColor: palette.secundaryBackgroundLight,
    borderColor: palette.containersBorderColor,
    borderWidth: palette.borderWidth
  },  
  imageStyle: {
    flex: 0.5,
    marginLeft: 40
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  datesContainer: {
    flex: 2,
    width: '75%',
    marginVertical: 50,
    borderRadius: palette.primaryBorderRadius,
    backgroundColor: palette.primaryBackgroundLight,
    borderColor: palette.containersBorderColor,
    borderWidth: palette.borderWidth
  },
  listbuttom: {
    flex: 1, 
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  pressableToList: {
    padding: 20,
    marginBottom: 12,
    borderRadius: palette.primaryBorderRadius,
    backgroundColor: palette.primaryBackgroundDark,
    borderColor: palette.containersBorderColor,
    borderWidth: palette.borderWidth
  },
});
