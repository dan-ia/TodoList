import { StyleSheet } from 'react-native';

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
        backgroundColor: theme.colors.gray[800],

    },
    title: {
        color: theme.colors.white,
        fontSize: 30,
        paddingLeft: 20,
    },
    subtitle: {
        color: theme.colors.gray[500],
        fontSize: 16,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },

});