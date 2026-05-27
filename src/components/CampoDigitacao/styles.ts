import { StyleSheet } from "react-native";
import { THEME } from "../../styles/contants";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 6,
  },
  rotulo: {
    fontSize: 13,
    fontWeight: "600",
    color: THEME.colors.heading,
    marginBottom: 4,
  },
  entrada: {
    backgroundColor: THEME.colors.white,
    borderWidth: 1,
    borderColor: THEME.colors.border,
    borderRadius: 7,
    paddingHorizontal: 13,
    paddingVertical: 10,
    fontSize: 14,
    color: THEME.colors.text,
  },
  entradaErro: {
    borderColor: THEME.colors.error,
  },
  textoErro: {
    color: THEME.colors.error,
    fontSize: 11,
    marginTop: 3,
  }
});
