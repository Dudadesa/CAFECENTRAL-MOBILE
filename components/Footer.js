import {TouchableOpacity, Text, StyleSheet, View} from 'react-native'
import {Link} from 'expo-router'

export default function BotaoPrimario({texto,funcao}){ 
    return(
        <TouchableOpacity style={styles.btnPrimario} onPress={funcao}>
                                    <Text style={styles.textoBotao}>{texto}</Text>
                                </TouchableOpacity>
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