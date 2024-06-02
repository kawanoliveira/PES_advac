<template>
  <div id="app">
    <div class="background">
      <div class="top-bar">
        <div class="logo_topbar"></div>
        <div class="cliente" :class="{ 'cliente-underlined': showLogin === 'cliente' }" @click="toggleView('cliente')">Cliente</div>
        <div class="advogado" :class="{ 'advogado-underlined': showLogin === 'advogado' }" @click="toggleView('advogado')">Advogado</div>
        <div class="contato" @click="ir_erro"></div>
      </div>
      <div class="content">
        <div class="imagem"></div>
        <div class="texto"></div>
      </div>
      <div>
        <transition name="slide-fade">
          <div v-if="showLogin === 'cliente'" class="login">
            <div class="ola_cliente">Seja bem <br> vindo, Cliente!</div>
            <div class="not_cliente">Não é cliente? <br> Entrar como <span class="cliente_to_adv" @click="toggleView('advogado')">Advogado</span></div>
            <div class="container_email">
              <div class="email_img"></div>
              <input class="input_email" type="text" placeholder="Endereço de email">
              <div class="barra_inferior"></div>
            </div>
            <div class="container_senha">
              <div class="senha_img"></div>
              <div class="show_hide_adv_container">
                <div v-if="isPassword" class="show_hide_adv_esconder"></div>
                <div v-else class="show_hide_adv_mostrar"></div>
                <input type="checkbox" class="checkbox" @click="togglePasswordType">
              </div>
              <input :class="['input_senha', isPassword ? 'password' : 'text']"
                :type="isPassword ? 'password' : 'text'"
                placeholder="Senha">
            </div>
            <div class="barra_inferiorsenha"></div>
            <div class="forgot_senha" @click="ir_erro">Esqueceu sua senha?</div>
            <button class="button_login" type="button" @click="ir_home">LOGIN</button>
            <div class="not_cadastro">Não tem uma conta? <br> <span class="cadastrar" @click="ir_cadastro">Cadastrar-se</span></div>
          </div>
        </transition>
        <transition name="slide-fade">
          <div v-if="showLogin === 'advogado'" class="login_adv">
            <div class="ola_adv">Seja bem <br> vindo, Advogado!</div>
            <div class="not_adv">Não é advogado? <br> Entrar como <span class="adv_to_cliente" @click="toggleView('cliente')">Cliente</span></div>
            <div class="container_email_adv">
              <div class="email_img_adv"></div>
              <input class="input_email_adv" type="text" placeholder="Endereço de email">
              <div class="barra_inferior_adv"></div>
            </div>
            <div class="container_senha">
              <div class="senha_img_adv"></div>
              <div class="show_hide_adv_container">
                <div v-if="isPassword" class="show_hide_adv_esconder"></div>
                <div v-else class="show_hide_adv_mostrar"></div>
                <input type="checkbox" class="checkbox" @click="togglePasswordType">
              </div>
              <input :class="['input_senha_adv', isPassword ? 'password' : 'text']"
                :type="isPassword ? 'password' : 'text'"
                placeholder="Senha">
            </div>
            <div class="barra_inferiorsenha_adv"></div>
            <div class="forgot_senha_adv" @click="ir_erro">Esqueceu sua senha?</div>
            <button class="button_login_adv" type="button" @click="ir_home">LOGIN</button>
            <div class="not_cadastro_adv">Não tem uma conta? <br> <span class="cadastrar_adv" @click="ir_cadastro">Cadastrar-se</span></div>
          </div>
        </transition>
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
    toggleView (view) {
      this.showLogin = view
    },
    ir_cadastro () {
      this.$router.push('/cadastro')
    },
    ir_home () {
      this.$router.push('/home')
    },
    ir_erro () {
      this.$router.push('/erro')
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
  overflow: hidden;
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
  left: 62.97%;
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

.show_hide_adv_container {
  position: relative;
  width: 1.67vw;
  height: 2.96vh;
  left: 73%;
  background-color: #6c6c6c00;
}

.show_hide_adv_esconder {
  background-image: url('~@/assets/password_hide.png');
  background-size: cover;
  width: 100%;
  height: 100%;
}

.show_hide_adv_mostrar {
  background-image: url('~@/assets/password_show.png');
  background-size: cover;
  width: 100%;
  height: 100%;
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

.slide-fade-enter-active {
  transition: opacity 1s ease;
  animation: slide-in 0.5s ease;
}

.slide-fade-leave-active {
  transition: opacity 0.5s ease;
  animation: slide-out 0.5s ease;
}

.slide-fade-enter {
  opacity: 0;
}

.slide-fade-leave-to {
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

.checkbox {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
</style>
