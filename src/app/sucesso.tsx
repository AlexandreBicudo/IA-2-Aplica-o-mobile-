import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { THEME } from "../styles/contants";
import { BotaoPadrao } from "../components/BotaoPadrao";

export default function TelaSucesso() {
  const roteador = useRouter();

  return (
    <SafeAreaView style={styles.tela}>
      <View style={styles.container}>
        <View style={styles.blocoTexto}>
          <Text style={styles.textoSucesso}>Cartão criado com sucesso!</Text>
          <Text style={styles.detalhesSucesso}>
            Seu cartão de visita digital está pronto. Compartilhe com a galera!
          </Text>
        </View>

        <View style={styles.acoes}>
          <BotaoPadrao
            texto="Criar outro cartão"
            aoPressionar={() => roteador.push("/cadastro")}
          />
          <BotaoPadrao
            texto="Voltar ao início"
            variante="secundario"
            aoPressionar={() => roteador.push("/")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: THEME.colors.white,
  },
  container: {
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 26,
  },
  blocoTexto: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 598,
    gap: 11,
  },
  textoSucesso: {
    color: THEME.colors.heading,
    fontSize: THEME.text.heading.h2,
    fontWeight: "bold",
    width: 205,
    textAlign: "center",
  },
  detalhesSucesso: {
    color: THEME.colors.subtitle,
    fontSize: 15,
    fontWeight: "400",
    width: 205,
    textAlign: "center",
  },
  acoes: {
    flexDirection: "column",
    gap: 11,
  },
});
