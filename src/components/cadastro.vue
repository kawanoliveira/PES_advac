<template>
  <div id="pag_cadastro">
    <div class="background_cadastro">
      <div class="top-bar">
        <div class="cliente" :class="{ 'cliente-underlined': showLogin === 'cliente' }" @click="toggleView('cliente')">Cliente</div>
        <div class="advogado" :class="{ 'advogado-underlined': showLogin === 'advogado' }" @click="toggleView('advogado')">Advogado</div>
        <div class="logo_topbar"></div>
        <div class="contato" @click="ir_erro"></div>
      </div>
      <transition name="slide-fade2">
        <div class="fundo_cadastro_adv" v-if="showLogin === 'advogado'">
          <div class="texto_cadastro_adv">Cadastro como Advogado</div>
          <div class="container_input" name="nome">
            <input class="input_informacao" type="text" placeholder="Nome">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="cpf">
            <input class="input_informacao" placeholder="CPF" v-mask="'999.999.999-99'">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="cnpj">
            <input class="input_informacao" type="text" placeholder="CNPJ ou OAB" v-mask="'99.999.999/9999-99'">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="tel1">
            <input class="input_informacao" placeholder="Telefone 1" v-mask="'(99) 99999-9999'">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="endereco">
            <input class="input_informacao" type="text" placeholder="Endereço">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="tel2">
            <input class="input_informacao" placeholder="Telefone 2 (opcional)" v-mask="'(99) 99999-9999'">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="email">
            <input class="input_informacao" type="email" placeholder="Endereço de email">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="email_confirma">
            <input class="input_informacao" type="text" placeholder="Confirmar endereço de email">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="senha">
            <input class="input_informacao" type="text" placeholder="Senha">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="senha_confirma">
            <input class="input_informacao" type="text" placeholder="Confirmar senha">
            <div class="barra_inferior"></div>
          </div>
            <button class="button_cadastro" type="button">CADASTRAR-SE</button>
            <div class="already_cadastro_adv">Já tem uma conta? <span class="fazer_login_adv" @click="ir_login">Realizar Login</span>
          </div>
        </div>
      </transition>

      <transition name="slide-fade2">
        <div class="fundo_cadastro_cli" v-if="showLogin === 'cliente'">
          <div class="texto_cadastro_adv">Cadastro como Cliente</div>
          <div class="container_input" name="nome">
            <input class="input_informacao" type="text" placeholder="Nome">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="cpf">
            <input class="input_informacao" placeholder="CPF" v-mask="'999.999.999-99'">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="tel1_cli">
            <input class="input_informacao" placeholder="Telefone 1" v-mask="'(99) 99999-9999'">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="tel2_cli">
            <input class="input_informacao" placeholder="Telefone 2 (opcional)" v-mask="'(99) 99999-9999'">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="endereco">
            <input class="input_informacao" type="text" placeholder="Endereço">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="email">
            <input class="input_informacao" type="email" placeholder="Endereço de email">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="email_confirma">
            <input class="input_informacao" type="text" placeholder="Confirmar endereço de email">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="senha">
            <input class="input_informacao" type="text" placeholder="Senha">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="senha_confirma">
            <input class="input_informacao" type="text" placeholder="Confirmar senha">
            <div class="barra_inferior"></div>
          </div>
            <button class="button_cadastro_cli" type="button" @click="ir_home">CADASTRAR-SE</button>
            <div class="already_cadastro_adv">Já tem uma conta? <span class="fazer_login_adv" @click="ir_login">Realizar Login</span>
          </div>
        </div>
      </transition>
      <div class="container_erro_cad">
        <div class="erro_cad" v-if="erro === 'erro_email'">Emails diferentes</div>
        <div class="erro_cad" v-if="erro === 'erro_senha'">Senhas diferentes</div>
        <div class="erro_cad" v-if="erro === 'erro_campos'">Preencha todos os campos</div>
        <div class="erro_cad" v-if="erro === 'erro_cpf'">CPF invalido</div>
        <div class="erro_cad" v-if="erro === 'erro_telefone'">Telefone invalido</div>
      </div>
    </div>
  </div>
</template>

<script>
import AwesomeMask from 'awesome-mask'
export default{
  name: 'App',
  data () {
    return {
      showLogin: 'cliente',
      erro: 'erro_cpf'
    }
  },
  methods: {
    ir_login () {
      this.$router.push('/')
    },
    ir_home () {
      this.$router.push('/home')
    },
    ir_erro () {
      this.$router.push('/erro')
    },
    toggleView (view) {
      this.showLogin = view
      this.erro = 'none'
    }
  },
  directives: {
    'mask': AwesomeMask
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.erro_cad {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 16px;
  color: rgb(197, 0, 0);
  text-align: center;
  top: 1%;
  left: 10.73%;
}

.container_erro_cad {
  position: absolute;
  top: 81%;
  left: 52%;
  align-items: center;
  width: 17.5vw;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

#app {
  height: 100vh;
  text-align: center;
  overflow: hidden;
}

.background_cadastro {
  background-image: url('~@/assets/background_cadastro.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  overflow: hidden;
  overflow-x: hidden;
}

.top-bar {
  background-color: #A40000;
  height: 8.33vh;
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
  aspect-ratio: 100 / 33;
  height: 5.19vh;
  top: 1.5%;
  left: 89.58%;
  cursor: pointer;
}

.contato:hover {
  background-image: url('~@/assets/contatohover.png');
  top: 1%;
}

.fundo_cadastro_adv {
  background-color: white;
  border-radius: 5%;
  height: 81.48vh;
  width: 44.27vw;
  position: absolute;
  left: 27.08%;
  top: 13.44%;
}
.fundo_cadastro_cli {
  background-color: white;
  border-radius: 5%;
  height: 81.48vh;
  width: 44.27vw;
  position: absolute;
  left: 27.08%;
  top: 13.44%;
}

.texto_cadastro_adv {
  position: relative;
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 600;
  top: 3%;
  left: 25%;
}
.container_input {
  background-color: #ffffff;
  width: 16.56vw;
  height: 3.43vh;
  position: relative;
}

.input_informacao {
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 600;
  color: #6c6c6c;
  outline: none;
  position: relative;
  bottom: 90%;
  border: none;
  width: 16.56vw;
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

.button_cadastro {
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
  top: 40.5%;
  left: 57%;
  cursor: pointer;
}

.button_cadastro:hover {
  color: #8d8d8d;
}

.button_cadastro_cli {
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
  top: 44.6%;
  left: 57%;
  cursor: pointer;
}

.button_cadastro_cli:hover {
  color: #8d8d8d;
}

.already_cadastro_adv {
  position: absolute;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 600;
  top: 89.56%;
  left: 5.17%;
  text-align: center;
  color: #959595;
}

.fazer_login_adv {
  color: #A40000;
  cursor: pointer;
}

.fazer_login_adv:hover {
  color: #b45f5f;
  cursor: pointer;
}

[name="nome"] {
  left: 6%;
  top: 12%;
}

[name="cnpj"] {
  left: 6%;
  top: 17%;
}

[name="tel1_cli"] {
  left: 6%;
  top: 17%;
}

[name="endereco"] {
  left: 6%;
  top: 22%;
}

[name="email"] {
  left: 6%;
  top: 32%
}

[name="senha"] {
  left: 6%;
  top: 34%;
}

[name="cpf"] {
  left: 57%;
  top: 7.8%;
}

[name="tel1"] {
  left: 57%;
  top: 12.8%;
}

[name="tel2_cli"] {
  left: 57%;
  top: 12.8%;
}

[name="tel2"] {
  left: 57%;
  top: 17.8%;
}

[name="email_confirma"] {
  left: 57%;
  top: 27.8%;
}

[name="senha_confirma"] {
  left: 57%;
  top: 29.8%;
}

.slide-fade2-enter-active {
  transition: opacity 1s ease;
}

.slide-fade2-leave-active {
  transition: opacity 0.5s ease;
}

.slide-fade2-enter {
  opacity: 0;
}

.slide-fade2-leave-to {
  opacity: 0;
}

</style>
