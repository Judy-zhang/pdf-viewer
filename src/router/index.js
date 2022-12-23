import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PdfView from '@/components/pdf-view.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: '/project1/',
  routes: [
    {
      path: '/',
      redirect: 'a-home'
    },
    {
      path: '/a-home',
      name: 'a-home',
      component: HelloWorld
    },
    {
      path: '/pdf-view',
      name: 'pdf-view',
      component: PdfView
    }
  ]
})
