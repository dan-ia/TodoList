import { View, Image, TouchableOpacity, Text, Linking } from "react-native"

import { Ionicons } from '@expo/vector-icons';

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Title } from "../Title";


export default function Header() {

    const { navigate } = useNavigation()

    return (

        <View style={styles.header}>
            {/* <TouchableOpacity onPress={() => { Linking.openURL('https://www.instagram.com/d44ns/') }}>
                            <Image style={styles.logo} source={require('../../../assets/D.png')}></Image>
                        </TouchableOpacity> */}

            <Title title="" />

            <TouchableOpacity onPress={() => navigate('Settings')}>
                <Ionicons name="settings-sharp" size={26} color="white" />
            </TouchableOpacity>
        </View>
    )
}



