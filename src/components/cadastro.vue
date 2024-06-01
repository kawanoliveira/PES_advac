<template>
    <div id="pag_cadastro">
      <div class="background_cadastro">
        <div class="top-bar">
          <div class="cliente">Cliente</div>
          <div class="advogado">Advogado</div>
          <div class="logo_topbar"></div>
          <div class="contato"></div>
        </div>
        <div class="fundo_cadastro_adv">
          <div class="texto_cadastro_adv">Cadastro como Advogado</div>
          <div class="container_input" name="nome">
            <input class="input_informacao" type="text" placeholder="Nome">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="cpf">
            <input class="input_informacao" placeholder="CPF" v-mask="'99999-999'">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="cnpj">
            <input class="input_informacao" type="number" placeholder="CNPJ ou OAB">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="tel1">
            <input class="input_informacao" type="number" placeholder="Telefone 1">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="endereco">
            <input class="input_informacao" type="text" placeholder="Endereço">
            <div class="barra_inferior"></div>
          </div>
          <div class="container_input" name="tel2">
            <input class="input_informacao" type="number" placeholder="Telefone 2 (opcional)">
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
          <div class="already_cadastro_adv">Já tem uma conta? <span class="fazer_login_adv" @click="ir_login">Realizar Login</span></div>
        </div>
      </div>
    </div>
  </template>

<script>
export default{
  name: 'App',
  methods: {
    ir_login () {
      this.$router.push('/')
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

  #app {
    height: 100vh;
    text-align: center;
  }

  .background_cadastro {
    background-image: url('~@/assets/background_cadastro.png');
    background-size: cover;
    background-position: center;
    min-height: 100vh;
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
</style>
