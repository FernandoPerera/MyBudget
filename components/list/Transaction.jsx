import { useState } from "react"
import { View, Text, StyleSheet, Pressable, Image, Modal } from "react-native"

import { palette } from "../../themes/Colors"
import EditMovement from "./EditMovement"

const Transaction = ({ id, movement, date, description, deleteMovement, modifyMovement }) => {

    const [show, setShow] = useState(false)

    return (
        <View style={styles.transaction}>

            <Modal
                animationType="slide"
                visible={show}
                transparent={true}>

                <View style={styles.modalContainer}>

                    <EditMovement id={id} modifyMovement={modifyMovement} setShow={setShow}/>

                </View>

            </Modal>

            <View style={styles.transactionOptions}>

                <Pressable onPress={() => setShow(!show)} style={styles.deleteTransaction}>
                    <Image style={{height: 40, width: 40}} source={require('../../assets/edit.png')}/>
                </Pressable>

                <View style={{borderColor: palette.linesBorderColor, borderTopWidth: 1.5, width: 35}}>
                    <Text> </Text>
                </View>

                <Pressable onPress={ () => deleteMovement(id)} style={styles.modifyTransaction}>
                    <Image style={{height: 40, width: 40}} source={require('../../assets/delete.png')}/>
                </Pressable>

            </View>

            <View style={{borderColor: palette.linesBorderColor, borderLeftWidth: 1.5, height: 200}}>
                <Text> </Text>
            </View>

            <View style={styles.transactionDates}>

                <View>

                    <View style={styles.dateContainer}>
                        <Text style={{textAlign: 'center'}}>{date}</Text>
                    </View>

                </View>

                <View>

                    <View style={styles.movementContainer}>
                        <Text style={{textAlign: 'center'}}>{movement} €</Text>
                    </View>

                </View>

                <View>

                    <View style={styles.descriptionContainer}>
                        <Text style={{textAlign: 'center'}}>{description}</Text>
                    </View>

                </View>

            </View>
                
        </View>
    )
}

const styles = StyleSheet.create({
    transaction: {
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '90%',
        marginTop: 25,
        marginHorizontal: 16,
        borderRadius: 20,
        backgroundColor: palette.primaryBackgroundLight,
        borderColor: palette.containersBorderColor,
        borderWidth: palette.borderWidth
    },
    transactionOptions: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: 20
    },
    deleteTransaction: {
        marginVertical: 40
    },
    modifyTransaction: {
        marginVertical: 40
    },
    transactionDates: {
        flex: 5,
        alignItems: 'center',
    },
    dateContainer: {
        padding: 12,
        height: 50,
        width: 120,
        borderRadius: palette.primaryBorderRadius,
        backgroundColor: palette.secundaryBackgroundLight,
        borderColor: palette.containersBorderColor,
        borderWidth: palette.borderWidth,
    },
    movementContainer: {
        padding: 15,
        marginVertical: 20,
        height: 50,
        width: 120,
        borderRadius: palette.primaryBorderRadius,
        backgroundColor: palette.secundaryBackgroundLight,
        borderColor: palette.containersBorderColor,
        borderWidth: palette.borderWidth,
    }, 
    descriptionContainer: {
        padding: 15,
        height: 75,
        width: 150,
        borderRadius: palette.primaryBorderRadius,
        backgroundColor: palette.secundaryBackgroundLight,
        borderColor: palette.containersBorderColor,
        borderWidth: palette.borderWidth,
    },
    modalContainer: {
        height: '50%',
        width: '70%',
        marginVertical: '50%',
        borderBottomRightRadius: palette.secundaryBorderRadius,
        borderTopRightRadius: palette.secundaryBorderRadius,
        backgroundColor: palette.primaryBackgroundDark,
        borderColor: palette.containersBorderColor,
        borderWidth: palette.borderWidth,
    }
})

export default Transaction