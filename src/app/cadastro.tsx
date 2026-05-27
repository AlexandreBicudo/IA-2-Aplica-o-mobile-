import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useRouter } from "expo-router";
import { THEME } from "../styles/contants";
import { BotaoPadrao } from "../components/BotaoPadrao";
import { CampoDigitacao } from "../components/CampoDigitacao";
import { SeletorDeCores, ItemCor } from "../components/SeletorDeCores";

const CORES_DISPONIVEIS: ItemCor[] = [
  { id: "v1", nome: "Azul", codigoCor: "#3B3DE0" },
  { id: "v2", nome: "Verde", codigoCor: "#449451" },
  { id: "v3", nome: "Roxo", codigoCor: "#380E66" },
  { id: "v4", nome: "Rose", codigoCor: "#8A084F" },
];

export type DadosDev = {
  nomeCompleto: string;
  cargo: string;
  empresa?: string;
  experiencia: number;
  tecnologia: string;
  corCartao: string;
};

type ErrosFormulario = {
  nomeCompleto?: string;
  cargo?: string;
  empresa?: string;
  experiencia?: string;
  tecnologia?: string;
  corCartao?: string;
};

export default function TelaCadastro() {
  const roteador = useRouter();

  const [form, setForm] = useState<{ dados: DadosDev; erros: ErrosFormulario }>({
    dados: {
      nomeCompleto: "",
      cargo: "",
      empresa: "",
      experiencia: 0,
      tecnologia: "",
      corCartao: "",
    },
    erros: {},
  });

  function submeterForm() {
    roteador.push({
      pathname: "/preview",
      params: form.dados,
    });
  }

  function atualizarCampo(nomeCampo: keyof DadosDev, valor: string | number) {
    setForm((atual) => ({
      ...atual,
      dados: {
        ...atual.dados,
        [nomeCampo]: valor,
      },
    }));
    checarCampo(nomeCampo, valor);
  }

  function definirErro(nomeCampo: keyof DadosDev, mensagem: string | undefined) {
    setForm((atual) => ({
      ...atual,
      erros: {
        ...atual.erros,
        [nomeCampo]: mensagem,
      },
    }));
  }

  function checarCampo(campo: keyof DadosDev, valorAtual?: string | number) {
    const valor = valorAtual !== undefined ? valorAtual : form.dados[campo];

    switch (campo) {
      case "nomeCompleto": {
        const nome = String(valor).trim();
        if (nome.length < 3) {
          definirErro("nomeCompleto", nome.length === 0 ? "Informe o nome completo" : "Informe pelo menos 3 caracteres");
        } else {
          definirErro("nomeCompleto", undefined);
        }
        break;
      }

      case "cargo": {
        const cargo = String(valor).trim();
        if (!cargo) {
          definirErro("cargo", "Informe seu cargo");
        } else {
          definirErro("cargo", undefined);
        }
        break;
      }

      case "experiencia": {
        const anos = Number(valor);
        if (isNaN(anos) || anos < 1) {
          definirErro("experiencia", "Você deve ter pelo menos 1 ano de experiência");
        } else {
          definirErro("experiencia", undefined);
        }
        break;
      }

      case "tecnologia": {
        const tec = String(valor).trim();
        if (!tec) {
          definirErro("tecnologia", "Informe sua tecnologia favorita");
        } else {
          definirErro("tecnologia", undefined);
        }
        break;
      }

      default:
        break;
    }
  }

  const temErros = Object.values(form.erros).some((v) => !!v);
  const formIncompleto =
    !form.dados.nomeCompleto ||
    !form.dados.cargo ||
    !form.dados.tecnologia ||
    form.dados.experiencia <= 0 ||
    !form.dados.corCartao;
  const btnDesativado = temErros || formIncompleto;

  return (
    <SafeAreaView style={styles.tela}>
      <KeyboardAvoidingView behavior="padding" style={styles.tela}>
        <ScrollView contentContainerStyle={styles.corpo} keyboardShouldPersistTaps="handled">
          <View style={styles.cabecalho}>
            <Text style={styles.tituloTela}>Cadastro</Text>
            <Text style={styles.subtituloTela}>Preencha seus dados de dev</Text>
          </View>

          <View style={styles.formularioContainer}>
            <View style={styles.listaCampos}>
              <CampoDigitacao
                aoMudarTexto={(txt) => atualizarCampo("nomeCompleto", txt)}
                rotulo="Nome Completo"
                placeholder="Alexandre Bicudo Mendes Silva"
                valorPadrao={form.dados.nomeCompleto}
                aoMudar={() => checarCampo("nomeCompleto")}
                aoPerderFoco={() => checarCampo("nomeCompleto")}
                mensagemErro={form.erros.nomeCompleto}
              />

              <CampoDigitacao
                aoMudarTexto={(txt) => atualizarCampo("cargo", txt)}
                rotulo="Cargo"
                placeholder="Desenvolvedor backend"
                valorPadrao={form.dados.cargo}
                aoMudar={() => checarCampo("cargo")}
                aoPerderFoco={() => checarCampo("cargo")}
                mensagemErro={form.erros.cargo}
              />

              <CampoDigitacao
                aoMudarTexto={(txt) => atualizarCampo("empresa", txt)}
                rotulo="Empresa"
                placeholder="Fontdata tecnologia"
                valorPadrao={form.dados.empresa}
                mensagemErro={form.erros.empresa}
              />

              <CampoDigitacao
                aoMudarTexto={(txt) => atualizarCampo("experiencia", parseInt(txt) || 0)}
                rotulo="Anos de Experiência"
                placeholder="2"
                keyboardType="numeric"
                valorPadrao={form.dados.experiencia > 0 ? form.dados.experiencia.toString() : ""}
                aoMudar={() => checarCampo("experiencia")}
                aoPerderFoco={() => checarCampo("experiencia")}
                mensagemErro={form.erros.experiencia}
              />

              <CampoDigitacao
                aoMudarTexto={(txt) => atualizarCampo("tecnologia", txt)}
                rotulo="Tecnologia Favorita"
                placeholder="Spring boot"
                valorPadrao={form.dados.tecnologia}
                aoMudar={() => checarCampo("tecnologia")}
                aoPerderFoco={() => checarCampo("tecnologia")}
                mensagemErro={form.erros.tecnologia}
              />
            </View>

            <SeletorDeCores
              aoSelecionar={(cod) => atualizarCampo("corCartao", cod)}
              opcoes={CORES_DISPONIVEIS}
            />
          </View>

          <View style={styles.rodape}>
            <BotaoPadrao
              aoPressionar={submeterForm}
              texto="Gerar Cartão"
              desabilitado={btnDesativado}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: THEME.colors.white,
  },
  corpo: {
    paddingHorizontal: 23,
    paddingBottom: 24,
    gap: 11,
  },
  cabecalho: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 3,
    marginTop: 10,
  },
  tituloTela: {
    color: THEME.colors.heading,
    fontSize: THEME.text.heading.h3,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
  },
  subtituloTela: {
    color: THEME.colors.subtitle,
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
  },
  formularioContainer: {
    marginTop: 8,
  },
  listaCampos: {
    gap: 11,
    marginBottom: 9,
  },
  rodape: {
    flexDirection: "column",
    gap: 13,
    marginTop: 10,
    marginBottom: 20,
  },
});
