import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Forecast from './Forcast'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0,
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=d8effebf92cc73eecf51023b45f5ea6a`)
                .then((response) => response.json()).then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.view}>
                <Forecast {...forecastInfo} />
                <Text style={styles.zipcodeText}>{props.zipCode}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

    backdrop: {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    zipcodeText: {
        height: '25%',
        fontSize: 20,
        color: 'white',
    },
    view: {
        alignItems: 'center',
        width: '100%',
        height: '65%',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
    },
})