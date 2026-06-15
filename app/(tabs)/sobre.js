import {
  View,// Para agrupar elementos (= div)
  Text,// Para exibir textos (= p, h1...)
  TouchableOpacity, // Para botões clicáveis (= button) 
  ScrollView, // Para a área principal com scroll
  StyleSheet, //Para aplicar estilo na pagina
  } from 'react-native';
  import { Link } from 'expo-router';

export default function Sobre() { {/* Define e exporta o componente principal da tela */}
  return ( // O que está aqui dentro será exibido na tela
    <ScrollView>
      {/* ============== TOPO (HEADER) ============== */}
      {/* ============== Área de cabeçalho com logo e menu ============== */}
      <View style={styles.topo}>
      {/* ============== Logo do sistema ============== */}
      <Link href='/'>
          <Text style={styles.logoP1}>Café</Text>
          <Text style={styles.logoP2}>Central</Text>
      </Link>
    
    {/* ============== Menu de Navegação ============== */}
      <View style={styles.menu}>
        <Link href='/'>
          <Text style={styles.menuItem}> Início </Text> {/* ============== Item Ativo ============== */}
        </Link>
        <Link href='/sobre'>
          <Text style={[styles.menuItem, styles.ativo]}> Sobre </Text>
        </Link>
        <Link href='/contato'>
          <Text style={styles.menuItem}> Contato </Text>
        </Link>
    </View>
    </View>

    {/* ============== CONTEÚDO DA PÁGINA ============== */}

    <View style={styles.sobre}>
              <Text style={styles.titulo}>Sobre a CaféCentral</Text>
              <Text style={styles.texto}>A CafeCentral e uma cafeteria criada
              para Oferecer um ambiente acolhedor com produtos de qualidade e
              atendimento proximo ao cliente </Text>

              <Text style={styles.subtitulo}>Nossa missao</Text>
              <Text style={styles.texto}>Oferecer cafes, lanches e bons momentos aos clientes</Text>

              <Text style={styles.subtitulo}>Nossos Produtos</Text>
              <View style={styles.lista}>
                <Text style={styles.itemLista}>• Qualidade</Text>
                <Text style={styles.itemLista}>• Acolhimento</Text>
                <Text style={styles.itemLista}>• Respeito </Text>
              </View>
          </View>

    {/* ============== RODAPÉ ============== */}
    {/* Parte final da página */}
    <View style={styles.rodape}>
      {/* Texto de direitos autorais*/}
      <Text style={styles.textoRodape}> 2026 CaféCentral. Todos os direitos reservados.</Text>

      {/* Links de Contato*/}
      <Link href='/contato'>
        <Text style={styles.linkRodape}>Entre Contato</Text>
      </Link>
    </View>

    </ScrollView>
  );
}  

const styles = StyleSheet.create(
  {
    topo:{
      backgroundColor: '#21282A',
      padding: 20,
      alignItems: 'Center',
      gap: 10,
    },

    logoP1: {
      color: '#ffffff',
      fontSize: 24,
      fontWeight: 'bold'
    },

    logoP2: {
      color: '#e7c78a',
      fontSize: 24,
      fontWeight: 'bold'
    },

    menu: {
      marginTop: 10,
      alignItems: 'center',
      gap: 10,
    },

    menuItem: {
      color: '#e7c78a',
      fontWeight: 'bold',
    },

    ativo: {
      color: '#ffffff',
    },

    sobre: {
      padding: 20,
      backgroundColor: '#ffffff',
    },

    titulo: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 15,
      textAlign: 'center',
    },

    subtitulo: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 8,
      textAlign: 'center'
    },

    texto: {
      fontSize: 16,
      lineHeight: 24,
      textAlign: 'center',
    },

    lista: {
      marginTop: 10,
      alignItems: 'center'
    },

    itemLista: {
      fontSize: 16,
      marginBottom: 6,
    },

    rodape: {
      backgroundColor: '#21282A',
      padding: 20,
      alignItems: 'center',
      gap: 8,
    },

    textoRodape: {
      color: '#e7c78a',
      textAlign: 'center',
      marginBottom: 8,
    },

    linkRodape: {
      color: '#e7c78a',
      fontWeight: 'bold',
      textDecorationStyle: 'none',
    },

    tituloDestaque: {
      color: '#e7c78a',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20
    }
  }

)