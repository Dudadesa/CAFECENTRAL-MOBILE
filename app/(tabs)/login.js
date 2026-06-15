import {
  View,// Para agrupar elementos (= div)
  Text,// Para exibir textos (= p, h1...)
  TouchableOpacity, // Para botões clicáveis (= button)
  ScrollView, // Para a área principal com scroll
  StyleSheet, //Para aplicar estilo na pagina
  TextInput
  } from 'react-native';
  import { Link } from 'expo-router';
import { useState } from 'react';

export default function Login() { {/* Define e exporta o componente principal da tela */}
const[email, setEmail] = useState('');
const[senha, setSenha] = useState('');
const[mensagemSistema, setMensagemSistema] = useState('');
const[tipoMensagem, setTipoMensagem] = useState('');

function validarLogin(){
  if(email === ''){
    setMensagemSistema('Digite seu e-mail!');
    setTipoMensagem('erro');
    return
  }
  if(!email.includes ('@') || !email.includes('.com')){
    setMensagemSistema('Digite um e-mail valido!');
    setTipoMensagem('erro');
    return
  }
  if(senha === ''){
    setMensagemSistema('Digite sua senha!');
    setTipoMensagem('erro');
    return
  }
  if(senha.length < 6){
    setMensagemSistema('A senha deve ter pelo menos 6 caracteres!');
    setTipoMensagem('erro');
    return
  }
  setMensagemSistema('Login realizado com sucesso!')
  setTipoMensagem('sucesso');
}
  return ( // O que está aqui dentro será exibido na tela
    <ScrollView>
      {/* ============== TOPO (HEADER) ============== */}
      {/* ============== Área de cabeçalho com logo e menu ============== */}
      <View style={styles.topo}>
      {/* ============== Logo do sistema ============== */}
      <Link href='/'>
          <Text style={styles.logoP1}>Cafe</Text>
          <Text style={styles.logoP2}>Central</Text>
      </Link>
   
    {/* ============== Menu de Navegação ============== */}
      <View style={styles.menu}>
        <Link href='/'>
          <Text style={styles.menuItem}> Início </Text> {/* ============== Item Ativo ============== */}
        </Link>
        <Link href='/sobre'>
          <Text style={styles.menuItem}> Sobre </Text>
        </Link>
        <Link href='/contato'>
          <Text style={styles.menuItem}> Contato </Text>
        </Link>
    </View>
    </View>

    {/* ============== CONTEÚDO DA PÁGINA ============== */}
      <View style={styles.container}>
          <View style={styles.paginaAuth}>
              <Text style={styles.tituloAuth}>login</Text>
              <Text style={styles.textoAuth}> Entre com seu e-mail e senha para acessar os cursos.</Text>

              <View style={styles.blocoAuth}>
                  {/* CAMPO DE E-MAIL */}
                  <Text style={styles.label}>Email</Text>
                  <TextInput placeholder='digite seu e-mail'
                             keyboardType='email-address'
                             value=  {email}
                             onChangeText={setEmail}
                             style={styles.input}></TextInput>

                  {/* CAMPO DE SENHA */}
                  <Text style={styles.label}>Senha</Text>
                  <TextInput placeholder='digite sua senha'
                             secureTextEntry = {true}
                             value= {senha}
                             onChangeText={setSenha}
                             style={styles.input}></TextInput>


                  <TouchableOpacity style={styles.btnPrimario} onPress={validarLogin}>
                      <Text style={styles.textoBotao}>Login</Text>
                  </TouchableOpacity>

                  <Text style={tipoMensagem === 'erro' ?
                                  styles.menssagemErro : styles.menssagemSucesso}>{mensagemSistema}</Text>

                  <Text style={styles.linkAuth}>
                      Ainda não possui uma conta?
                  </Text>
                  <Link style={styles.linkAuthDestaque} href='/cadastro'>
                  <Text>Fazer Cadastro</Text>
                  </Link>
              </View>

          </View>
           
      </View>


    {/* ============== RODAPÉ ============== */}
    {/* Parte final da página */}
    <View style={styles.rodape}>
      {/* Texto de direitos autorais*/}
      <Text style={styles.textoRodape}> 2026 TechEduca. Todos os direitos reservados.</Text>

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
     
    menssagemSucesso:{
      textAlign: 'center',
      fontWeight: 'bold',
      color:'green',
      marginTop: 15,
    },

    menssagemErro: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'red',
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