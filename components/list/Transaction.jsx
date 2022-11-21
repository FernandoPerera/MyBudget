import { View, Text, StyleSheet } from "react-native"

import { palette } from "../../themes/Colors"

const Transaction = ({ id, movement, date, description, movementList }) => {
  return (
    <View style={styles.transaction}>

        <View style={styles.transactionOptions}>

            <Text>Borrar</Text>
            <Text>Editar</Text>

        </View>

        <View style={styles.transactionDates}>

            <View style={styles.dateContainer}>

                <Text>fecha</Text>

            </View>

            <View style={styles.movementContainer}>

                <Text>movimiento</Text>

            </View>

            <View style={styles.descriptionContainer}>

                <Text>descricion</Text>

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
        height: '40%',
        marginVertical: 25,
        borderRadius: 20,
        backgroundColor: palette.primaryBackgroundLight
    },
    transactionOptions: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: 20
    },
    transactionDates: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dateContainer: {
        flex: 1,
        marginTop: 40
    },
    movementContainer: {
        flex: 1
    }, 
    descriptionContainer: {
        flex: 1
    }
})

export default Transaction