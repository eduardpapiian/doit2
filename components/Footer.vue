<template>
            <v-footer dark id="footer">
                <v-card class="dark white--text text-xs-center footer">
                    <v-card-text>
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
                        <div class="flex block-links justify-center">
                            <a class="links" href="https://www.facebook.com/doithookah/" target="_blank"><fb/><span>DOIT_VDNH</span></a>
                            <a class="links" href="https://www.instagram.com/doit_hookah" target="_blank"><inst/><span>DOIT</span></a>
                            <!--<a class="links" href="https://www.facebook.com/doitkpi/" target="_blank"><fb/><span>DOIT_KPI</span></a>-->
                            <!--<a class="links" href="https://www.instagram.com/doit_kpi/" target="_blank"><inst/><span>DOIT_KPI</span></a>-->
                        </div>
                        <div>
                            Почта: doit_hookah@ukr.net
                        </div>
                    </v-card-text>
                    <v-card-text class="white--text pt-0 footer-text">
                        Первый кальян-бар на ВДНХ, с ярким дизайнерским оформлением интерьера. Широкая палитра вкусов табака многих производителей от легкого Fumari до ядерного Tangiers. Приглашаем на трансляцию спортивных событий и турниры на игровых консолях, а также прочие интерактивные развлечения</v-card-text>
                    <v-divider></v-divider>

                    <v-card-text class="white--text">
                        &copy;2020 — <strong>E.P.</strong>
                    </v-card-text>
                </v-card>
            </v-footer>
</template>

<script>
  import fb from '~/components/fb.vue'
  import inst from '~/components/inst.vue'
  export default {
    name: 'my-footer',
    components: {
      fb,
      inst
    },

    data () {
      return {
        items: [
          { icon: 'apps', title: 'О Нас', to: '/' },
          { icon: 'bubble_chart', title: 'Акции', to: '/akcii' },
          { icon: 'bubble_chart', title: 'Где Найти', to: '/findus' },
          { icon: 'bubble_chart', title: 'Резерв', to: '/reserv' },
          { icon: 'bubble_chart', title: 'Меню', to: '/menu' },
          { icon: 'bubble_chart', title: 'Кейтеринг', to: '/keitering' },
          { icon: 'bubble_chart', title: 'Галерея', to: '/galery' }
        ]
      }
    },
    mounted () {

    },
    methods: {
    }
  }
</script>

<style lang="less" scoped>
    #footer{
        height:auto !important;
    }
    .footer{
        width:100%;
    }
    .dark{
        background-color:#212121;
    }
    .flex{
        display:flex;
    }
    .block-links{
        flex-wrap:wrap;
    }
    a{
        color:#fff;
        text-decoration:none;
    }
    .links{
        display:flex;
        align-items:center;
        margin:10px 20px;
        span{
            margin-top:3px;
            margin-left:10px;
        }
    }
    .footer-text{
        max-width:1000px;
        margin:0 auto;
    }
</style>

