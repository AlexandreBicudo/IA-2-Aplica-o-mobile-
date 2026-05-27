import { Text, View } from "react-native";
import { styles } from "./styles";

export type DadosDev = {
  nomeCompleto: string;
  cargo: string;
  empresa?: string;
  experiencia: number;
  tecnologia: string;
  corCartao: string;
};

interface CartaoDevProps {
  dados: DadosDev;
}

export function CartaoDev({ dados }: CartaoDevProps) {
  const primeiraLetra = dados.nomeCompleto ? dados.nomeCompleto.charAt(0).toUpperCase() : "?";

  const anosExp = Number(dados.experiencia);

  let categoriaDev = "Júnior";
  let corBadge = "#8C8C8C";

  if (anosExp >= 6) {
    categoriaDev = "Sênior";
    corBadge = "#E6B800";
  } else if (anosExp >= 3) {
    categoriaDev = "Pleno";
    corBadge = "#3B3DE0";
  }

  const bgCartao = dados.corCartao && dados.corCartao !== "s" ? dados.corCartao : "#E0E3FF";

  return (
    <View style={[styles.cartao, { backgroundColor: bgCartao }]}>
      <View style={styles.avatar}>
        <Text style={styles.letraAvatar}>{primeiraLetra}</Text>
      </View>

      <Text style={styles.nome}>{dados.nomeCompleto}</Text>
      <Text style={styles.cargo}>{dados.cargo}</Text>

      {!!dados.empresa && (
        <Text style={styles.empresa}>{dados.empresa}</Text>
      )}

      <Text style={styles.tecnologia}>
        Especialista em {dados.tecnologia}
      </Text>

      <View style={[styles.distintivo, { backgroundColor: corBadge }]}>
        <Text style={styles.textoDistintivo}>{categoriaDev}</Text>
      </View>
    </View>
  );
}
