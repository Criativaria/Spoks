import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme.background_color,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    activity: {
        color: theme.primary,
        width: 100
    },
    text: {
        fontFamily: theme.font_bold,
        fontSize: 19,
        textAlign: 'center',
        marginBottom: 36,
        color: theme.text,
    },
}));
