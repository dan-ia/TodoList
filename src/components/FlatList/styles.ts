import { StyleSheet } from "react-native";

import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
        // backgroundColor: 'red',
    },

    null: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerList: {
        width: '100%',
        height: 60,
        borderRadius: 10,
        backgroundColor: theme.colors.gray[700],
        marginTop: 12,
        paddingHorizontal: 15,
        justifyContent: 'flex-start',
        alignItems: "center",
        flexDirection: 'row',
        gap: 15,
    },
    btns: {
        position: 'absolute',
        right: 10,
    },
    btnDone: {
        width: 18,
        height: 18,
        backgroundColor: theme.colors.gray[700],
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        borderColor: 'white',
        borderWidth: 2,
    },

    btnDoneComplete: {
        width: 18,
        height: 18,
        backgroundColor: theme.colors.gray[600],
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: theme.colors.gray[600],
        borderWidth: 2,

    },
    btnTrash: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
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
        backgroundColor: theme.colors.gray[700],
        height: 50,
        borderRadius: 50,
        fontSize: 18,
        paddingLeft: 20,
        fontFamily: theme.fonts.DidactGothic,
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

