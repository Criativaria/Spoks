import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.background_color,
        padding: 20,
        borderWidth: 2,
    },
    scroll: {
        backgroundColor: theme.background_color,
    },
    title: {
        fontSize: theme.fontSize * 30,
        fontFamily: theme.font_bold,
        marginBottom: 40,
        color: theme.text,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
    },
    modeRow: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        alignSelf: 'flex-start',
        marginLeft: 15,
    },
    icon: {
        marginRight: 10,
        color: theme.text,
    },
    label: {
        fontSize: theme.fontSize * 17,
        fontFamily: theme.font_bold,
        color: theme.text,
    },
    buttonText: {
        textAlign: 'center',
        color: theme.text_white,

    },
    // Estilos específicos para os botões
    darkModeButton: {
        backgroundColor: theme.black,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        color: theme.text_white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lightModeButton: {
        backgroundColor: "#E8E8E8",
        color: theme.text_white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    highContrastButton: {
        backgroundColor: 'black',
        color: theme.text,
        borderWidth: 2,
        borderColor: 'white',
    },
    // Estilos de texto para cada botão
    darkModeButtonText: {
        color: theme.dark_mode_button_text,
        fontSize: theme.fontSize * 19,
        fontFamily: theme.font_bold,
    },
    lightModeButtonText: { // Estilo do texto do botão de Modo Claro
        color: "#000000",
        fontSize: theme.fontSize * 19,
        fontFamily: theme.font_bold,

    },
    highContrastButtonText: {
        color: theme.high_contrast_button_text,
        fontSize: theme.fontSize * 19,
        fontFamily: theme.font_bold,
    },
    line: {
        height: 2,
        width: '80%',
        backgroundColor: theme.primary,
        marginBottom: 36,
        borderRadius: 4,
    },
    footer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    button: {
        borderWidth: 2,
        borderColor: theme.border_button_config,
    },
    footerText: {
        fontSize: theme.fontSize * 18,
        marginBottom: 20,
        letterSpacing: 1.2,
        fontFamily: theme.font_bold,
        color: theme.text,
    }
}));
