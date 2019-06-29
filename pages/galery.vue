<template>
  <div>
    <vue-instagram token="2940749068.6268451.400ab9a0bc974ef78fb17be34a632197" :count="5" :tags="['hashtag1', 'hashtag2']" mediaType="image">
      <template slot="feeds" slot-scope="props">
        <li class="fancy-list"> {{ props.feed.link }} </li>
      </template>
      <template slot="error" slot-scope="props">
        <div class="fancy-alert"> {{ props.error.error_message }} </div>
      </template>
    </vue-instagram>
  </div>
  <!--<div>-->
    <!--<v-layout>-->
      <!--<v-container grid-list-md text-xs-center>-->
        <!--<h1 class="mb-3 top-title">Фото-галерея с Нашими гостями</h1>-->
        <!--<v-layout class="wrapp" row wrap>-->
        <!--<gallery :images="images" :index="index" @close="index = null"></gallery>-->
          <!--<div-->
                  <!--class="image"-->
                  <!--v-for="(image, imageIndex) in images"-->
                  <!--:key="imageIndex"-->
                  <!--@click="index = imageIndex"-->
                  <!--:style="{ backgroundImage: 'url(' + image + ')', width: '250px', height: '200px' }"-->
          <!--&gt;</div>-->
        <!--</v-layout>-->
      <!--</v-container>-->
    <!--</v-layout>-->
    <!--<div>-->
      <!--<Footer/>-->
    <!--</div>-->
  <!--</div>-->
</template>


  <script>
import VueInstagram from 'vue-instagram'
// import VueGallery from 'vue-gallery'
import Footer from '~/components/Footer.vue'
export default {
  head: {
    title: 'Галерея - DOIT Сеть кальян-баров',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Фото-галерея с Нашими гостями' },
      { name: 'og:title', content: 'Галерея - DOIT Сеть кальян-баров' },
      { name: 'og:description', content: 'Фото-галерея с Нашими гостями' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://doit.kiev.ua/galery' },
      { name: 'og:image', content: 'https://doit.kiev.ua' + require('~/assets/logo.jpg') }
    ]
  },
  data () {
    return {
      // images: [
      //   'https://doit.kiev.ua' + require('~/assets/gallery/1-min.jpg'),
      //   'https://doit.kiev.ua' + require('~/assets/gallery/2-min.jpg'),
      //   'https://doit.kiev.ua' + require('~/assets/gallery/3-min.jpg'),
      //   'https://doit.kiev.ua' + require('~/assets/gallery/4-min.jpg'),
      //   'https://doit.kiev.ua' + require('~/assets/gallery/5-min.jpg'),
      //   'https://doit.kiev.ua' + require('~/assets/gallery/6-min.jpg'),
      //   'https://doit.kiev.ua' + require('~/assets/gallery/7-min.jpg'),
      //   'https://doit.kiev.ua' + require('~/assets/gallery/8-min.jpg'),
      //   'https://doit.kiev.ua' + require('~/assets/gallery/9-min.jpg'),
      //   'https://doit.kiev.ua' + require('~/assets/gallery/10-min.jpg'),
      //   'https://doit.kiev.ua' + require('~/assets/gallery/11-min.jpg'),
      //   'https://doit.kiev.ua' + require('~/assets/gallery/12-min.jpg'),
      //   'https://doit.kiev.ua' + require('~/assets/gallery/13-min.jpg'),
      //   'https://doit.kiev.ua' + require('~/assets/gallery/14-min.jpg'),
      //   'https://doit.kiev.ua' + require('~/assets/gallery/15-min.jpg'),
      //   'https://doit.kiev.ua' + require('~/assets/gallery/16-min.jpg'),
      //   'https://doit.kiev.ua' + require('~/assets/gallery/17-min.jpg'),
      //   'https://doit.kiev.ua' + require('~/assets/gallery/18-min.jpg')
      //   // 'https://doit.kiev.ua' + require('~/assets/gallery/19-min.jpg'),
      //   // 'https://doit.kiev.ua' + require('~/assets/gallery/20-min.jpg')
      // ],
      index: null
    }
  },
  components: {
    VueInstagram,
    // 'gallery': VueGallery,
    Footer
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  .wrapp{
    display:flex;
    justify-content:center;
  }
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>
