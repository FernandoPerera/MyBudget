import { View, Text, Pressable, Image } from "react-native"


const MovementList = () => {
  return (
    
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

  )
}

const styles = StyleSheet.create({
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
      }
})

export default MovementList
