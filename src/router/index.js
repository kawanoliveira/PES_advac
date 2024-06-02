import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import cadastro from '@/components/cadastro.vue'
import pesquisa from '@/components/pesquisa.vue'
import naoimplementado from '@/components/naoimplementado.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: cadastro
    },
    {
      path: '/home',
      name: 'pesquisa',
      component: pesquisa
    },
    {
      path: '/erro',
      name: 'erro',
      component: naoimplementado
    }
  ]
})
