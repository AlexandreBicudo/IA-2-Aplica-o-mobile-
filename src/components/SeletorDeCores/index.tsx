import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export type ItemCor = {
  id: string;
  nome: string;
  codigoCor: string;
};

interface SeletorDeCoresProps {
  aoSelecionar: (codigoCor: string) => void;
  opcoes: ItemCor[];
}

export function SeletorDeCores({ aoSelecionar, opcoes }: SeletorDeCoresProps) {
  const [corSelecionada, setCorSelecionada] = useState<string>("");

  function selecionarCor(codigoCor: string) {
    setCorSelecionada(codigoCor);
    aoSelecionar(codigoCor);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.rotulo}>Cor do Cartão</Text>

      <View style={styles.opcoesContainer}>
        {opcoes.map((item) => {
          const estaSelecionado = corSelecionada === item.codigoCor;

          return (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.8}
              onPress={() => selecionarCor(item.codigoCor)}
              style={[styles.botaoCor, estaSelecionado && styles.botaoAtivo]}
            >
              <Text style={[styles.textoCor, estaSelecionado && styles.textoCorAtivo]}>
                {item.nome}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
