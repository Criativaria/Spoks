import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderStyle: "solid",
        borderBlockColor: theme.primary,
        borderBottomWidth: 1,
        height: 130,
        padding: 4,
        backgroundColor: theme.light_grey,
    },
    tittle: {
        fontSize: theme.fontSize * 17,
        fontFamily: theme.font_bold,
        letterSpacing: 1.2,
        color: theme.text,
    },
    desc: {
        fontSize: theme.fontSize * 14,
        fontFamily: theme.font_regular,
        letterSpacing: 1.2,
        width: 260,
        color: theme.text,
        marginBottom: 10,
    },
    textWrapper: {
        marginTop: 10,
        width: "85%",
    }
}));