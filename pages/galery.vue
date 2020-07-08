<template>
  <div>
      <v-layout>
        <v-flex container grid-list-md text-xs-center>
          <v-card>
            <v-container grid-list-sm >
              <v-layout row wrap>
                <div class=”gallery”>
                  <figure class="gallery__item gallery__item--1">
                  <img src="~assets/gallery/1-min.jpg" class="gallery__img" alt="Image 1">
                  </figure>
                  <figure class="gallery__item gallery__item--2">
                    <img src="~assets/gallery/2-min.jpg" class="gallery__img" alt="Image 2">
                  </figure>
                  <figure class="gallery__item gallery__item--3">
                    <img src="~assets/gallery/8-min.jpg" class="gallery__img" alt="Image 3">
                  </figure>
                  <figure class="gallery__item gallery__item--4">
                    <img src="~assets/gallery/4-min.jpg" class="gallery__img" alt="Image 4">
                  </figure>
                  <figure class="gallery__item gallery__item--5">
                    <img src="~assets/gallery/5-min.jpg" class="gallery__img" alt="Image 5">
                  </figure>
                  <figure class="gallery__item gallery__item--6">
                    <img src="~assets/gallery/7-min.jpg" class="gallery__img" alt="Image 6">
                  </figure>
                </div>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    <div>
      <Footer/>
    </div>
  </div>
</template>


  <script>
import Footer from '~/components/Footer.vue'
export default {
  head: {
    title: 'Галерея - DOIT Первый кальян-бар на ВДНХ',
    htmlAttrs: {
      lang: 'ru',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Фото-галерея с Нашими гостями' },
      { name: 'og:title', content: 'Галерея - DOIT Первы кальян-бар на ВДНХ' },
      { name: 'og:description', content: 'Фото-галерея с Нашими гостями' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://doit.kiev.ua/galery' },
      { name: 'og:image', content: 'https://doit.kiev.ua' + require('~/assets/logo.jpg') }
    ]
  },
  data () {
    return {
      // images: [
      //   require('@/assets/gallery/1-min.jpg'),
      //   require('@/assets/gallery/2-min.jpg'),
      //   require('~/assets/gallery/3-min.jpg'),
      //   // require('~/assets/gallery/4-min.jpg'),
      //   // require('~/assets/gallery/5-min.jpg'),
      //   // require('~/assets/gallery/6-min.jpg'),
      //   require('~/assets/gallery/7-min.jpg'),
      //   require('~/assets/gallery/8-min.jpg'),
      //   require('~/assets/gallery/9-min.jpg'),
      //   // require('~/assets/gallery/10-min.jpg'),
      //   require('~/assets/gallery/11-min.jpg'),
      //   require('~/assets/gallery/12-min.jpg'),
      //   require('~/assets/gallery/13-min.jpg'),
      //   // require('~/assets/gallery/14-min.jpg'),
      //   require('~/assets/gallery/15-min.jpg'),
      //   require('~/assets/gallery/16-min.jpg'),
      //   require('~/assets/gallery/17-min.jpg'),
      //   require('~/assets/gallery/18-min.jpg')
      //   // 'https://doit.kiev.ua' + require('~/assets/gallery/19-min.jpg'),
      //   // 'https://doit.kiev.ua' + require('~/assets/gallery/20-min.jpg')
      // ],
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
  .gallery {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 5vw);
    grid-gap: 15px;
  }
  .gallery__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .gallery__item--1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  .gallery__item--2 {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  .gallery__item--3 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 6;
  }
  .gallery__item--4 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 6;
  }
  .gallery__item--5 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 9;
  }
  .gallery__item--6 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 6;
    grid-row-end: 9;
  }
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
