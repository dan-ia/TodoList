import { StyleSheet, Platform, StatusBar } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 55,
        paddingHorizontal: 15,
        width: '100%',
        backgroundColor: theme.colors.gray[800]
    },
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
    },
    logo: {
        width: 40,
        height: 40,
    },
    title: {
        color: theme.colors.white,
        fontSize: 30,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50,

    },


})