import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({
    wrapper: {
        width: "85%",
        height: 72,
        backgroundColor: theme.dark_primary,
        borderRadius: 13,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 1,
    },
    text: {
        color: theme.text,
        fontSize: theme.fontSize * 19,
        fontFamily: theme.font_bold,
        letterSpacing: 1.2,
    }
}));
