import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme.background_color,
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    list: {
        flex: 1,
        padding: 5,
        backgroundColor: theme.light_grey,
        marginVertical: 20,
        borderWidth: 1,
        height: 600,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: theme.border_color,
        borderRadius: 8,
        overflow: 'hidden',
    },

}));