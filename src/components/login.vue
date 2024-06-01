<template>
  <div id="app">
    <div class="background">
      <div class="top-bar">
        <div class="logo_topbar"></div>
        <div class="cliente" :class="{ 'cliente-underlined': showLogin === 'cliente' }" @click="toggleView('cliente')">Cliente</div>
        <div class="advogado" :class="{ 'advogado-underlined': showLogin === 'advogado' }" @click="toggleView('advogado')">Advogado</div>
        <div class="contato"></div>
      </div>
      <div class="content">
        <div class="imagem"></div>
        <div class="texto"></div>
      </div>
      <div>
        <div v-if="showLogin === 'cliente'" class="login">
          <div class="ola_cliente" :class="{ 'fade-in': showLogin === 'cliente', 'fade-out': showLogin === 'advogado'}">Seja bem <br> vindo, Cliente!</div>
          <div class="not_cliente">Não é cliente? <br> Entrar como <span class="cliente_to_adv">Advogado</span></div>
          <div class="container_email">
            <div class="email_img"></div>
            <input class="input_email" type="text" placeholder="Endereço de email">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_senha">
            <div class="senha_img"></div>
            <input type="checkbox" class="show_hide" @click="togglePasswordType">
            <input :class="['input_senha', isPassword ? 'password' : 'text']"
              :type="isPassword ? 'password' : 'text'"
              placeholder="Senha">
          </div>
          <div class="barra_inferiorsenha"></div>
          <div class="forgot_senha">Esqueceu sua senha?</div>
          <button class="button_login" type="button" @click="toggleView">LOGIN</button>
          <div class="not_cadastro">Não tem uma conta? <br> <span class="cadastrar" @click="toggleView">Cadastrar-se</span></div>
        </div>

        <div v-else class="login_adv" :class="{ 'fade-in': showLogin === 'advogado', 'fade-out': showLogin === 'cliente'}">
          <div class="ola_adv">Seja bem <br> vindo, Advogado!</div>
          <div class="not_adv">Não é advogado? <br> Entrar como <span class="adv_to_cliente" @click="toggleView">Cliente</span></div>
          <div class="container_email_adv">
            <div class="email_img_adv"></div>
            <input class="input_email_adv" type="text" placeholder="Endereço de email">
            <div class="barra_inferior_adv"></div>
          </div>
          <div class="container_senha">
            <div class="senha_img_adv"></div>
            <input type="checkbox" class="show_hide_adv" @click="togglePasswordType">
            <input :class="['input_senha_adv', isPassword ? 'password' : 'text']"
              :type="isPassword ? 'password' : 'text'"
              placeholder="Senha">
          </div>
          <div class="barra_inferiorsenha_adv"></div>
          <div class="forgot_senha_adv">Esqueceu sua senha?</div>
          <button class="button_login_adv" type="button">LOGIN</button>
          <div class="not_cadastro_adv">Não tem uma conta? <br> <span class="cadastrar_adv">Cadastrar-se</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      showLogin: 'cliente', // Inicia com o formulário de login do cliente
      isPassword: true
    }
  },
  methods: {
    togglePasswordType () {
      this.isPassword = !this.isPassword
    },
    ir_cadastro () {
      this.$router.push('/cadastro')
    },
    toggleView (view) {
      this.showLogin = view
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

#app {
  height: 100vh;
  text-align: center;
}

.background {
  background-image: url('~@/assets/background.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  position: relative;
}

.top-bar {
  background-color: #A40000;
  height: 8.33vh;
}

.content {
  position: absolute;
  top: 30.65%;
  left: 10.73%;
  width: 25.68vw;
  height: 38.43vh;
}

.texto {
  position: absolute;
  bottom: 4%;
  left: 0;
  background-image: url('~@/assets/titulo.png');
  background-size: cover;
  height: 10.74vh;
  aspect-ratio: 475 / 100;
}

.imagem {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-image: url('~~@/assets/logo.png');
  background-size: cover;
  height: 23.98vh;
  aspect-ratio: 156.76 / 100;
}

.cliente {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 36px;
  color: white;
  display: inline-block;
  cursor: pointer;
  position: absolute;
  top: 1%;
  left: 10.73%;
}

.cliente:hover {
  color: #8d8d8d;
}

.cliente-underlined {
  text-decoration: underline;
}

.advogado {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 36px;
  color: white;
  display: inline-block;
  position: absolute;
  top: 1%;
  left: 23.07%;
  cursor: pointer;
}

.advogado:hover {
  color: #8d8d8d;
}

.advogado-underlined {
  text-decoration: underline;
}

.logo_topbar {
  position: absolute;
  background-image: url('~@/assets/logo.png');
  background-size: cover;
  width: 6.04vw;
  height: 6.9vh;
  top: 0.85%;
  left: 1.35%;
}

.contato {
  position: absolute;
  background-image: url('~@/assets/contato.png');
  background-size: cover;
  width: 9.06vw;
  height: 5.19vh;
  top: 1%;
  left: 89.58%;
  cursor: pointer;
}

.contato:hover {
 background-image: url('~@/assets/contatohover.png');
 top: 1%;
}

.login {
  background-color: white;
  border-radius: 13%;
  height: 57.04vh;
  width: 22.5vw;
  position: absolute;
  left: 62.97%;
  top: 21.48%;
}

.ola_cliente {
  position: relative;
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 600;
  top: 3%;
}

.not_cliente {
  position: relative;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 600;
  top: 5%;
  text-align: left;
  left: 13%;
  color: #959595;
}

.cliente_to_adv {
  color: #A40000;
  cursor: pointer;
}

.cliente_to_adv:hover {
  color: #b45f5f;
  cursor: pointer;
}

.container_email {
  background-color: #ffffff;
  width: 16.56vw;
  height: 3.43vh;
  top: 10%;
  left: 13%;
  position: relative;
}

.email_img {
  position: relative;
  background-image: url('~@/assets/email.png');
  background-size: cover;
  width: 1.77vw;
  height: 3.15vh;
  bottom: 15%;
  left: 1%;
}

.input_email {
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 600;
  color: #6c6c6c;
  outline: none;
  position: relative;
  left: 5%;
  bottom: 90%;
  border: none;
}

.input_email:focus {
  outline: #8d8d8d00;
}

.barra_inferior {
  background-color: #959595;
  width: 16.56vw;
  height: 0.3vh;
  position: relative;
  bottom: 86%;
}

.container_senha {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff00;
  width: 16.56vw;
  height: 3.43vh;
  top: 15%;
  left: 13%;
  position: relative;
}

.senha_img {
  position: relative;
  background-image: url('~@/assets/password.png');
  background-size: cover;
  width: 1.77vw;
  height: 3.15vh;
  left: 1%;
  bottom: 5%;
}

.input_senha {
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 600;
  color: #6c6c6c;
  outline: none;
  position: relative;
  border: none;
  right: 15%;
  width: 12vw;
}

.input_senha:focus {
  outline: #8d8d8d00;
}

.show_hide {
  position: relative;
  background-image: url('~@/assets/password_hide.png');
  background-size: cover;
  width: 1.67vw;
  height: 2.96vh;
  left: 73%;
  cursor: pointer;
  border: none;
  background-color: #6c6c6c00;
}

.show_hide :checked {
  position: relative;
  background-image: url('~@/assets/password_show.png');
  background-size: cover;
  width: 1.67vw;
  height: 2.96vh;
  left: 73%;
  cursor: pointer;
  border: none;
  background-color: #6c6c6c00;
}

.barra_inferiorsenha {
  background-color: #959595;
  width: 16.56vw;
  height: 0.3vh;
  position: relative;
  top: 15%;
  left: 13%;
}

.forgot_senha {
  position: relative;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 600;
  top: 18%;
  text-align: left;
  left: 13%;
  color: #959595;
  cursor: pointer;
}

.forgot_senha:hover {
  color: #6c6c6c;
}

.button_login {
  position: relative;
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  background-color: #A40000;
  border: 3px solid #A40000;
  border-radius: 5%;
  width: 16.56vw;
  height: 4.91vh;
  top: 22%;
  cursor: pointer;
}

.button_login:hover {
  color: #8d8d8d;
}

.not_cadastro {
  position: relative;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 600;
  top: 25%;
  text-align: center;
  color: #959595;
}

.cadastrar {
  color: #A40000;
  cursor: pointer;
}

.cadastrar:hover {
  color: #b45f5f;
  cursor: pointer;
}

.login_adv {
  background-color: white;
  border-radius: 13%;
  height: 57.04vh;
  width: 22.5vw;
  position: absolute;
  left: 32.97%;
  top: 21.48%;
}

.ola_adv {
  position: relative;
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 600;
  top: 3%;
}

.not_adv {
  position: relative;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 600;
  top: 5%;
  text-align: left;
  left: 13%;
  color: #959595;
}

.adv_to_cliente {
  color: #A40000;
  cursor: pointer;
}

.adv_to_cliente:hover {
  color: #b45f5f;
  cursor: pointer;
}

.container_email_adv {
  background-color: #ffffff;
  width: 16.56vw;
  height: 3.43vh;
  top: 10%;
  left: 13%;
  position: relative;
}

.email_img_adv {
  position: relative;
  background-image: url('~@/assets/email.png');
  background-size: cover;
  width: 1.77vw;
  height: 3.15vh;
  bottom: 15%;
  left: 1%;
}

.input_email_adv {
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 600;
  color: #6c6c6c;
  outline: none;
  position: relative;
  left: 5%;
  bottom: 90%;
  border: none;
}

.input_email_adv:focus {
  outline: #8d8d8d00;
}

.barra_inferior_adv {
  background-color: #959595;
  width: 16.56vw;
  height: 0.3vh;
  position: relative;
  bottom: 86%;
}

.container_senha_adv {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff00;
  width: 16.56vw;
  height: 3.43vh;
  top: 15%;
  left: 13%;
  position: relative;
}

.senha_img_adv {
  position: relative;
  background-image: url('~@/assets/password.png');
  background-size: cover;
  width: 1.77vw;
  height: 3.15vh;
  left: 1%;
  bottom: 5%;
}

.input_senha_adv {
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 600;
  color: #6c6c6c;
  outline: none;
  position: relative;
  border: none;
  right: 15%;
  width: 12vw;
}

.input_senha_adv:focus {
  outline: #8d8d8d00;
}

.show_hide_adv {
  position: relative;
  background-image: url('~@/assets/password_hide.png');
  background-size: cover;
  width: 1.67vw;
  height: 2.96vh;
  left: 73%;
  cursor: pointer;
  border: none;
  background-color: #6c6c6c00;
}

.barra_inferiorsenha_adv {
  background-color: #959595;
  width: 16.56vw;
  height: 0.3vh;
  position: relative;
  top: 15%;
  left: 13%;
}

.forgot_senha_adv {
  position: relative;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 600;
  top: 18%;
  text-align: left;
  left: 13%;
  color: #959595;
  cursor: pointer;
}

.forgot_senha_adv:hover {
  color: #6c6c6c;
}

.button_login_adv {
  position: relative;
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  background-color: #A40000;
  border: 3px solid #A40000;
  border-radius: 5%;
  width: 16.56vw;
  height: 4.91vh;
  top: 22%;
  cursor: pointer;
}

.button_login_adv:hover {
  color: #8d8d8d;
}

.not_cadastro_adv {
  position: relative;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 600;
  top: 25%;
  text-align: center;
  color: #959595;
}

.cadastrar_adv {
  color: #A40000;
  cursor: pointer;
}

.cadastrar_adv:hover {
  color: #b45f5f;
  cursor: pointer;
}

.fade-in {
  opacity: 1;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
}

.fade-out {
  opacity: 0;
  transition: opacity 2.5s ease-in-out;
  pointer-events: none; /* Impede a interação com elementos durante a transição */
}

</style>
