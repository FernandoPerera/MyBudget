import { View, Text, Pressable, Image, StyleSheet, ScrollView, FlatList } from "react-native"

import { palette } from '../../themes/Colors'
import Transaction from "./Transaction"

const MovementList = ({ movementList, changeVisibilityOfModal, deleteMovement, modifyMovement }) => {
  return (
    
    <View style={styles.modalContainer}>

        <View style={styles.modalHeader}>

            <Pressable onPress={changeVisibilityOfModal}>
                <Image style={styles.exitModal} source={require('../../assets/backward.png')}/>
            </Pressable>

            <View style={styles.headerName}>
                <Text style={{fontSize: palette.secundaryFontSize}}>Lista de Movimientos</Text>
            </View>

        </View>

        <View style={styles.transactionList}>

            {
                movementList.length == 0
                    ? 
                        <View style={styles.emptyList}>
                            <Text style={{fontSize: palette.secundaryFontSize}}>No se han añadido movimientos</Text>
                        </View>
                    :
                        <FlatList style={{width: '100%'}}
                            data={movementList}
                            renderItem={( renderItem ) => {
                                const { id, transactionQuantity, date, description } = renderItem.item
                                return(
                                    <Transaction 
                                        key={id}
                                        id={id}
                                        movement={transactionQuantity}
                                        date={date}
                                        description={description}
                                        deleteMovement={deleteMovement}
                                        modifyMovement={modifyMovement}/>
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
        marginLeft: 30,
        marginRight: 75,
        borderRadius: palette.primaryBorderRadius,
        backgroundColor: palette.primaryBackgroundLight,
        borderColor: palette.containersBorderColor,
        borderWidth: palette.borderWidth,
    },
    exitModal: {
        width: 60,
        height: 60,
    },
    transactionList: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '85%',
        marginBottom: 30,
        borderRadius: palette.secundaryBorderRadius,
        backgroundColor:palette.secundaryBackgroundDark,
        borderColor: palette.containersBorderColor,
        borderWidth: palette.borderWidth,
    },
    emptyList: {
        alignItems:'center',
        justifyContent: 'center',
        width: '85%',
        height: '20%',
        marginVertical: 25,
        borderRadius: palette.secundaryBorderRadius,
        backgroundColor: palette.primaryBackgroundLight,
        borderColor: palette.containersBorderColor,
        borderWidth: palette.borderWidth,
}
})

export default MovementList
