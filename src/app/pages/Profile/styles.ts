import { Platform, StyleSheet, StatusBar } from 'react-native';

import { theme } from "../../../theme"


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.gray[700],
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
        fontSize: 25,
        paddingLeft: 20,
    },
    subtitle: {
        color: theme.colors.gray[500],
        fontSize: 16,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },

    construction: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 200,
    },
    number: {
        color: theme.colors.gray[500],
        fontSize: 20,
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
        backgroundColor: theme.colors.green,
        marginLeft: 12,
        borderRadius: 10,
    },

    frase: {
        color: theme.colors.gray[500],
        fontSize: 16,
    },

});