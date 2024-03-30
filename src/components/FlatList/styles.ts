import { StyleSheet } from "react-native";

import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
        // backgroundColor: 'red',
    },flat: {

    },
    containerList: {
        width: '100%',
        height: 52,
        borderRadius: 10,
        backgroundColor: theme.colors.gray[800],
        marginTop: 12,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: "row",
    },
    btns: {
        flexDirection: 'row',
        gap: 15,
    },
    btnDone: {
        width: 25,
        height: 25,
        backgroundColor: theme.colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    btnTrash: {
        width: 25,
        height: 25,
        backgroundColor: theme.colors.red,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    containerInput: {
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        minWidth: 280,
        maxWidth: 280,
        color: theme.colors.white,
        backgroundColor: theme.colors.gray[800],
        height: 50,
        borderRadius: 50,
        fontSize: 18,
        paddingLeft: 20,
    },
    btnClearAll: {
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnAdd: {
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

