import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({

    buttonWrapper: {
        backgroundColor: theme.dark_primary,
        padding: 10,
        height: 70,
        borderRadius: 13,
        marginBottom: 40,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        letterSpacing: 1.2,
        color: 'white',
        fontSize: theme.fontSize * 17,
        fontFamily: theme.font_bold,
    },

    image: {
        width: 40,
        height: 40,
        marginLeft: 10,
        borderRadius: 25,
    },

}));