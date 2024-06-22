import { View, Text } from "react-native";

import { styles } from "./styles";

import { StatusBar } from "expo-status-bar";

export default function Profile() {

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            <View style={styles.header}>

                <Text style={styles.title}>Notes</Text>

                <Text style={styles.subtitle}>Commit to your goals daily.</Text>
                <Text style={styles.subtitle}>Each task completed is a step towards your success.</Text>
                <Text style={styles.subtitle}>Be consistent and watch your dreams come true.</Text>
            </View>

            <View style={styles.construction}>

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
