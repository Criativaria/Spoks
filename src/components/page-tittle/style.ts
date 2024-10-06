import { CreateStyle } from "../../utils/create-style";


export const makeStyle = CreateStyle((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    titleView: {
        width: '75%',
        alignItems: 'center',
        borderBottomColor: theme.primary,
        paddingBottom: 8,
        color: theme.text,
    },
    title: {
        fontFamily: theme.font_bold,
        fontSize: theme.fontSize * 30,
        textAlign: "center",
        letterSpacing: 1.2,
        color: theme.text,
    },
    iconShowUp: {
        display: "flex",
    },
    iconHide: {
        display: "flex",
        alignContent: 'center',
    }

}))