<template>
  <v-app dark>
    <!--<v-navigation-drawer-->
      <!--:mini-variant.sync="miniVariant"-->
      <!--:clipped="clipped"-->
      <!--v-model="drawer"-->
      <!--fixed-->
      <!--app-->
    <!--&gt;-->
      <!--<v-list>-->
        <!--<v-list-tile-->
          <!--router-->
          <!--:to="item.to"-->
          <!--:key="i"-->
          <!--v-for="(item, i) in items"-->
          <!--exact-->
        <!--&gt;-->
          <!--<v-list-tile-action>-->
            <!--<v-icon v-html="item.icon"></v-icon>-->
          <!--</v-list-tile-action>-->
          <!--<v-list-tile-content>-->
            <!--<v-list-tile-title v-text="item.title"></v-list-tile-title>-->
          <!--</v-list-tile-content>-->
        <!--</v-list-tile>-->
      <!--</v-list>-->
    <!--</v-navigation-drawer>-->
    <v-toolbar fixed app :clipped-left="clipped">
      <!--<v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>-->
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
      <v-layout justify-center row wrap>
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
      <!-- <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn> -->
    </v-toolbar>
    <v-content>
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!--<v-footer app>-->
      <!--<span>&copy; {{ new Date().getFullYear() }}</span>-->
    <!--</v-footer>-->
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: true,
        items: [
          { icon: 'apps', title: 'О Нас', to: '/' },
          { icon: 'bubble_chart', title: 'Акции', to: '/akcii' },
          { icon: 'bubble_chart', title: 'Где Найти', to: '/findus' },
          { icon: 'bubble_chart', title: 'Резерв', to: '/reserv' },
          { icon: 'bubble_chart', title: 'Меню', to: '/menu' },
          { icon: 'bubble_chart', title: 'Кейтеринг', to: '/keitering' },
          { icon: 'bubble_chart', title: 'Галерея', to: '/galery' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'DOIT'
      }
    }
  }
</script>

<style lang="less" scoped>
  .v-toolbar__title{
    font-family: 'Monoton', cursive;
    font-size:32px;
  }
</style>
