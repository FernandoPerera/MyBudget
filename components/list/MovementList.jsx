import { View, Text, Pressable, Image, StyleSheet, ScrollView, FlatList } from "react-native"

import { palette } from '../../themes/Colors'
import Transaction from "./Transaction"

const MovementList = ({ movementList, changeVisibilityOfModal }) => {
  return (
    
    <View style={styles.modalContainer}>

        <View style={styles.modalHeader}>

            <Pressable onPress={changeVisibilityOfModal}>
                <Image style={styles.exitModal} source={require('../../assets/backward.png')}/>
            </Pressable>

            <View style={styles.headerName}>
                <Text style={{fontSize: 16}}>Lista de Movimientos</Text>
            </View>

        </View>

        <View style={styles.transactionList}>

            {
                movementList.length == 0
                    ? 
                        <View style={styles.emptyList}>
                            <Text style={{fontSize: 17}}>No se han añadido registros</Text>
                        </View>
                    :
                        <FlatList style={{width: '100%'}}
                            data={movementList}
                            renderItem={( renderItem ) => {
                                const { id, transaction, date, description } = renderItem.item
                                return(
                                    <Transaction 
                                        key={id}
                                        id={id}
                                        movement={transaction}
                                        date={date}
                                        description={description}
                                        movementList={movementList}/>
                                )
                        }
                }/>
            }

        </View>

    </View>

  )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: palette.primaryBackgroundDark
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
        backgroundColor: palette.secundaryBackgroundDark
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
        backgroundColor:palette.secundaryBackgroundDark
    },
    emptyList: {
        alignItems:'center',
        justifyContent: 'center',
        width: '85%',
        height: '60%',
        marginVertical: 25,
        borderRadius: 20,
        backgroundColor: palette.primaryBackgroundLight
}
})

export default MovementList
