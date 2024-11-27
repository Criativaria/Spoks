import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.background_color,
        padding: 20,
    },
    scroll: {
        backgroundColor: theme.background_color,
    },
    title: {
        fontSize: theme.fontSize * 27,
        fontFamily: theme.font_bold,
        marginTop: 30,
        textAlign: 'center',
        marginBottom: 50,
        color: theme.text,
    },
    config_text: {
        color: theme.text,
        fontSize: theme.fontSize * 19,
        marginTop: 20,
        marginBottom: 20,
    },
    label: {
        fontSize: theme.fontSize * 19,
        fontFamily: theme.font_bold,
        color: theme.text,
        width: 200,
        textAlign: 'center',
        marginBottom: 20,
    },
    second_label: {
        fontSize: theme.fontSize * 19,
        fontFamily: theme.font_bold,
        color: theme.text,
        width: 500,
        textAlign: 'center',
        marginBottom: 60,
    },
    buttonText: {
        textAlign: 'center',
        color: theme.text_white,
    },
    line: {
        height: 3,
        width: '45%',
        backgroundColor: theme.light_primary,
        marginBottom: 45,
        borderRadius: 4,
    },
    button: {
        marginTop: 20,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: theme.border_button_config,
    },
}));
