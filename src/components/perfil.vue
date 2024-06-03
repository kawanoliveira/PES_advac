<template>
  <div id="pag_cadastro">
    <div class="background_perfil">
        <div class="top-bar">
            <div class="seu_perfil">Seu Perfil</div>
            <div class="processos" @click="ir_erro">Seus processos</div>
            <div class="logo_topbar"></div>
            <div class="nome_usuario_container">
              <div class="nome_usuario" @click="ir_erro">{{ nome_usuario }}</div>
            </div>
            <div class="conversa" @click="ir_erro">Conversas</div>
            <div class="foto_usuario" @click="ir_erro"></div>
          </div>
        <div class="fundo_informacoes_perfil">
          <div class="texto_cadastro_adv">Atualizar informacoes</div>
          <div class="container_input" name="nome">
            <input class="input_informacao" type="text" placeholder="Nome" v-model="nome_usuario">
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
            <button class="button_att" type="button">Atualizar</button>
        </div>

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
      nome_usuario: 'usuario',
      showLogin: 'cliente',
      erro: 'none'
    }
  },
  methods: {
    ir_erro () {
      this.$router.push('/erro')
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

.background_perfil {
    background-color: rgb(131, 131, 131);
    background-position: center;
    min-height: 100vh;
    overflow: hidden;
    overflow-x: hidden;
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

.seu_perfil {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 36px;
  color: white;
  display: inline-block;
  cursor: pointer;
  position: absolute;
  top: 1%;
  left: 14.73%;
  text-decoration: underline;
}

.seu_perfil:hover {
  color: #8d8d8d;
}

.processos {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 36px;
  color: white;
  display: inline-block;
  position: absolute;
  top: 1%;
  left: 31.07%;
  cursor: pointer;
}

.processos:hover {
  color: #8d8d8d;
}

.top-bar {
  background-color: #A40000;
  height: 8.33vh;
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

.foto_usuario {
  height: 6.5vh;
  aspect-ratio: 1;
  background-image: url('~@/assets/user.png');
  background-size: cover;
  position: absolute;
  top: 1%;
  right: 1%;
  cursor: pointer;
}

.conversa {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 36px;
  color: white;
  display: inline-block;
  position: absolute;
  top: 1%;
  right: 35%;
  text-align: right;
  cursor: pointer;
}

.conversa:hover {
  color: #b2b2b2;
}

.nome_usuario_container {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 36px;
  color: white;
  display: inline-block;
  position: absolute;
  top: 1%;
  right: 5%;
  text-align: right;
  cursor: pointer;
}

.fundo_informacoes_perfil    {
  background-color: white;
  border-radius: 5%;
  height: 81.48vh;
  width: 44.27vw;
  position: absolute;
  left: 50.08%;
  top: 13.44%;
}

.texto_cadastro_adv {
  position: relative;
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 600;
  top: 3%;
  left: 27%;
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

.button_att {
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

.button_att:hover {
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
