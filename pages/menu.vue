<template>
<div>
  <v-layout>
    <v-container grid-list-md text-xs-center>
    <v-layout row wrap class="column">
      <div>
        <img src="~/assets/menu/1-1.jpg" alt="menu-1">
      </div>
      <div>
        <img src="~/assets/menu/2-2.jpg" alt="menu-1">
      </div>
      <div>
        <img src="~/assets/menu/3-3.jpg" alt="menu-1">
      </div>
      <div>
        <img src="~/assets/menu/4-4.jpg" alt="menu-1">
      </div>
      <div>
        <img src="~/assets/menu/5-5.jpg" alt="menu-1">
      </div>
      <div>
        <img src="~/assets/menu/6-6.jpg" alt="menu-1">
      </div>
      <div>
        <img src="~/assets/menu/7-7.jpg" alt="menu-1">
      </div>
      <div>
        <img src="~/assets/menu/8-8.jpg" alt="menu-1">
      </div>
      <div>
        <img src="~/assets/menu/9-9.jpg" alt="menu-1">
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
}
</style>
