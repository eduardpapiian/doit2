<template>
  <div>
  <v-layout>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs6>
          <v-card>
            <img class="img" src="~/assets/akcii/rightimg.jpg" alt="hookah">

          <v-card-title primary-title>
            <div class="right-block-text">
              <h3 class="headline mb-0">СЧАСТЛИВЫЕ ЧАСЫ</h3>
              <div class="text"> {{ firstText }} </div>
            </div>
          </v-card-title>

          <v-card-actions class="right-block-btn">
            <v-btn flat @click="openVdnhModal" color="orange">Резерв DOIT_VDNH</v-btn>
            <v-btn flat @click="openKpiModal" color="orange">Резерв DOIT_KPI</v-btn>
          </v-card-actions>
        </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card>
            <img class="img" src="~/assets/akcii/leftimg.jpg" alt="hookah">

            <v-card-title primary-title>
              <div class="left-block-text">
                <h3 class="headline mb-0">ДЕНЬ РОЖДЕНИЯ В DOIT</h3>
                <div class="text"> {{ secondText }} </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card>
            <img class="img" src="~/assets/akcii/leftimg1.jpg" alt="beerpong">

            <v-card-title primary-title>
              <div class="right-block-text">
                <h3 class="headline mb-0">BEER PONG в DOIT</h3>
                <div class="text"> {{ thirdTExt }} </div>
              </div>
            </v-card-title>

            <v-card-actions class="right-block-btn">
              <v-btn flat color="orange" href="https://www.facebook.com/doithookah/" target="_blank"><fb/><span class="social">DOIT_VDNH</span></v-btn>
              <v-btn flat color="orange" href="https://www.facebook.com/doitkpi/" target="_blank"><fb/><span class="social">DOIT_KPI</span></v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card>
            <img class="img" src="~/assets/akcii/rightimg1.jpg" alt="hookah">

            <v-card-title primary-title>
              <div class="left-block-text">
                <h3 class="headline mb-0">РОЗЫГРЫШ БЕСПЛАТНОГО КАЛЬЯНА</h3>
                <div class="text"> {{ fourText }} </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat color="orange" href="https://www.instagram.com/doithookah/" target="_blank"><inst/><span class="social">DOIT_VDNH</span></v-btn>
              <v-btn flat color="orange" href="https://www.instagram.com/doit_kpi/" target="_blank"><inst/><span class="social">DOIT_KPI</span></v-btn>
            </v-card-actions>
          </v-card>
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
    data () {
      return {
        isVdnh: true,
        firstText: 'C Понедельника по четверг действует акция: с 12:00-17:00 на кальяны скидка 30% Serbetli, Afzal, Fusion, Adalya, Al Fakher, Fasil: 126грн',
        secondText: 'Именинники в нашем баре не останутся без подарков Отмечайте свой День Рождения у нас, и получайте кальян в подарок. Просим при себе имень документ, подтверждающий дату рождения',
        thirdTExt: 'BeerPong - это игра для любителей пива, в которой пиво принимает самое непосредственное участие. Но в первую очередь - это игра на координацию и ловкость. Для всех любителей будут проводиться интереснейшие чемпионаты с крутыми призами. Следи за информацией на наших страницах Instagram и Facebook',
        fourText: 'Вступай и подписывай на наши обновления в социальных сетях, выполняй условия розыграша и получай приятные подарки от команды DOIT'
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
</style>
