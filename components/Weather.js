import react, { useState } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import Forecast from "./Forcast";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.view}>
                <Forecast {...forecastInfo} />
                <Text style={styles.zipcodeText}>{props.zipCode}</Text>
            </View>
        </ImageBackground>
    );
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