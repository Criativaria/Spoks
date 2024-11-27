import { CreateStyle } from "../../utils/create-style";

export const makeStyle = CreateStyle((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.background_color,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: theme.fontSize * 26,
    fontFamily: theme.font_bold,
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: theme.text,
},

  button: {
    borderWidth: 2,
    fontSize: 17,
    borderColor: theme.border_button_config,
},
subtitle: {
  fontSize: theme.fontSize * 20,
  fontFamily: theme.font_regular,
  marginBottom: 36,
  textAlign: 'justify',
  color: theme.text,
},
  line: {
    height: 5,
    width: '80%',
    backgroundColor: theme.light_primary,
    marginBottom: 36,
    borderRadius: 4,
  },
  buttonText: {
    letterSpacing: 1.2,
    color: 'white',
    fontSize: 20,
    fontFamily: theme.font_bold,
  },
}));
