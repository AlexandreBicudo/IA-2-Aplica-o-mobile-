import { StyleSheet } from "react-native";
import { THEME } from "../../styles/contants";

export const styles = StyleSheet.create({
  botao: {
    paddingVertical: 13,
    paddingHorizontal: 22,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  primario: {
    backgroundColor: THEME.colors.primary,
  },
  secundario: {
    backgroundColor: THEME.colors.border,
  },
  contorno: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: THEME.colors.primary,
  },
  textoBotao: {
    fontSize: 15,
    fontWeight: "600",
  },
  textoPrimario: {
    color: THEME.colors.white,
  },
  textoSecundario: {
    color: THEME.colors.heading,
  },
  textoContorno: {
    color: THEME.colors.primary,
  },
  desabilitado: {
    opacity: 0.58,
  }
});
