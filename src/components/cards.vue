<template>
  <div class="card">
    <img :src="imagem" alt="Imagem" class="img">
    <p class="nome">{{ nome }}</p>
    <p class="distancia">{{ distancia }}</p>
    <p class="horario">{{ horario }}</p>
    <p class="tempo">Trabalha a: {{ tempo }} anos</p>
    <div class="botao_avancar" @click="ir_erro"></div>
  </div>
</template>

<script>
export default {
  props: {
    imagem: String,
    nome: String,
    distancia: String,
    horario: String,
    tempo: String
  },
  methods: {
    ir_erro () {
      this.$router.push('/erro')
    }
  }
}
</script>

<style scoped>
.botao_avancar {
  background-image: url('~@/assets/avancar.png');
  background-size: cover;
  height: 22.27%;
  aspect-ratio: 1 / 1;
}

.img {
  height: 100%;
  aspect-ratio: 100 / 120;
}

.tempo {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
  color: rgb(0, 0, 0);
  display: inline-block;
  position: relative;
  top: 30%;
  left: 39%;
}

.horario {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
  color: rgb(0, 0, 0);
  display: inline-block;
  position: relative;
  top: 30%;
  left: 33.6%;
}

.distancia {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
  color: rgb(0, 0, 0);
  display: inline-block;
  position: relative;
  top: 30%;
  right: 40%;
}

.nome {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 26px;
  color: rgb(0, 0, 0);
  display: inline-block;
  position: relative;
  left: 20%;
}

.card {
  display: flex;
  width: 49.5%;
  aspect-ratio: 100 / 36.07;
  background-color: #e9e9e9;
  padding: 20px;
  border-radius: 10px;
  margin-top: 1%;
  overflow: hidden;
}
</style>
