<template>
  <div>
  <v-layout>
    <v-container grid-list-md text-xs-center>
      <h1 class="mb-3">Акции кальян-баров DOIT 2</h1>
      <v-layout row wrap class="justify-center">
        <v-flex xs6 class="card">
          <v-hover>
          <v-card
                  slot-scope="{ hover }"
                  :class="`elevation-${hover ? 12 : 2}`">
            <img class="img" src="~/assets/akcii/rightimg.jpg" alt="hookah">

          <v-card-title primary-title>
            <div class="right-block-text">
              <h2 class="headline mb-0">СЧАСТЛИВЫЕ ЧАСЫ</h2>
              <div class="text"> {{ firstText }} </div>
            </div>
          </v-card-title>

          <v-card-actions class="right-block-btn mob-column">
            <v-btn flat @click="openVdnhModal" color="orange">Резерв DOIT_VDNH</v-btn>
            <v-btn flat @click="openKpiModal" color="orange">Резерв DOIT_KPI</v-btn>
          </v-card-actions>
        </v-card>
       </v-hover>
        </v-flex>
        <v-flex xs6 class="card">
          <v-hover>
          <v-card slot-scope="{ hover }"
                  :class="`elevation-${hover ? 12 : 2}`">
            <img class="img" src="~/assets/akcii/leftimg.jpg" alt="hookah">

            <v-card-title primary-title>
              <div class="left-block-text">
                <h2 class="headline mb-0">ДЕНЬ РОЖДЕНИЯ В DOIT</h2>
                <div class="text"> {{ secondText }} </div>
              </div>
            </v-card-title>

            <v-card-actions class="mob-column">
              <v-btn flat href="tel:+380636087393" color="orange"><span>ВДНХ: </span> +38 (063) 608 73 93</v-btn>
              <v-btn flat href="tel:+380970712426" color="orange"><span>КПИ: </span> +38 (097) 071 24 26</v-btn>
            </v-card-actions>
          </v-card>
         </v-hover>
        </v-flex>
        <v-flex xs6 class="card card-bottom">
          <v-hover>
          <v-card slot-scope="{ hover }"
                  :class="`elevation-${hover ? 12 : 2}`">
            <img class="img" src="~/assets/akcii/leftimg1.jpg" alt="beerpong">

            <v-card-title primary-title>
              <div class="right-block-text">
                <h2 class="headline mb-0">BEER PONG в DOIT</h2>
                <div class="text"> {{ thirdTExt }} </div>
              </div>
            </v-card-title>

            <v-card-actions class="right-block-btn">
              <v-btn flat color="orange" href="https://www.facebook.com/doithookah/" target="_blank"><fb/><span class="social">DOIT_VDNH</span></v-btn>
              <v-btn flat color="orange" href="https://www.facebook.com/doitkpi/" target="_blank"><fb/><span class="social">DOIT_KPI</span></v-btn>
            </v-card-actions>
          </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs6 class="card card-bottom">
          <v-hover>
          <v-card slot-scope="{ hover }"
                  :class="`elevation-${hover ? 12 : 2}`">
            <img class="img" src="~/assets/akcii/rightimg1.jpg" alt="hookah">

            <v-card-title primary-title>
              <div class="left-block-text">
                <h2 class="headline mb-0">РОЗЫГРЫШ БЕСПЛАТНОГО КАЛЬЯНА</h2>
                <div class="text"> {{ fourText }} </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat color="orange" href="https://www.instagram.com/doithookah/" target="_blank"><inst/><span class="social">DOIT_VDNH</span></v-btn>
              <v-btn flat color="orange" href="https://www.instagram.com/doit_kpi/" target="_blank"><inst/><span class="social">DOIT_KPI</span></v-btn>
            </v-card-actions>
          </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
  <div>
    <Footer/>
  </div>
    <DemoLoginModal :isVdnh="isVdnh" ref="modal" />
  </div>
</template>


<script>
  import DemoLoginModal from '~/components/DemoLoginModal.vue'
  import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
  import fb from '~/components/fb.vue'
  import inst from '~/components/inst.vue'
  import Footer from '~/components/Footer.vue'
  export default {
    head: {
      title: 'Акции - DOIT Сеть кальян-баров',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Постоянные акции сети кальян-баров DOIT: Счастливые Часы, Именинникам кальян в подарок, розыгрыш бесплатного кальяна, Бир Понг' },
        { name: 'og:title', content: 'Акции - DOIT Сеть кальян-баров' },
        { name: 'og:description', content: 'Постоянные акции сети кальян-баров DOIT: Счастливые Часы, Именинникам кальян в подарок, розыгрыш бесплатного кальяна, Бир Понг' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://doit.kiev.ua/akcii' },
        { name: 'og:image', content: 'https://doit.kiev.ua' + require('~/assets/logo.jpg') }
      ]
    },
    data () {
      return {
        isVdnh: true,
        firstText: 'C Понедельника по четверг действует акция: с 12:00-17:00 на кальяны скидка 30% Serbetli, Afzal, Fusion, Adalya, Al Fakher, Fasil: 126грн. Дымный с нетерпением ждет Тебя в гостях',
        secondText: 'Именинники в нашем баре не останутся без подарков Отмечайте свой День Рождения у нас, и получайте кальян в подарок. Просим при себе имень документ, подтверждающий дату рождения',
        thirdTExt: 'BeerPong - это игра для любителей пива, в которой пиво принимает самое непосредственное участие. Но в первую очередь - это игра на координацию и ловкость. Для всех любителей будут проводиться интереснейшие чемпионаты с крутыми призами. Следи за информацией на наших страницах Instagram и Facebook',
        fourText: 'Вступай и подписывайся на наши обновления в социальных сетях, выполняй условия розыграша и получай приятные подарки от команды DOIT. Для Тебя у Нас приготовлены приятные сюрпризы, в виде депозитов, а все розыграши призов регулярно проходят в социальных сетях'
      }
    },
    components: {
      fb,
      inst,
      Footer,
      SweetModal,
      SweetModalTab,
      DemoLoginModal
    },
    methods: {
      openVdnhModal () {
        this.isVdnh = true
        this.$refs['modal'].$refs['openVdnhModal'].open()
      },
      openKpiModal () {
        this.isVdnh = false
        this.$refs['modal'].$refs['openVdnhModal'].open()
      }
    }
  }
</script>


<style lang="less" scoped>
  .img{
    width:100%;
  }
  .card{
    min-width:450px;
  }
  .card-bottom{
    .right-block-text{
      min-height:249px;
    }
  .left-block-text{
    min-height:249px;
  }
  }
  .right-block-text{
    text-align:right !important;
  }
  .left-block-text{
    text-align:left !important;
  }
  .text{
    font-size:16px;
  }
  .right-block-btn{
    justify-content:flex-end;
  }
  .social{
    margin-left:5px;
  }
  @media only screen and (min-width: 960px){
    .container {
      max-width: 1000px;
    }
  }
  @media only screen and (max-width: 800px){
    .card{
      max-width:100%;
      flex-basis: 100%;
    }
  }
  @media only screen and (max-width: 500px) {
    .card{
      min-width:310px;
    }
    .mob-column{
      flex-direction:column;
      align-items: flex-end;
    }
  }
</style>
