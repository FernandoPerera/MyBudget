import { useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Keyboard,
         Platform, Pressable, Image, Modal} from 'react-native'

import { v4 as uuidv4 } from 'uuid';
        
import MovementInput from './components/input/MovementInput'

import { pallete } from './themes/Colors'

export default function App() {

  const [show, setShow] = useState(true)
  const [showModal, setShowModal] = useState(false)

  const [transaction, setTransaction] = useState(0)

  const [movementList, setMovementList] = useState([])

  // EDITAR LA VISUALIZACIÓN EN ANDROID

  const addMovementHandler = (movementQuantity, movementDate, movementDescription) => {
    setMovementList( currentItems => [
      ...currentItems,(
        { id: uuidv4(), transaction:movementQuantity, date: movementDate, description: movementDescription}
      )
    ])
    let transactionQuantity = transaction
    setTransaction( transactionQuantity += parseFloat(movementQuantity))
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
                        <Text style={{flex: 1, textAlign:'center', fontSize: 30, marginTop: 13, color: pallete.primaryBackgroundDark}}>
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
                
                  <View style={styles.modalContainer}>

                    <View style={styles.modalHeader}>

                      <Pressable onPress={changeVisibilityOfModal}>
                        <Image style={styles.exitModal} source={require('./assets/backward.png')}/>
                      </Pressable>

                      <View style={styles.headerName}>
                          <Text style={{fontSize: 16}}>Lista de Movimientos</Text>
                      </View>

                    </View>

                    <View style={styles.transactionList}>

                      <Text>Transacciones</Text>

                    </View>

                  </View>


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
    backgroundColor: pallete.secundaryBackgroundDark,
    alignItems: 'center',
    justifyContent: 'center'
  },
  balanceContainer: {
    flex: 1,
    backgroundColor: pallete.primaryBackgroundLight,
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
    backgroundColor: pallete.primaryBackgroundDark
  },
  transactionContainer: {
    flex: 2,
    alignItems:'center',
    justifyContent:'center',
    width: 250,
    height: 150,
    borderRadius: 12,
    marginVertical: 70,
    backgroundColor: pallete.secundaryBackgroundLight
  },  
  imageStyle: {
    flex: 0.5,
    marginLeft: 40
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: pallete.primaryBackgroundDark
  },  
  modalHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerName: {
    padding: 20,
    borderRadius: 12,
    marginLeft: 35,
    marginRight: 75,
    backgroundColor: pallete.secundaryBackgroundDark
  },
  exitModal: {
    borderRadius: 100,
    width: 60,
    height: 60,
    padding: 10
  },
  transactionList: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    borderRadius: 25,
    marginBottom: 30,
    backgroundColor:pallete.secundaryBackgroundDark
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
    marginBottom: 12
  },
});
