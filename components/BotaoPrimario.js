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
    btnPrimario: {
      backgroundColor: '#e7c78a',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginTop: 10,
    },

    textoBotao: {
      color:'#ffffff',
      fontWeight: 'bold',
      textAlign:'center',
    },
})