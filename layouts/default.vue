<template>
  <v-app dark id="darken">
    <v-navigation-drawer
      color="orange"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile class="close-mob" @click="drawer = false">
          X
        </v-list-tile>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped" class="navigation">
      <v-toolbar-side-icon class="burger-button" @click="drawer = !drawer"></v-toolbar-side-icon>
      <!--<v-btn-->
        <!--icon-->
        <!--@click.stop="miniVariant = !miniVariant"-->
      <!--&gt;-->
        <!--<v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>-->
      <!--</v-btn>-->
      <!--<v-btn-->
        <!--icon-->
        <!--@click.stop="clipped = !clipped"-->
      <!--&gt;-->
        <!--<v-icon>web</v-icon>-->
      <!--</v-btn>-->
      <!--<v-btn-->
        <!--icon-->
        <!--@click.stop="fixed = !fixed"-->
      <!--&gt;-->
        <!--<v-icon>remove</v-icon>-->
      <!--</v-btn>-->
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <!--{{drawer}}-->
      <v-layout class="menu-list" justify-center row wrap>
        <v-btn
                v-for="(item, i) in items"
                :key="i"
                :to="item.to"
                color="white"
                flat
                round
        >
          {{ item.title }}
        </v-btn>
      </v-layout>
     <!--<v-spacer></v-spacer>-->
      <!--<v-btn-->
        <!--icon-->
        <!--@click.stop="rightDrawer = !rightDrawer"-->
      <!--&gt;-->
        <!--<v-icon>menu</v-icon>-->
      <!--</v-btn>-->
    </v-toolbar>
    <v-content class="content">
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>
    </v-content>
    <!--<v-navigation-drawer-->
      <!--temporary-->
      <!--:right="right"-->
      <!--v-model="rightDrawer"-->
      <!--fixed-->
    <!--&gt;-->
      <!--<v-list>-->
        <!--<v-list-tile @click.native="right = !right">-->
          <!--<v-list-tile-action>-->
            <!--<v-icon light>compare_arrows</v-icon>-->
          <!--</v-list-tile-action>-->
          <!--<v-list-tile-title>Switch drawer (click me)</v-list-tile-title>-->
        <!--</v-list-tile>-->
      <!--</v-list>-->
    <!--</v-navigation-drawer>-->
    <!--<v-footer app>-->
      <!--<span>&copy; {{ new Date().getFullYear() }}</span>-->
    <!--</v-footer>-->
    <!--<template>-->
        <!--<no-ssr>-->
          <!--<Slide>-->
            <!--<v-layout justify-center column wrap>-->
              <!--<v-btn class="pa-0 ma-1"-->
                      <!--v-for="(item, i) in items"-->
                      <!--:key="i"-->
                      <!--:to="item.to"-->
                      <!--color="white"-->
                      <!--flat-->
              <!--&gt;-->
                <!--{{ item.title }}-->
              <!--</v-btn>-->
            <!--</v-layout>-->
        <!--</Slide>-->
       <!--</no-ssr>-->
    <!--</template>-->
    <!-- Yandex.Metrika counter -->
    <!--<div><img src="https://mc.yandex.ru/watch/54037297" style="position:absolute; left:-9999px;" alt="" /></div>-->
    <!-- /Yandex.Metrika counter -->
    <loading :active.sync="loading"
             color="#ff9800"
             :height="heightLoader"
             :width="widthLoader"
             loader="spinner"
             background-color="black"
             :opacity="opacity"
             :is-full-page="fullPage"></loading>
  </v-app>
</template>
<!-- built files will be auto injected -->

<script>
  // Import component
  import Loading from 'vue-loading-overlay'
  // Import stylesheet
  import 'vue-loading-overlay/dist/vue-loading.css'
  // import quickMenu from 'vue-quick-menu'
  import 'font-awesome/css/font-awesome.min.css'
  export default {
    components: {
      // quickMenu
      Loading
    },
    mounted () {
      this.width = document.getElementById('darken').clientWidth
      window.addEventListener('resize', this.resize)
      this.resize()
      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
    methods: {
      resize () {
        this.width = document.getElementById('darken').clientWidth
      }
    },
    data () {
      return {
        loading: true,
        fullPage: true,
        isOpenNewTab: false,
        opacity: 0.9,
        heightLoader: 100,
        widthLoader: 100,
        width: '',
        clipped: true,
        drawer: false,
        fixed: true,
        items: [
          { icon: 'home', title: 'О Нас', to: '/' },
          { icon: 'whatshot', title: 'Акции', to: '/akcii' },
          { icon: 'location_on', title: 'Где Найти', to: '/findus' },
          { icon: 'check', title: 'Резерв', to: '/reserv' },
          { icon: 'restaurant_menu', title: 'Меню', to: '/menu' },
          { icon: 'drive_eta', title: 'Кейтеринг', to: '/keitering' },
          { icon: 'photo_camera', title: 'Галерея', to: '/galery' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'DOIT'
      }
    },
    watch: {
      width (val) {
        // console.log('myWidth', val)
        if (val > 943) {
          this.drawer = false
        }
      }
    }
  }
</script>

<style lang="less">
  .content{
    background-image:url(~assets/fon/fon-min.jpg);
    background-attachment: fixed;
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
  }
  .v-toolbar__title{
    font-family: 'Monoton', cursive;
    font-size:32px;
  }
  .burger-button{
    display:none;
  }
  .close-mob{
    a{
      justify-content:flex-end !important;
    }
  }
  @media only screen and (max-width: 960px) {
    .navigation{
      height: 64px !important;
      .v-toolbar__content{
        height:100% !important;
        button {
          .v-btn__content{
            .v-icon{
              font-size:40px;
            }
          }
        }
      }
    }
    .v-toolbar__content{
      justify-content:space-between;
    }
    .menu-list{
      display:none;
    }
    .burger-button{
      display:block;
    }
    .primary--text{
      color: rgb(255, 152, 0) !important;
      caret-color: rgb(255, 152, 0) !important;
    }
  }
</style>
