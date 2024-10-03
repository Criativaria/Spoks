import { CreateStyle } from "../../utils/create-style";


export const makeStyle = CreateStyle((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 95,
    },
    titleView: {
        alignItems: 'center',
        paddingBottom: 3,
    },
    title: {
        fontFamily: theme.font_bold,
        fontSize: theme.fontSize * 30,
        textAlign: "center",
        letterSpacing: 1.2
    },

    iconShowUp: {
        display: "flex"
    },
    iconHide: {
        display: "none"
    }

}))