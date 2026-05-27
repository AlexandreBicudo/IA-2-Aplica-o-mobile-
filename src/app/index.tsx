import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { THEME } from "../styles/contants";
import { BotaoPadrao } from "../components/BotaoPadrao";

export default function TelaInicio() {
  const roteador = useRouter();

  return (
    <SafeAreaView style={styles.tela}>
      <View style={styles.conteudo}>
        <View style={styles.secaoTopo}>
          <Text style={styles.titulo}>DevCard</Text>
          <Text style={styles.subtitulo}>
            Seu cartão de visita digital de dev mobile
          </Text>
        </View>

        <BotaoPadrao
          texto="Criar meu cartão"
          aoPressionar={() => roteador.push("/cadastro")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: THEME.colors.white,
  },
  conteudo: {
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 26,
  },
  secaoTopo: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 598,
  },
  titulo: {
    color: THEME.colors.primary,
    fontSize: 48,
    fontWeight: "bold",
  },
  subtitulo: {
    color: THEME.colors.subtitle,
    fontSize: 15,
    fontWeight: "400",
    width: 204,
    textAlign: "center",
    marginTop: 6,
  },
});
