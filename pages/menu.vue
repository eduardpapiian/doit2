<template>
<div>
  <v-layout>
    <v-container grid-list-md text-xs-center>
      <h1 class="mb-3 top-title">Актуальное меню кальян-бара DOIT</h1>
    <v-layout row wrap class="column">
      <div class="img-wrap">
        <img src="~/assets/menu/1-1-min.jpg" alt="menu-1">
      </div>
      <div class="img-wrap">
        <img src="~/assets/menu/2-2-min.jpg" alt="menu-1">
      </div>
      <div class="img-wrap">
        <img src="~/assets/menu/3-3-min.jpg" alt="menu-1">
      </div>
      <div class="img-wrap">
        <img src="~/assets/menu/4-4-min.jpg" alt="menu-1">
      </div>
      <div class="img-wrap">
        <img src="~/assets/menu/5-5-min.jpg" alt="menu-1">
      </div>
      <div class="img-wrap">
        <img src="~/assets/menu/6-6-min.jpg" alt="menu-1">
      </div>
      <div class="img-wrap">
        <img src="~/assets/menu/7-7-min.jpg" alt="menu-1">
      </div>
      <div class="img-wrap">
        <img src="~/assets/menu/8-8-min.jpg" alt="menu-1">
      </div>
      <div class="img-wrap">
        <img src="~/assets/menu/9-9-min.jpg" alt="menu-1">
      </div>
    </v-layout>
  </v-container>
  </v-layout>
  <div>
    <Footer/>
  </div>
</div>
</template>


<script>
import Footer from '~/components/Footer.vue'
export default {
  head: {
    title: 'Меню - DOIT Первый кальян-бар на ВДНХ',
    htmlAttrs: {
      lang: 'ru',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Меню кальян-бара DOIT с актуальными ценами. Вы можете уже заранее сделать свой выбор' },
      { name: 'og:title', content: 'Меню - DOIT Первый кальян-бар на ВДНХ' },
      { name: 'og:description', content: 'Меню кальян-бара DOIT с актуальными ценами. Вы можете уже заранее сделать свой выбор' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://doit.kiev.ua/menu' },
      { name: 'og:image', content: 'https://doit.kiev.ua' + require('~/assets/logo.jpg') }
    ]
  },
  data () {
    return {
    }
  },
  components: {
    Footer
  },
  methods: {

  }
}
</script>


<style lang="less" scoped>
.column{
  display:flex;
  justify-content:center;
  .img-wrap{
    max-width:1000px;
    margin:0 auto;
    img{
      width:100%;
    }
  }
}
</style>
