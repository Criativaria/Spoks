import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({
  container: {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  footerContainer: {
    backgroundColor: theme.background_footer,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    height: 70,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: theme.border_footer,
  },
  footerText: {
    color: theme.footer_text,
    fontSize: theme.fontSize * 16,
    textAlign: "center",
    fontFamily: theme.font_bold,
  },
  footerLink: {
    color: theme.light_primary,
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: theme.fontSize * 17,
    fontFamily: theme.font_bold,
  },
}));
