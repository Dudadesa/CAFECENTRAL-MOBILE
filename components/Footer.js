import { Text, StyleSheet, View} from 'react-native'
import {Link} from 'expo-router'

export default function Footer(){
  return(
    // ==========RODAPE=========
    <View style={styles.rodape}>
    {/* TEXTO DE DIREITOS AUTORAIS*/}
    <Text style={styles.textoRodape}> 2026 Cafe Central todos os direitos reservados </Text>

    {/* Links de contato*/}
    <Link href='/contato'>
    <Text style={styles.linkRodape}>Entre em contato</Text>
    </Link>
    </View>
  )
}


const styles = StyleSheet.create({
    rodape: {
      backgroundColor: '#21282A',
      padding: 20,
      alignItems: 'center',
      gap:8,
    },

    textoRodape: {
      color : '#ffffff',
      textAlign: 'center',
      marginBottom: 8,
    },

    linkRodape: {
      color: '#e7c78a',
      fontWeight: 'bold',
      textDecorationLine: 'none'
    },
})