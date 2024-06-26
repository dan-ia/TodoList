import { Platform, StatusBar, StyleSheet } from 'react-native';

import { theme } from "../../../theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.gray[800],
        alignItems: "center",
    },
    header: {
        width: '100%',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 15 : 55,
        backgroundColor: theme.colors.gray[800],
    },

    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
        alignItems: 'center',
        paddingHorizontal: 15,
    },

    logo: {
        width: 40,
        height: 40,
    },

    title: {
        color: theme.colors.white,
        paddingRight: 15,
        fontSize: 28,
        // fontWeight: 'bold',
        fontFamily: theme.fonts.DidactGothic,
    },
    subtitle: {
        color: theme.colors.gray[500],
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 16,
        fontFamily: theme.fonts.DidactGothic,
    },



});