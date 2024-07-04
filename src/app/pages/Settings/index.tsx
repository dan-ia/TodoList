import { View, Text, Button } from "react-native";
import { useRef } from "react";

import { styles } from "./styles";

import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";

const construction = require('../../../assets/lottie/construction.json')

export default function Settings() {

    const animation = useRef<LottieView>(null);

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            <View style={styles.header}>

                {/* <Text style={styles.subtitle}>Commit to your goals daily.</Text>
                <Text style={styles.subtitle}>Each task completed is a step towards your success.</Text>
                <Text style={styles.subtitle}>Be consistent and watch your dreams come true.</Text> */}
            </View>

            <View style={styles.construction}>

                <LottieView
                    autoPlay
                    loop={true}
                    ref={animation}
                    style={{
                        width: '80%',
                        maxWidth: 400,
                        height: 200,
                    }}

                    source={construction}
                />
                <Text style={styles.number}>10%</Text>

                <View style={styles.percentage}>
                    <View style={styles.barra}></View>
                    <View style={styles.progress}></View>
                </View>
                <Text style={styles.frase}>Application under construction</Text>
            </View>





        </View >
    )
}
