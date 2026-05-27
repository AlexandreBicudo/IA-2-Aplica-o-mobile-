import { StyleSheet } from "react-native";
import { THEME } from "../../styles/contants";

export const styles = StyleSheet.create({
  cartao: {
    padding: 26,
    borderRadius: 13,
    alignItems: "center",
    shadowColor: THEME.colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 28,
  },
  avatar: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: THEME.colors.white,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },
  letraAvatar: {
    fontSize: 28,
    fontWeight: "bold",
    color: THEME.colors.primary,
  },
  nome: {
    fontSize: 22,
    fontWeight: "bold",
    color: THEME.colors.heading,
    marginBottom: 4,
  },
  cargo: {
    fontSize: 15,
    color: THEME.colors.text,
    fontWeight: "500",
  },
  empresa: {
    fontSize: 13,
    color: THEME.colors.subtitle,
    marginTop: 2,
  },
  tecnologia: {
    marginTop: 18,
    fontSize: 14,
    fontWeight: "600",
    color: THEME.colors.heading,
  },
  distintivo: {
    marginTop: 18,
    paddingVertical: 7,
    paddingHorizontal: 18,
    borderRadius: 18,
  },
  textoDistintivo: {
    color: THEME.colors.white,
    fontWeight: "bold",
    fontSize: 12,
  }
});
