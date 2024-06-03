<template>
  <div class="card">
    <div class="container_img">
      <img :src="imagem" alt="Imagem" class="img">
    </div>
    <div class="container_infor">
      <p class="nome">{{ nome }}</p>
      <p class="distancia">{{ distancia }}</p>
      <p class="tempo">Trabalha a: {{ tempo }} anos</p>
      <p class="horario">{{ horario }}</p>
      <div class="container_areas">
        <img src="@/assets/tb.png" alt="tb" v-if="tb === 'true'" class="icon">
        <img src="@/assets/pn.png" alt="pn" v-if="pn === 'true'" class="icon">
        <img src="@/assets/dg.png" alt="dg" v-if="dg === 'true'" class="icon">
        <img src="@/assets/cs.png" alt="cs" v-if="cs === 'true'" class="icon">
        <img src="@/assets/tt.png" alt="tt" v-if="tt === 'true'" class="icon">
        <img src="@/assets/im.png" alt="im" v-if="im === 'true'" class="icon">
        <img src="@/assets/am.png" alt="am" v-if="am === 'true'" class="icon">
        <img src="@/assets/cv.png" alt="cv" v-if="cv === 'true'" class="icon">
        <img src="@/assets/ep.png" alt="ep" v-if="ep === 'true'" class="icon">
        <img src="@/assets/ot.png" alt="ot" v-if="ot === 'true'" class="icon">
        <img src="@/assets/mr.png" alt="mr" v-if="mr === 'true'" class="icon">
      </div>
      <div class="botao_avancar" @click="ir_erro"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imagem: String,
    nome: String,
    distancia: String,
    horario: String,
    tempo: String,
    tb: String,
    pn: String,
    dg: String,
    cs: String,
    tt: String,
    im: String,
    am: String,
    cv: String,
    ep: String,
    ot: String,
    mr: String
  },
  methods: {
    ir_erro () {
      this.$router.push('/erro')
    }
  }
}
</script>

<style scoped>

.container_areas {
  height: 22%;
  top: 11%;
  position: relative;
  display: flex;
  width: fit-content;
}

.container_infor {
  width: 67%;
}

.botao_avancar {
  background-image: url('~@/assets/avancar.png');
  background-size: cover;
  height: 22.27%;
  aspect-ratio: 1 / 1;
  cursor: pointer;
  left: 85%;
  bottom: 11%;
  position: relative;
}

.container_img {
  display: flex;
  width: 28%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.img {
  height: 100%;
  width: auto;
  object-fit: contain;
}

.tempo {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
  color: rgb(0, 0, 0);
  display: inline-block;
  position: relative;
  left: 27%;
  top: 16%;
}

.horario {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
  color: rgb(0, 0, 0);
  display: inline-block;
  position: relative;
  top: 4%;
}

.distancia {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
  color: rgb(0, 0, 0);
  display: inline-block;
  position: relative;
}

.nome {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 24px;
  color: rgb(0, 0, 0);
  display: inline-block;
  position: relative;
  text-align: left;
}

.card {
  display: flex;
  gap: 2%;
  width: 49.5%;
  aspect-ratio: 100 / 36.07;
  background-color: #e9e9e9;
  margin-top: 1%;
  border-radius: 10px;
  border-left: 10px;
  overflow: hidden;
}
</style>
