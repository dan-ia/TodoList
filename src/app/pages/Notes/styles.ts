import { Platform, StatusBar, StyleSheet } from 'react-native';

import { theme } from "../../../theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.gray[800],
        paddingHorizontal: 10,
    },
    containerHeader: {
        width: '100%',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 15 : 55,
        paddingBottom: 5,
    },
    containerGrids: {
        width: '100%',
        gap: 10,
        paddingTop: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',

    },


});