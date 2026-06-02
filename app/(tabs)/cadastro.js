import {
    View, // Para agrupar elementos (= div)
    Text, // Para exibir textos (= p, h1...)
    TouchableOpacity, // Para botões clicáveis (= button)
    ScrollView, // Para a área principal com scroll,
    StyleSheet // Para aplicar estilo na página
   } from 'react-native'; // Importa os componentes View e Text
   import { Link } from 'expo-router';
  import { TextInput } from 'react-native-web';
   
  export default function Cadastro() {
   return (
      <ScrollView>
          { /*=========== TOPO (HEADER) =============*/}
          { /*=========== Área de cabeçalho com logo e menu =============*/}
          <View style={styles.topo}>
  
          { /* Logo do sistema */}
          <Link href = '/'>
            <Text style={styles.logoP1}>Cafe</Text>
            <Text style={styles.logoP2}>Central</Text>
          </Link>
  
            { /* Menu de Navegação */}
            <View style={styles.menu}>
              <Link href= '/'>
                <Text style={styles.menuItem}> Início </Text>
              </Link>
              <Link href= '/sobre'>
                <Text style={styles.menuItem}> Sobre </Text>
              </Link>
              <Link href= '/contato'>
                <Text style={styles.menuItem}> Contato </Text>
              </Link>
            </View>
          </View>
  
          { /*=========== CONTEUDO DA PAGINA  =============*/}
          <View style={styles.container}>
            <View style={styles.paginaAuth}>
            <Text style={styles.tituloAuth}>
                  Cadastro
                </Text>
                <Text style={styles.textoAuth}>
                  Crie sua conta para acessar os nossos cardapios
                </Text>
             
                <View style={styles.blocoAuth}>
                  <Text style={styles.label}>Nome</Text>
                  <TextInput placeholder='Digite seu nome'
                            style={styles.input}>
                  </TextInput>
               
                  <Text style={styles.label}>Email</Text>
                  <TextInput placeholder='Digite seu email'
                             keyboardType='email-address'
                             style={styles.input}>
                  </TextInput>
  
                  <Text style={styles.label}>Senha</Text>
                  <TextInput placeholder='Digite sua senha'
                             secureTextEntry={true}
                             style={styles.input}>
                  </TextInput>
  
                  <Text style={styles.label}>Corfirma senha</Text>
                  <TextInput placeholder='Digite sua novamente'
                             secureTextEntry={true}
                             style={styles.input}>
                  </TextInput>
  
                  <TouchableOpacity style = {styles.btnPrimario}>
                    <Text style= {styles.textoBotao}>
                      Cadastrar
                    </Text>
                  </TouchableOpacity>
  
                  <Text style={styles.mensagemAuth}></Text>
  
                  <Text style={styles.linkAuth}>
                    Ja possui uma conta?
                  </Text>
                  <Link style={styles.linkAuthDestaque} href='/login'>
                    <Text>
                     Fazer Login
                    </Text>
                  </Link>
  
  
              </View>
            </View>
          </View>
  
  
          { /*=========== RODAPÉ =============*/}
          { /* Parte final da página */}
          <View style={styles.rodape}>
            { /* Texto de direitos de autorais */}
            <Text style={styles.textoRodape}> 2026 CafeCentral. Todos os direitos reservados.</Text>
  
            { /* Links de Contato */}
            <Link href='/contato'>
              <Text style={styles.linkRodape}>Entre em contato</Text>
            </Link>
          </View>
  
      </ScrollView>
   );
  }
  
  const styles = StyleSheet.create(
    {
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
        color: 'ffffff',
      },
     
      container:{
        padding: 20,
      },
  
      PaginaAuth: {
        paddingVertical: 40,
        paddingHorizontal: 20,
      },
  
      blocoAuth: {
        backgroundColor:'',
        gap: 10,
        padding: 30,
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },
      },
     
      mensagemAuth:{
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        marginHeight: 20,
      },
  
      linkAuth: {
        textAlign:'center',
        marginTop: 20,
        color: '#222',
        fontWeight: 'bold',
      },
  
      linkAuthDestaque: {
        color:"#e7c78a",
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
      },
  
      tituloAuth:{
         color: '#e7c78a',
         fontSize: 28,
         fontWeight: 'bold',
         textAlign: 'center',
         marginBottom: 10,
      },
  
      textoAuth: {
        textAlign: 'center',
        marginBottom: 20,
        color: '#e7c78a',
        fontSize: 16
      },
  
      label: {
        fontWeight: 'bold',
        color: '#e7c78a'
      },
  
      input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#e7c78a',
        borderRadius: 6,
        fontSize: 16,
        background: '#e7c78a'
      },
  
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
  
      tituloDestaque : {
        color: '#e7c78a',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
      }
  
    }
  )