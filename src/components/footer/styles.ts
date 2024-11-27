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
    fontSize: theme.fontSize * 16,
    fontFamily: theme.font_bold,
  },

  // Estilos para o modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: theme.background_color,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  
  modalTitle: {
    fontSize: theme.fontSize * 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: theme.text,
  },
  modalMessage: {
    fontSize: theme.fontSize * 16,
    textAlign: 'center',
    marginBottom: 20,
    color: theme.text,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: theme.primary,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: theme.text_button_modal,
    fontWeight: 'bold',
    width: 100,
    fontSize: theme.fontSize * 16,
    textAlign: 'center',
  },
  image: {
    width: 100,
  },
}));
