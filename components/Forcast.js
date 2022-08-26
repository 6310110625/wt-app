import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function Forecast(props) {

    return (
        <View style={styles.underTextWeather}>
            <View style={styles.viewCelsius}>
                <Text style={styles.textCelsius}>{props.temp}</Text>
                <Text style={styles.textDescripCelsius}> °C</Text>
            </View>

            <View>
                <Text style={styles.textMain}>{props.main}</Text>
                <Text style={styles.textDescription}>{props.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textMain: {
        fontSize: 50,
        color: 'white',
        textAlign: 'center'
    },
    textDescription: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center'
    },
    viewCelsius: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textCelsius: {
        fontSize: 80,
        color: 'white',
        textAlign: 'center'
    },
    textDescripCelsius: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    },
    underTextWeather: {
        width: '100%',
        height: '75%',
        justifyContent: 'space-evenly'
    }
})