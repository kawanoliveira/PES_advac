<template>
  <div id="pag_pesquisa">
      <div class="top-bar">
        <div class="ir_pesquisa">Achar Advogado</div>
        <div class="processos">Seus processos</div>
        <div class="logo_topbar"></div>
        <div class="nome de usuario">{{ nome_usuario }}</div>
        <div class="contato"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
    text-decoration: underline;
    position: absolute;
    top: 1%;
    left: 23.07%;
    cursor: pointer;
  }

  .processos:hover {
    color: #8d8d8d;
  }

</style>
