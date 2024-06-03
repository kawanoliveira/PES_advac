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
        <div class="fundo2">
            <div class="container_foto">
                <div class="foto_perfil"></div>
            </div>
            <div class="container_input2" name="exp">
                <input class="input_informacao2" placeholder="Anos de experiencia" v-mask="'99'">
                <div class="barra_inferior2"></div>
              </div>
              <div class="container_input2" name="funcionamento">
                <input class="input_informacao2" placeholder="Horario de funcionamento" v-mask="'99:99 - 99:99'">
                <div class="barra_inferior2"></div>
              </div>
            <div class="texto_filtros2" name="txt_areas">Suas areas de atuação:</div>
            <div class="grid_container">
                <div class="containeres" name="tb">
                  <img src="@/assets/tb.png" class="img_pn">
                  <div class="texto_filtros2">Trabalhista</div>
                  <div @click="toggleCheck('var_tb')" class="container_check2">
                    <div class="img_check" v-if="var_tb === 'true'"></div>
                  </div>
                </div>
                <div class="containeres" name="pn">
                  <img src="@/assets/pn.png" class="img_pn">
                  <div class="texto_filtros2">Penal</div>
                  <div @click="toggleCheck('var_pn')" class="container_check2">
                    <div class="img_check" v-if="var_pn === 'true'"></div>
                  </div>
                </div>
                <div class="containeres" name="dg">
                  <img src="@/assets/dg.png" class="img_pn">
                  <div class="texto_filtros2">Digital</div>
                  <div @click="toggleCheck('var_dg')" class="container_check2">
                    <div class="img_check" v-if="var_dg === 'true'"></div>
                  </div>
                </div>
                <div class="containeres" name="cs">
                  <img src="@/assets/cs.png" class="img_pn">
                  <div class="texto_filtros2">Consumidor</div>
                  <div @click="toggleCheck('var_cs')" class="container_check2">
                    <div class="img_check" v-if="var_cs === 'true'"></div>
                  </div>
                </div>
                <div class="containeres" name="tt">
                  <img src="@/assets/tt.png" class="img_pn">
                  <div class="texto_filtros2">Tributario</div>
                  <div @click="toggleCheck('var_tt')" class="container_check2">
                    <div class="img_check" v-if="var_tt === 'true'"></div>
                  </div>
                </div>
                <div class="containeres" name="im">
                  <img src="@/assets/im.png" class="img_pn">
                  <div class="texto_filtros2">Imobiliario</div>
                  <div @click="toggleCheck('var_im')" class="container_check2">
                    <div class="img_check" v-if="var_im === 'true'"></div>
                  </div>
                </div>
                <div class="containeres" name="am">
                  <img src="@/assets/am.png" class="img_pn">
                  <div class="texto_filtros2">Ambiental</div>
                  <div @click="toggleCheck('var_am')" class="container_check2">
                    <div class="img_check" v-if="var_am === 'true'"></div>
                  </div>
                </div>
                <div class="containeres" name="cv">
                  <img src="@/assets/cv.png" class="img_pn">
                  <div class="texto_filtros2">Civil</div>
                  <div @click="toggleCheck('var_cv')" class="container_check2">
                    <div class="img_check" v-if="var_cv === 'true'"></div>
                  </div>
                </div>
                <div class="containeres" name="ep">
                  <img src="@/assets/ep.png" class="img_pn">
                  <div class="texto_filtros2">Empresarial</div>
                  <div @click="toggleCheck('var_ep')" class="container_check2">
                    <div class="img_check" v-if="var_ep === 'true'"></div>
                  </div>
                </div>
                <div class="containeres" name="ot">
                  <img src="@/assets/ot.png" class="img_pn">
                  <div class="texto_filtros2">Outros</div>
                  <div @click="toggleCheck('var_ot')" class="container_check2">
                    <div class="img_check" v-if="var_ot === 'true'"></div>
                  </div>
                </div>
              </div>
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
      erro: 'none',
      var_tb: 'true',
      var_pn: 'true',
      var_dg: 'true',
      var_cs: 'true',
      var_tt: 'true',
      var_im: 'true',
      var_am: 'true',
      var_cv: 'true',
      var_ep: 'true',
      var_ot: 'true'
    }
  },
  methods: {
    ir_erro () {
      this.$router.push('/erro')
    },
    toggleCheck (variableName) {
      if (this[variableName] === 'false') {
        this[variableName] = 'true'
      } else if (this[variableName] === 'true') {
        this[variableName] = 'false'
      }
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

[name="txt_areas"] {
    top: 11%;
    position: relative;
    width: 80%;
    left: 4%;
}

[name="exp"] {
    top: 15%;
    position: relative;
    width: 80%;
    left: 10%;
}

[name="funcionamento"] {
    position: relative;
    width: 80%;
    left: 10%;
    top: 1%;
}

.foto_perfil {
    background-image: url('~@/assets/foto.png');
    background-size: cover;
    height: 100%;
}

.container_check2 {
    height: 3vh;
    aspect-ratio: 1 / 1;
    background-color: #b2b2b2;
    border-radius: 8px;
    border: 2px solid #6c6c6c;
    cursor: pointer;
  }

  .img_check {
    height: 100%;
    width: 100%;
    background-image: url('~@/assets/check.png');
    background-size: cover;
  }

.container_foto {
    background-color: #A40000;
    aspect-ratio: 1 / 1;
    width: 70%;
    left: 15%;
    top: 5%;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
}

.img_pn {
    height: 4vh;
    aspect-ratio: 1 / 1;
  }

  .grid_container {
    top: 12%;
    position: relative;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 5%;
    left: 2.5%;
  }

  .containeres {
    display: flex;
    width: 45%;
    justify-content: space-between;
    align-items: center;
  }

.fundo2 {
    background-color: white;
    border-radius: 40px;
    height: 81.48vh;
    width: 24.27vw;
    position: absolute;
    left: 15.08%;
    top: 13.44%;
  }

.background_perfil {
    background-color: rgb(131, 131, 131);
    background-position: center;
    height: 100vh;
    width: 100vw;
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

.texto_filtros2 {
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 18px;
    color: rgb(0, 0, 0);
    display: inline-block;
    position: relative;
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
  height: 60.48vh;
  width: 44.27vw;
  position: absolute;
  left: 45.08%;
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
  top: 30.5%;
  left: 31%;
  cursor: pointer;
}

.button_att:hover {
  color: #8d8d8d;
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

.container_input2 {
    background-color: #b2b2b2;
    border-radius: 5px;
    height: 6%;
  }

.input_informacao2 {
    background-color: #8d8d8d00;
    font-size: 18px;
    position: relative;
    top: 20%;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
    width: 92%;
    border: none;
    font-family: 'Roboto';
    font-weight: 600;
  }

  .input_informacao2:focus {
    outline: none;
  }

  .barra_inferior2 {
    background-color: #6c6c6c;
    height: 7%;
    width: 85%;
    left: 7.5%;
    position: relative;
    top: 20%;
  }
</style>
