<template>
  <!--<div>-->
    <!--<vue-instagram token="2940749068.1677ed0.439891fc821f473b8376013e4543acda" :count="5" :tags="['hashtag1', 'hashtag2']" mediaType="image">-->
      <!--<template slot="feeds" slot-scope="props">-->
        <!--<li class="fancy-list"> {{ props.feed.link }} </li>-->
      <!--</template>-->
      <!--<template slot="error" slot-scope="props">-->
        <!--<div class="fancy-alert"> {{ props.error.error_message }} </div>-->
      <!--</template>-->
    <!--</vue-instagram>-->
  <!--</div>-->
  <div>
    <v-layout>
      <v-container grid-list-md text-xs-center>
        <v-layout class="wrapp" row wrap>
        <gallery :images="images" :index="index" @close="index = null"></gallery>
          <div
                  class="image"
                  v-for="(image, imageIndex) in images"
                  :key="imageIndex"
                  @click="index = imageIndex"
                  :style="{ backgroundImage: 'url(' + image + ')', width: '250px', height: '200px' }"
          ></div>
        </v-layout>
      </v-container>
    </v-layout>
  </div>
</template>


  <script>
// import VueInstagram from 'vue-instagram'
import VueGallery from 'vue-gallery'
export default {
  data () {
    return {
      images: [
        'http://localhost:3000' + require('~/assets/gallery/1.jpg'),
        'http://localhost:3000' + require('~/assets/gallery/2.jpg'),
        'http://localhost:3000' + require('~/assets/gallery/3.jpg'),
        'http://localhost:3000' + require('~/assets/gallery/4.jpg'),
        'http://localhost:3000' + require('~/assets/gallery/5.jpg'),
        'http://localhost:3000' + require('~/assets/gallery/6.jpg'),
        'http://localhost:3000' + require('~/assets/gallery/7.jpg'),
        'http://localhost:3000' + require('~/assets/gallery/8.jpg'),
        'http://localhost:3000' + require('~/assets/gallery/9.jpg'),
        'http://localhost:3000' + require('~/assets/gallery/10.jpg'),
        'http://localhost:3000' + require('~/assets/gallery/11.jpg'),
        'http://localhost:3000' + require('~/assets/gallery/12.jpg'),
        'http://localhost:3000' + require('~/assets/gallery/13.jpg'),
        'http://localhost:3000' + require('~/assets/gallery/14.jpg'),
        'http://localhost:3000' + require('~/assets/gallery/15.jpg'),
        'http://localhost:3000' + require('~/assets/gallery/16.jpg'),
        'http://localhost:3000' + require('~/assets/gallery/17.jpg'),
        'http://localhost:3000' + require('~/assets/gallery/18.jpg'),
        'http://localhost:3000' + require('~/assets/gallery/19.jpg'),
        'http://localhost:3000' + require('~/assets/gallery/20.jpg')
      ],
      index: null
    }
  },
  components: {
    // VueInstagram,
    'gallery': VueGallery
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
