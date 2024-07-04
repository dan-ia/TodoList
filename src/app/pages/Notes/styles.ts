import { Platform, StatusBar, StyleSheet } from 'react-native';

import { theme } from "../../../theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.gray[800],

        // justifyContent: 'center',
    },
    containerHeader: {
        width: '100%',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 15 : 55,
        paddingHorizontal: 10,
        paddingBottom: 5,
    },
    containerGrids: {
        paddingTop: 10,
        paddingHorizontal: 5,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },


});