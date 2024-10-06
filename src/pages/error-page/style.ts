import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.background_color,
    },
    title: {
        fontFamily: theme.font_bold,
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 30,
        marginTop: 0,
        color: theme.text,
    },
    offline: {
        fontFamily: theme.font_regular,
        fontSize: 19,
        textAlign: 'center',
        marginBottom: 30,
        color: theme.text,
    },
    button: {
        padding: 10,
        height: 60,
        borderRadius: 13,
        marginBottom: 40,
        width: '100%',
        color: theme.dark_primary,
        alignItems: 'center',
    },
    buttonText: {
        color: theme.internet_button,
        fontSize: 17,
        letterSpacing: 1.2,
        fontFamily: theme.font_regular,
    },
    icon: {
        marginBottom: 30,
    },
}));