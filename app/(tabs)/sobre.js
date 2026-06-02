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