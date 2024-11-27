import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: theme.light_grey,
        width: "100%",
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 0,
        borderWidth: 2,
        borderColor: "#FFFFFF",
    },
    title: {
        fontSize: theme.fontSize * 18,
        marginBottom: 20,
        fontFamily: theme.font_bold,
        color: theme.text,
    },
    subTitle: {
        fontSize: theme.fontSize * 16,
        marginBottom: 15,
        fontFamily: theme.font_regular,
        color: theme.text,
    },
    slider: {
        width: 280,
        height: 50, 
    },
    thumb: {
        width: 40,          // Aumentando a largura do thumb (polegar)
        height: 40,         // Aumentando a altura do thumb
        borderRadius: 20,   // Tornando o thumb mais arredondado
        borderColor: theme.primary,
        borderWidth: 2,     // Espessura da borda do thumb
        backgroundColor: theme.primary,  // Cor de fundo do thumb
    },
    track: {
        height: 12,         // Aumentando a altura da trilha
        borderRadius: 6,    // Tornando as bordas da trilha mais arredondadas
        backgroundColor: theme.black,   // Cor do track
    },
}));
