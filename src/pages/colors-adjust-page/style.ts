import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.background_color,
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
    second_label:{
        fontSize: theme.fontSize * 19,
        fontFamily: theme.font_bold,
        color: theme.text,
        width: 500,
        textAlign: 'center',
        marginBottom: 40,
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
        marginTop: 20,
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
        height: 3,
        width: '45%',
        backgroundColor: theme.light_primary,
        marginBottom: 45,
        borderRadius: 4,
    },
    footer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    button: {
        marginTop: 30,
        borderWidth: 2,
        borderColor: theme.border_button_config,
    },

}));
