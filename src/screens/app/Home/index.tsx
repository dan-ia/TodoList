import { View, Text } from "react-native";

import { styles } from "./styles";

import Flat from "../../../components/FlatList";
import Header from "../../../components/Header";
import { StatusBar } from "expo-status-bar";

export default function Home() {



    return (
        <View style={styles.container}>
            <StatusBar translucent={true} style="light" />

            <Header />
            <View style={styles.header}>
                <Text style={styles.subtitle}>Comprometa-se diariamente com suas metas.</Text>
                <Text style={styles.subtitle}>Cada tarefa cumprida é um passo em direção ao seu sucesso.</Text>
                <Text style={styles.subtitle}>Seja consistente e veja seus sonhos se tornarem realidade.</Text>
            </View>

            <Flat />
        </View>
    )
}
