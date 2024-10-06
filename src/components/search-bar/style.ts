import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({
    searchBarWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
        marginTop: 20,
        borderRadius: 8,
        backgroundColor: theme.light_grey,
        borderWidth: 1,
        borderColor: theme.border_color,
    },
    searchBar: {
        borderRadius: 8,
        padding: 5,
        width: "70%",
        height: 35,
        fontSize: theme.fontSize * 16,
        fontFamily: theme.font_regular,
        color: theme.text,
    },

    iconWrapper: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.text,
    },
    icon: {
        color: theme.text,
    },
}));
