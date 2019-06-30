<template>
      <v-layout>
        <v-flex container grid-list-md text-xs-center>
          <v-card>
            <v-container grid-list-sm >
              <v-layout row wrap>
                <v-flex
                        v-for="n in images"
                        :key="n"
                        xs4
                        d-flex
                >
                  <v-card flat tile class="d-flex">
                    <v-img
                            :src="n"
                            :lazy-src="n"
                            aspect-ratio="1"
                            class="grey lighten-2"
                    >
                      <template v-slot:placeholder>
                        <v-layout
                                fill-height
                                align-center
                                justify-center
                                ma-0
                        >
                          <!--<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>-->
                        </v-layout>
                      </template>
                    </v-img>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
</template>


  <script>
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
      images: [
        require('@/assets/gallery/1-min.jpg'),
        require('@/assets/gallery/2-min.jpg'),
        require('~/assets/gallery/3-min.jpg'),
        require('~/assets/gallery/4-min.jpg'),
        require('~/assets/gallery/5-min.jpg'),
        require('~/assets/gallery/6-min.jpg'),
        require('~/assets/gallery/7-min.jpg'),
        require('~/assets/gallery/8-min.jpg'),
        require('~/assets/gallery/9-min.jpg'),
        require('~/assets/gallery/10-min.jpg'),
        require('~/assets/gallery/11-min.jpg'),
        require('~/assets/gallery/12-min.jpg'),
        require('~/assets/gallery/13-min.jpg'),
        require('~/assets/gallery/14-min.jpg'),
        require('~/assets/gallery/15-min.jpg'),
        require('~/assets/gallery/16-min.jpg'),
        require('~/assets/gallery/17-min.jpg'),
        require('~/assets/gallery/18-min.jpg')
        // 'https://doit.kiev.ua' + require('~/assets/gallery/19-min.jpg'),
        // 'https://doit.kiev.ua' + require('~/assets/gallery/20-min.jpg')
      ],
      index: null
    }
  },
  components: {
    Footer
  },
  methods: {
    triggerClick () {
      alert('hello')
    }
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
  @media only screen and (min-width: 960px){
    .container {
      max-width: 900px;
    }
  }

</style>
