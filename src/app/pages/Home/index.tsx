import { View, Text, Image, Linking } from "react-native";

import { styles } from "./styles";

import Flat from "../../../components/FlatList"

import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";

import { Ionicons } from '@expo/vector-icons';

export default function Home() {

    const { navigate } = useNavigation()

    return (
        <View style={styles.container}>
            <StatusBar translucent={true} style="light" />


            <View style={styles.header}>

                <View style={styles.containerHeader}>
                    {/* <TouchableOpacity onPress={() => { Linking.openURL('https://www.instagram.com/d44ns/') }}>
                        <Image style={styles.logo} source={require('../../../assets/D.png')}></Image>
                    </TouchableOpacity> */}

                    <Text style={styles.title}>Tasks</Text>

                    <TouchableOpacity onPress={() => navigate('Profile')}>
                        <Ionicons name="settings-sharp" size={26} color="white" />
                    </TouchableOpacity>
                </View>

            </View>

            <Flat />


        </View>
    )
}

