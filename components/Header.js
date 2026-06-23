import {View, Text, StyleSheet} from 'react-native'
import  {Link} from 'expo-router'

export default function Header({ativo}){
    return(
       
              //=========== TOPO (HEADER) =============
                    //=========== Área de cabeçalho com logo e menu =============
                    <View style={styles.topo}>
            
                    { /* Logo do sistema */}
                      <Link href='/'>
                        <Text style={styles.logoP1}>Cafe</Text>
                        <Text style={styles.logoP2}>Central</Text>
                      </Link>
            
                      { /* Menu de Navegação */}
                      <View style={styles.menu}>
                        <Link href='/'>
                          <Text style={[styles.menuItem, ativo === "inicio" && styles.ativo]}> Início </Text>
                        </Link>
                        <Link href='/sobre'>
                          <Text style={[styles.menuItem, ativo === "sobre" && styles.ativo ]}> Sobre </Text>
                        </Link>
                        <Link href='/contato'>
                          <Text style={[styles.menuItem, ativo === "contato" && styles.ativo ]}> Contato </Text>
                        </Link>
                        <Link href='/login'>
                          <Text style={[styles.menuItem, ativo === "login" && styles.ativo ]}>Login</Text>
                        </Link>
                      </View>
                    </View>
        
    )
}

const styles =StyleSheet.create({
    topo: {
      backgroundColor: '#21282A',
      padding:20,
      alignItems: 'center',
      gap: 10,
    },

    logoP1: {
      color:'#ffffff',
      fontSize:24,
      fontWeight: 'bold',
    },

    logoP2: {
      color:'#e7c78a',
      fontSize:24,
      fontWeight: 'bold',
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
})