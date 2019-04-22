<template>
  <div>
  <v-layout>
    <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs6>
        <v-card>
          <img class="img" src="~/assets/find-us/doit.jpg" alt="doit">

        <v-card-title primary-title class="right-block-text">
          <div>
            <h3 class="headline mb-0">DOIT ВДНХ</h3>
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
      <v-flex xs6>
        <v-card>
          <img class="img" src="~/assets/find-us/doit2.jpg" alt="hookah">

          <v-card-title primary-title>
            <div class="left-block-text">
              <h3 class="headline mb-0">DOIT КПИ</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <div class="column-right">
              <v-btn class="street-btn" flat href="https://goo.gl/maps/KZWyixSLa55Yb32B8" target="_blank" color="orange">Провиантская 5</v-btn>
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
</style>
