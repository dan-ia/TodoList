import { View, Text } from "react-native";

import { styles } from "../Notes/styles";


import { StatusBar } from "expo-status-bar";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";


import { GridSmall } from "@/components/GridSmall";
import { Title } from "@/components/Title";
import { GridMedium } from "@/components/GridMedium";
import Header from "@/components/Header";

export default function Notes() {



    return (
        <View style={styles.container}>
            <StatusBar translucent={true} style="light" />


            <View style={styles.containerHeader}>
                <Header />
                <Title title="Notes" />
            </View>


            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.containerGrids}>

                    <GridSmall />
                    <GridMedium />
                    <GridMedium />
                    <GridMedium />
                    <GridSmall />
                    <GridSmall />
                    <GridMedium />
                    <GridMedium />
                    <GridSmall />
                    <GridSmall />
                    <GridSmall />
                    <GridSmall />
                    <GridSmall />
                    <GridSmall />
                    <GridMedium />
                    <GridSmall />
                    <GridMedium />
                    <GridSmall />
                </View>
            </ScrollView>



        </View >
    )
}

