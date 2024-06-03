<template>
  <div id="pag_pesquisa">
      <div class="top-bar">
        <div class="ir_pesquisa">Achar Advogado</div>
        <div class="processos" @click="ir_erro">Seus processos</div>
        <div class="logo_topbar"></div>
        <div class="nome_usuario_container">
          <div class="nome_usuario" @click="ir_erro">{{ nome_usuario }}</div>
        </div>
        <div class="conversa" @click="ir_erro">Conversas</div>
        <div class="foto_usuario" @click="ir_erro"></div>
      </div>
      <div class="fundo_filtro">
        <div class="fundo_pesquisa_maior" name="fundo_pes">
          <input type="text" placeholder="Pesquisar" class="input_info_maior">
          <div class="barra_inferior_maior"></div>
        </div>
        <div class="texto_filtros" name="distancia">Distancia:</div>
        <div class="texto_filtros" name="distancia_min">Min:</div>
        <div class="fundo_pesquisa" name="fundo_min">
          <input type="number" placeholder="Km..." class="input_info" v-mask="99">
          <div class="barra_inferior" name="barra_min"></div>
        </div>
        <div class="texto_filtros" name="distancia_max">Max:</div>
        <div class="fundo_pesquisa" name="fundo_max">
          <input type="number" placeholder="Km..." class="input_info" v-mask="99">
          <div class="barra_inferior" name="barra_max"></div>
        </div>
        <div class="texto_filtros" name="tempo_at">Tempo mínimo <br>de atuação:</div>
        <div class="fundo_pesquisa" name="fundo_tempo">
          <input type="number" placeholder="Anos" class="input_info" v-mask="99">
          <div class="barra_inferior" name="barra_tempo"></div>
        </div>
        <div class="texto_filtros" name="nota">Nota mínima:</div>
        <div class="fundo_pesquisa" name="fundo_nota">
          <input type="number" placeholder="Estrelas" class="input_info" v-mask="9">
          <div class="barra_inferior" name="barra_estrela"></div>
        </div>
        <div class="texto_filtros" name="aberto">Aberto agora:</div>
        <div @click="toggleCheck('aberto_agr')" class="container_check">
          <div class="img_check" v-if="aberto_agr === 'true'"></div>
        </div>
        <div class="texto_filtros" name="areas">Áreas de atuação:</div>
        <div class="grid_container">
          <div class="containeres" name="tb">
            <img src="@/assets/tb.png" class="img">
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
            <img src="@/assets/tt.png" class="img">
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
      <div class="fundo_resultado">
        <div class="container_cards">
          <Card v-for="(item, index) in resultados"
          :key="index"
          :imagem="item.imagem"
          :nome="item.nome"
          :distancia="item.distancia"
          :horario="item.horario"
          :tempo="item.tempo"
          />
        </div>
      </div>
  </div>
</template>

<script>
import Card from './cards.vue'
import AwesomeMask from 'awesome-mask'
export default {
  name: 'App',
  data () {
    return {
      aberto_agr: 'false',
      var_tb: 'true',
      var_pn: 'true',
      var_dg: 'true',
      var_cs: 'true',
      var_tt: 'true',
      var_im: 'true',
      var_am: 'true',
      var_cv: 'true',
      var_ep: 'true',
      var_ot: 'true',
      nome_usuario: 'usuario',
      resultados: [
        // <img src="@/assets/tb.png" class="img">
        { imagem: require('@/assets/foto.png'), nome: 'Alex Ronaldo Lopes', distancia: '1.74km', horario: '08:00 - 17:00', tempo: '3' },
        { imagem: 'caminho_para_imagem2.jpg', texto: 'Texto do card 2' },
        { imagem: 'caminho_para_imagem2.jpg', texto: 'Texto do card 2' },
        { imagem: 'caminho_para_imagem2.jpg', texto: 'Texto do card 2' },
        { imagem: 'caminho_para_imagem2.jpg', texto: 'Texto do card 2' },
        { imagem: 'caminho_para_imagem2.jpg', texto: 'Texto do card 2' },
        { imagem: 'caminho_para_imagem2.jpg', texto: 'Texto do card 2' },
        { imagem: 'caminho_para_imagem2.jpg', texto: 'Texto do card 2' },
        { imagem: 'caminho_para_imagem2.jpg', texto: 'Texto do card 2' },
        { imagem: 'caminho_para_imagem2.jpg', texto: 'Texto do card 2' },
        { imagem: 'caminho_para_imagem2.jpg', texto: 'Texto do card 2' },
        { imagem: 'caminho_para_imagem2.jpg', texto: 'Texto do card 2' },
        { imagem: 'caminho_para_imagem2.jpg', texto: 'Texto do card 2' },
        { imagem: 'caminho_para_imagem2.jpg', texto: 'Texto do card 2' },
        { imagem: 'caminho_para_imagem2.jpg', texto: 'Texto do card 2' },
        { imagem: 'caminho_para_imagem2.jpg', texto: 'Texto do card 2' },
        { imagem: 'caminho_para_imagem2.jpg', texto: 'Texto do card 2' },
        { imagem: 'caminho_para_imagem2.jpg', texto: 'Texto do card 2' }
        // Adicione mais dados conforme necessário
      ]
    }
  },
  methods: {
    toggleCheck (variableName) {
      if (this[variableName] === 'false') {
        this[variableName] = 'true'
      } else if (this[variableName] === 'true') {
        this[variableName] = 'false'
      }
    },
    ir_erro () {
      this.$router.push('/erro')
    }
  },
  directives: {
    'mask': AwesomeMask
  },
  components: {
    Card
  }
}
</script>
<style>

.container_cards {
  width: 90%;
  left: 5%;
  top: 2%;
  display: flex;
  gap: 1%;
  position: relative;
  flex-wrap: wrap;

}

.fundo_resultado {
  background-color: #b2b2b2;
  height: 86.48vh;
  width: 69.84vw;
  position: absolute;
  top: 10.5%;
  left: 28%;
  border-radius: 15px;
  max-height: fit-content;
  overflow-y: auto;
}

.grid_container {
  top: 10%;
  position: relative;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 5%;
  left: 2.5%;
}

.img_pn {
  height: 4vh;
  aspect-ratio: 1 / 1;
}

.img {
  height: 6.1vh;
  aspect-ratio: 1 / 1;
}

.containeres {
  display: flex;
  width: 45%;
  justify-content: space-between;
  align-items: center;
}

[name=areas] {
  top: 8%;
  left: 3%;
}

[name=tb] {
  top: 10%;
  position: relative;
}

[name=pn] {
  top: 13%;
  position: relative;
}

[name=dg] {
  top: 9.5%;
  position: relative;
}

[name=cs] {
  top: 9.5%;
  position: relative;
}

[name=tt] {
  top: 9.5%;
  position: relative;
}

[name=im] {
  top: 9.5%;
  position: relative;
}

[name=am] {
  top: 9.5%;
  position: relative;
}

[name=cv] {
  top: 9.5%;
  position: relative;
}

[name=ep] {
  top: 9.5%;
  position: relative;
}

[name=ot] {
  top: 9.5%;
  position: relative;
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

.img_check {
  height: 100%;
  width: 100%;
  background-image: url('~@/assets/check.png');
  background-size: cover;
}

.container_check2 {
  height: 3vh;
  aspect-ratio: 1 / 1;
  background-color: #b2b2b2;
  border-radius: 8px;
  border: 2px solid #6c6c6c;
  cursor: pointer;
}

.container_check {
  width: 4vh;
  aspect-ratio: 1 / 1;
  background-color: #b2b2b2;
  border-radius: 8px;
  border: 2px solid #6c6c6c;
  top: 5.5%;
  left: 60%;
  position: relative;
  cursor: pointer;
}

[name=aberto] {
  top: 9.5%;
  left: 21%;
}

[name=nota] {
  top: 9.5%;
  left: 22%;
}

[name=fundo_nota] {
  width: 20%;
  left: 55%;
  position: relative;
  top: 5%;
}

[name=tempo_at] {
  top: 7%;
  left: 20%;
}

[name=fundo_tempo] {
  width: 20%;
  left: 55%;
  position: relative;
  top: 1.1%;
}

[name=fundo_max] {
  width: 20%;
  left: 55%;
  position: relative;
  top: 1.1%;
}

[name=fundo_min] {
  width: 20%;
  position: relative;
  top: 10.5%;
  left: 16%;
}

[name=distancia_max] {
  top: 5.64%;
  left: 43%;
}

[name=distancia_min] {
  top: 15%;
  right: 17.5%;
}

[name=distancia] {
  top: 10%;
  left: 5%;
}

[name="fundo_pes"] {
  width: 92%;
  position: relative;
  left: 4%;
  top: 3%;
}

.barra_inferior {
  background-color: #6c6c6c;
  height: 7%;
  width: 85%;
  left: 7.5%;
  position: relative;
  top: 20%;
}

.barra_inferior_maior {
  background-color: #6c6c6c;
  height: 7%;
  width: 92%;
  left: 4%;
  position: relative;
  top: 20%;
}

.input_info_maior {
  background-color: #8d8d8d00;
  font-size: 22px;
  position: relative;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  width: 92%;
  border: none;
  font-family: 'Roboto';
  font-weight: 600;
}

.input_info_maior:focus {
  border: none;
  outline: none;
}

.input_info {
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

.input_info:focus {
  border: none;
  outline: none;
}

.fundo_pesquisa_maior {
  background-color: #b2b2b2;
  border-radius: 5px;
  height: 9%;
}

.fundo_pesquisa {
  background-color: #b2b2b2;
  border-radius: 5px;
  height: 6%;
}

.texto_filtros {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
  color: rgb(0, 0, 0);
  display: inline-block;
  position: relative;
}

.texto_filtros2 {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
  color: rgb(0, 0, 0);
  display: inline-block;
  position: relative;
}

.fundo_filtro {
  background-color: #d9d9d9;
  height: 86.48vh;
  aspect-ratio: 57.92 / 100;
  border-radius: 15px;
  position: absolute;
  top: 10.5%;
  left: 1%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

#app {
  height: 100vh;
  text-align: center;
}

.ir_pesquisa {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 36px;
  color: white;
  display: inline-block;
  cursor: pointer;
  position: absolute;
  top: 1%;
  left: 10.73%;
  text-decoration: underline;
}

.ir_pesquisa:hover {
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
  left: 32.07%;
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

</style>
