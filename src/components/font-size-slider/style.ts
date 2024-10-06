import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: theme.light_grey,
        width: '100%',
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
        fontSize: theme.fontSize * 14,
        marginBottom: 15,
        fontFamily: theme.font_regular,
        color: theme.text,
    },
    slider: {
        width: 250,
        height: 50,
    }
}));
