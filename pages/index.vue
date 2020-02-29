<template>
  <div class="doit-main">
    <div class="main-bg">
      <div class="bg-img bottom-left-img">
        <parallax :speed-factor="0.3">
          <img id="bg" src="~assets/main-bg/left-bottom-1-min.png" alt="img">
        </parallax>
      </div>
      <div class="bg-img middle-left-img">
        <parallax :speed-factor="0">
          <img src="~assets/main-bg/left-middle-1-min.png" alt="img">
        </parallax>
      </div>
      <div class="bg-img top-left-img">
        <!-- TOP-LEFT -->
        <parallax :speed-factor="0.3" direction="down">
          <img src="~assets/main-bg/left-top-1-min.png" alt="img">
        </parallax>
      </div>
      <div class="bg-img top-right-img">
        <!-- TOP-RIGHT -->
        <parallax :speed-factor="0.4" direction="down">
          <img src="~assets/main-bg/right-top-1-min.png" alt="img">
        </parallax>
      </div>
      <div class="bg-img right-bottom-img">
        <parallax :speed-factor="0.3">
          <img src="~assets/main-bg/right-bottom-1-min.png" alt="img">
        </parallax>
      </div>
      <div class="bg-img right-middle-img">
        <parallax  :speed-factor="0">
          <img src="~assets/main-bg/right-middle-1-min.png" alt="img">
        </parallax>
      </div>
      <div class="bg-img bg-bottom">
        <parallax :speed-factor="0.27">
          <img src="~assets/main-bg/bg-center-2-min.png" alt="img">
        </parallax>
      </div>
      <div class="bg-img bg-behinds" id="logo-center">
        <!-- LOGO-center -->
        <parallax :speed-factor="0.2" direction="down">
          <img src="~assets/main-bg/bg-behinds-4-min.png" alt="img">
        </parallax>
      </div>
      <div class="bg-img bottom-main">
        <!-- BOTTOM-BG -->
        <parallax :speed-factor="0.1">
          <img src="~assets/main-bg/bottom-main-min.png" alt="img">
        </parallax>
      </div>
      <div class="wrapper">
        <div class="main-content" id="main-content">
          <h2 class="mob-title">Сеть кальян-баров DOIT в Киеве</h2>
          <aboutUsBlock/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Parallax from 'vue-parallaxy'
  import aboutUsBlock from '~/components/aboutUsBlock.vue'
  import Footer from '~/components/Footer.vue'
  export default {
    components: {
      Parallax,
      aboutUsBlock,
      Footer
    },
    head: {
      title: 'DOIT Сеть кальян-баров',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Сеть кальян-баров на ВДНХ и КПИ, с ярким дизайнерским оформление интерьера. Широкая палитра вкусов табака многих производителей от легкого fumari до ядерного tangiers.' },
        { name: 'og:title', content: 'DOIT Сеть кальян-баров' },
        { name: 'og:description', content: 'Сеть кальян-баров на ВДНХ и КПИ, с ярким дизайнерским оформление интерьера. Широкая палитра вкусов табака многих производителей от легкого fumari до ядерного tangiers.' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://doit.kiev.ua' },
        { name: 'og:image', content: 'https://doit.kiev.ua' + require('~/assets/logo.jpg') }
      ]
    },
    data () {
      return {
        mainContent: '',
        height: ''
      }
    },
    ready: function () {

    },
    mounted () {
      setTimeout(() => {
        this.resize()
      }, 200)
      window.addEventListener('open', this.resize)
      window.addEventListener('resize', this.resize)
      // console.log(this.mainContent)
      // console.log('HEIGHT', this.height)
    },
    methods: {
      resize () {
        // console.log('heloo')
        this.mainContent = document.getElementById('main-content')
        this.height = document.getElementById('bg').clientHeight

        this.mainContent.style.marginTop = this.height - 15 + 'px'
        this.mainContent.style.webkitmarginTop = this.height - 15 + 'px'

        const logoCenter = document.getElementById('logo-center')
        logoCenter.style.height = this.height + 'px'
      },
      test () {

      }
    },
    watch: {
      height (val) {
        if (val) {
          // console.log('HI!!!', val)
          // this.resize()
        }
      }
    },
    beforeDestroy: function () {
      // console.log('DESTROY')
      window.removeEventListener('resize', this.resize)
    }
  }
</script>

<style lang="less" scoped>
  .mob-title{
    display:none;
    text-align: center;
    margin-bottom:20px;
  }
  .doit-main{
    background-color:black;
    color:#ffff;
    .main-bg{
      background-color:black;
      .bg-img{
        position:absolute;
        width:100%;
        min-height:100%;
        z-index:1;
        img{
          object-fit: contain;
          height: auto;
        }
      }
      .bottom-main{
        z-index: 1;
        position: relative;
      }
      .bg-behinds, .bottom-main{
        img{
          object-fit: cover;
        }
      }
      .wrapper{
        z-index:1;
        position:absolute;
        top:0;
        left:0;
        width:100%;
        .main-content{
          background-color:black;
        }
      }
    }
  }

  @media screen and (max-width: 1100px){
    .mob-title{
      display:block;
    }
  }

  @media screen and (min-width: 768px){
    .Masthead {
      min-height: 114vh;
    }
  }

</style>
