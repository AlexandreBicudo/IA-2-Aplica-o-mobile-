import { StyleSheet } from "react-native";
import { THEME } from "../../styles/contants";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    width: "100%",
  },
  rotulo: {
    fontSize: 13,
    fontWeight: "bold",
    color: THEME.colors.heading,
    marginBottom: 8,
  },
  opcoesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  botaoCor: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 7,
    backgroundColor: THEME.colors.border,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "transparent",
  },
  botaoAtivo: {
    borderColor: THEME.colors.primary,
    backgroundColor: THEME.colors.white,
  },
  textoCor: {
    fontSize: 13,
    fontWeight: "600",
    color: THEME.colors.text,
  },
  textoCorAtivo: {
    color: THEME.colors.primary,
    fontWeight: "bold",
  }
});
