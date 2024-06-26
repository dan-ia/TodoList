import { Platform, StyleSheet, StatusBar } from 'react-native';

import { theme } from "../../../theme"


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.white,
        alignItems: "center",
    },
    header: {
        width: '100%',
        paddingBottom: 20,
        paddingTop: 20,
        backgroundColor: theme.colors.gray[800],
    },

    title: {
        color: theme.colors.white,
        paddingLeft: 20,
        fontSize: 25,
        // fontWeight: 'bold',
        fontFamily: theme.fonts.DidactGothic,
    },
    subtitle: {
        color: theme.colors.gray[500],
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 18,
        fontFamily: theme.fonts.DidactGothic,
    },

    construction: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    number: {
        color: theme.colors.gray[800],
        fontSize: 20,
        fontWeight: 'bold',
    },
    percentage: {
        width: 200,
        height: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    barra: {
        position: 'absolute',
        width: 180,
        height: 6,
        backgroundColor: theme.colors.gray[600],
        marginLeft: 12,
        borderRadius: 10,
    },
    progress: {
        position: 'absolute',
        width: 20,
        height: 6,
        backgroundColor: theme.colors.red2,
        marginLeft: 12,
        borderRadius: 10,
    },

    frase: {
        color: theme.colors.gray[600],
        fontSize: 16,
        fontFamily: theme.fonts.DidactGothic,
    },

});