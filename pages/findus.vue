<template>
  <div>
  <v-layout>
    <v-container grid-list-md text-xs-center>
      <h1 class="mb-3 top-title">Где Найти кальян-бары DOIT</h1>
    <v-layout class="top-layout" row wrap>
      <v-flex class="blocks" xs6>
        <v-card>
          <img class="img" src="~/assets/find-us/doit-min.jpg" alt="doit">

        <v-card-title primary-title class="right-block-text">
          <div>
            <h2 class="headline mb-0">DOIT ВДНХ <span class="time">C 12:00 - 02:00</span></h2>
          </div>
        </v-card-title>

        <v-card-actions class="right-block-btn">
          <div class="column-left">
            <v-btn class="street-btn" flat href="https://goo.gl/maps/zKn1JJE8Nj72" target="_blank" color="orange">Голосеевский проспект 130/57</v-btn>
            <v-btn flat href="tel:+380636087393">+38 (063) 608 73 93</v-btn>
            <v-btn flat href="tel:+380993243616">+38 (099) 324 36 16</v-btn>
            <v-btn flat @click="openVdnhModal" color="orange">Резерв DOIT_VDNH онлайн</v-btn>
          </div>
        </v-card-actions>
      </v-card>
      </v-flex>
      <v-flex class="blocks" xs6>
        <v-card>
          <img class="img" src="~/assets/find-us/doit2-min.jpg" alt="hookah">

          <v-card-title primary-title>
            <div class="left-block-text">
              <h2 class="headline mb-0">DOIT КПИ <span class="time">C 12:00 - 02:00</span></h2>
            </div>
          </v-card-title>

          <v-card-actions>
            <div class="column-right">
              <v-btn class="street-btn" flat href="https://goo.gl/maps/hExcFo55cLbWP7Do7" target="_blank" color="orange">Провиантская 5</v-btn>
              <v-btn flat href="tel:+380970712426">+38 (097) 071 24 26</v-btn>
              <v-btn flat href="tel:+380995095072">+38 (099) 509 50 72</v-btn>
              <v-btn flat @click="openKpiModal" color="orange">Резерв DOIT_KPI онлайн</v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <GmapMap
      v-bind:center="{lat:50.42, lng:30.45}"
      :zoom="12"
      map-type-id="terrain"
      style="height: 500px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </v-container>
</v-layout>
<div>
  <Footer/>
</div>
  <DemoLoginModal :isVdnh="isVdnh" ref="modal" />
</div>
</template>


<script>
  import Footer from '~/components/Footer.vue'
  import DemoLoginModal from '~/components/DemoLoginModal.vue'
  export default {
    head: {
      title: 'Где Найти - DOIT Сеть кальян-баров',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Кальн-быры находятся недалеко от станций метро ВДНХ: Голосеевский поспект 130/57 и КПИ: Провиантская 3. Режим работы с 12:00 до 02:00' },
        { name: 'og:title', content: 'Где Найти - DOIT Сеть кальян-баров' },
        { name: 'og:description', content: 'Кальн-быры находятся недалеко от станций метро ВДНХ: Голосеевский поспект 130/57 и КПИ: Провиантская 3. Режим работы с 12:00 до 02:00' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://doit.kiev.ua/findus' },
        { name: 'og:image', content: 'https://doit.kiev.ua' + require('~/assets/logo.jpg') }
      ]
    },
    data () {
      return {
        isVdnh: true,
        // center: { lat: 10, lng: 10 },
        markers: [
          {
            position: { lat: 50.3828151, lng: 30.479110900000023 }
          },
          {
            position: { lat: 50.451307, lng: 30.471858 }
          }
        ]
      }
    },
    components: {
      DemoLoginModal,
      Footer
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
  .time{
    font-size:17px;
  }
  .column-left{
    display:flex;
    flex-direction: column;
    align-items:flex-end;
  }
  .column-right{
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    .street-btn{
      margin-left:8px;
    }
  }
  .right-block-text{
    text-align:right !important;
    justify-content:flex-end !important;
  }
  .left-block-text{
    text-align:right !important;
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
  @media only screen and (max-width: 800px){
    .top-layout {
      flex-direction:column !important;
      align-items: center !important;
      .blocks{
        max-width: 100% !important;
      }
    }
  }
</style>
