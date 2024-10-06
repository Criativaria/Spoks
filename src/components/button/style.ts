import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({
    wrapper: {
        width: "90%",
        height: 60,
        backgroundColor: theme.dark_primary,
        borderRadius: 8,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: theme.text,
        fontSize: theme.fontSize * 19,
        fontFamily: theme.font_bold,
        letterSpacing: 1.2,
    }
}));
