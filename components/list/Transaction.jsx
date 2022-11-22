import { View, Text, StyleSheet, Pressable, Image } from "react-native"

import { palette } from "../../themes/Colors"

const Transaction = ({ id, movement, date, description, movementList }) => {
  return (
    <View style={styles.transaction}>

        <View style={styles.transactionOptions}>

            <Pressable style={styles.deleteTransaction}>
                <Image style={{height: 40, width: 40}} source={require('../../assets/edit.png')}/>
            </Pressable>

            <View style={{borderColor: palette.secundaryBackgroundDark, borderTopWidth: 1, width: 35}}>
                <Text> </Text>
            </View>

            <Pressable style={styles.modifyTransaction}>
                <Image style={{height: 40, width: 40}} source={require('../../assets/delete.png')}/>
            </Pressable>

        </View>

        <View style={{borderColor: palette.secundaryBackgroundDark, borderLeftWidth: 1, height: 200}}>
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
                    <Text style={{textAlign: 'center'}}>{movement}</Text>
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
        backgroundColor: palette.primaryBackgroundLight
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
        backgroundColor: palette.secundaryBackgroundLight,
        padding: 12,
        borderRadius: 12,
        height: 50,
        width: 100
    },
    movementContainer: {
        backgroundColor: palette.secundaryBackgroundLight,
        padding: 15,
        borderRadius: 12,
        marginVertical: 20,
        height: 50,
        width: 100
    }, 
    descriptionContainer: {
        backgroundColor: palette.secundaryBackgroundLight,
        padding: 15,
        borderRadius: 12,
        height: 75,
        width: 150 
    }
})

export default Transaction