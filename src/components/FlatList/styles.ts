import { StyleSheet } from "react-native";

import { theme } from "../../theme";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
        // backgroundColor: 'red',
        justifyContent: 'center',
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
        width: '100%',
        height: 100,
        backgroundColor: theme.colors.gray[800],
        borderRadius: 10,
        borderColor: theme.colors.gray[600],
        borderWidth: 3,
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    input: {
        minWidth: '70%',
        color: theme.colors.white,
        // backgroundColor: theme.colors.gray[800],
        height: 60,
        fontSize: 18,
        fontFamily: theme.fonts.DidactGothic,
        paddingLeft: 10,

    },
    btnAdd: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: theme.colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        right: 20,
        bottom: 20,
    },

    btnClearAll: {
        width: 40,
        height: 40,
        // backgroundColor: 'blue',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inserir: {
        width: 40,
        height: 40,
        borderRadius: 50,
        // backgroundColor: 'blue',

        textAlign: 'center',
        textAlignVertical: 'center',

        fontFamily: theme.fonts.DidactGothic,
        color: theme.colors.white,
        fontWeight: 'bold',
        fontSize: 16,
    }

});

