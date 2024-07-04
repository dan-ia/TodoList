import { View, Text, Image, Linking } from "react-native";

import { styles } from "./styles";

import Flat from "../../../components/FlatList"

import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";

import { Ionicons } from '@expo/vector-icons';
import Header from "@/components/Header";
import { Title } from "@/components/Title";

export default function Home() {

    const { navigate } = useNavigation()

    return (
        <View style={styles.container}>
            <StatusBar translucent={true} style="light" />


            <View style={styles.containerHeader}>

                <Header />

                <Title title="Tasks" />

            </View>

            <Flat />


        </View>
    )
}

