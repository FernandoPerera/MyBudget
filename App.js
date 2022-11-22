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
        { id: uuidv4(), transaction:movementQuantity, date: movementDate, description: movementDescription}
      )
    ])
    let transactionQuantity = transaction
    setTransaction( transactionQuantity += parseFloat(movementQuantity))
  }

  const deleteMovementHandler = () => {
    
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

                <Text style={{fontSize:18}}>MyBudget</Text>

              </View>

              <View style={styles.transactionContainer}>

                {
                movementList == 0
                  ? <Text style={{textAlign:'center', fontSize: 17}}>
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
                              <Text style={{fontSize: 15}}>Mostrar lista</Text>
                          </Pressable>
                          : null}

                </View>
                
                <Modal 
                  animationType='fade'
                  visible={showModal}>
                
                  <MovementList movementList={movementList} changeVisibilityOfModal={changeVisibilityOfModal}/>

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
    backgroundColor: palette.secundaryBackgroundDark,
    alignItems: 'center',
    justifyContent: 'center'
  },
  balanceContainer: {
    flex: 1,
    backgroundColor: palette.primaryBackgroundLight,
    width: '100%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center'
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    borderRadius: 12,
    marginTop: 55,
    backgroundColor: palette.primaryBackgroundDark
  },
  transactionContainer: {
    flex: 2,
    alignItems:'center',
    justifyContent:'center',
    width: 250,
    height: 150,
    borderRadius: 12,
    marginVertical: 70,
    backgroundColor: palette.secundaryBackgroundLight
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
    backgroundColor: palette.primaryBackgroundLight,
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
    backgroundColor: palette.primaryBackgroundDark,
    borderRadius: 12,
    padding: 20,
    marginBottom: 12
  },
});
