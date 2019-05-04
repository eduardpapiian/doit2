<template>
  <div class="main-wrapper">
    <!--<quick-menu-->
            <!--:menu-count="count"-->
            <!--:icon-class="icons"-->
            <!--:menu-url-list="list"-->
            <!--:backgroundColor="backgroundColor"-->
            <!--:position="position"-->
    <!--&gt;</quick-menu>-->
    <div class="about-us-block">
        <div class="title-block">
            <h1 class="desktop-title">Сеть кальян-баров DOIT в Киеве</h1>
        </div>
      <div class="flex first-block">
      <div class="left-block">
        <div class="about-us-block_tabak blocks">
          <div class="tabak-img img">
            <div class="bg">
            </div>
            <div class="marquee">
              <span>Широкий выбор кальянов</span>
            </div>
            <img src="~assets/about-us/tabak-min.jpg" alt="img">
          </div>
          <div class="tabak-text text">
            Вы всегда сможете насладиться ароматным кальяном. Наши кальянщики смогут предоставить Вам широкий ассортимент табаков на любой вкус. Поэтому если Вы ищете комфортное и уютное место для отдыха, двери наших кальян-баров всегда открыты для Вас, а на нашем сайте Вы с легкостью сможете забронировать столик и просмотреть наше меню
          </div>
        </div>
        <div class="about-us-block_games blocks">
          <div class="games-img img">
            <div class="bg">
            </div>
            <div class="marquee">
              <span>Настольные игры</span>
            </div>
            <img src="~assets/about-us/games-min.jpg" alt="img">
          </div>
          <div class="games-text text">
            Все знают, что настольные игры  - это всегда интерактивно и весело, особенно в компании друзей. У нас всегда большой выбор настолок для Вас: Дженга, Монополия, Карты конфликта, Правда или Действие, шашки, шахматы, нарды, игральные карты. Частенько стараемся пополнять список еще более интересными и разнообразными играмию С любовью для Вас
          </div>
        </div>
      </div>
      <div class="right-block">
        <div class="about-us-block_coktails blocks">
          <div class="coktails-img img">
            <div class="bg">
            </div>
            <div class="marquee">
              <span>Авторские коктейли</span>
            </div>
            <img src="~assets/about-us/coktails-min.jpg" alt="img">
          </div>
          <div class="coktails-text text">
            Можем предложить достаточно широкий ассортимент алкоголя, от крафтового пива до интересных коктейлей, как классических, так и авторских. Наибольшей популярностью пользуются сеты из шотов - отличный вариант для больших компаний. Так же наш бармен может удивить вас потрясающим безалкогольным коктейлем, который не оставит тебя равнодушным, вообщем мы всегда найдем чем вас побаловать.
        </div>
        </div>
        <div class="about-us-block_ps blocks">
          <div class="ps-img img">
            <div class="bg">
            </div>
            <div class="marquee">
              <span>Sony PlayStation</span>
            </div>
            <img src="~assets/about-us/ps-min.jpg" alt="img">
          </div>
          <div class="ps-text text">
            При заказе кальяна в Нашем баре, Вы можете совершенно бесплатно погрузиться в мир интерактивных развлечеий. Устраивайте турниры по FIFA, почувствуйте себя супер-героем в INJUSTICE, или гонщиком в BLUR. Также Вас ждет множество настольных игр. Поэтому забронировав у нас столик, Вы можете быть уверенны в отличном времепровождении
        </div>
        </div>
      </div>
      </div>
    </div>
    <div class="discount">
      <h2>Популярные акции</h2>
      <div class="flex second-block">
        <div class="discount_left-block flex">
          <div class="discount_left-block_img">
            <div class="bg">
            </div>
            <div class="marquee">
              <span>День Рождения в DOIT</span>
            </div>
            <img src="~assets/about-us/discount/leftimg-min.jpg" alt="img">
          </div>
          <div class="discount_left-block_text">
            <div class="">
              Именинники<br>
              при заказе кальяна<br>
              получают ВТОРОЙ кальян<br>
              В ПОДАРОК
            </div>
          </div>
        </div>
        <div class="discount_right-block flex">
          <div class="discount_right-block_text">
            <div class="">
              С Пн по Чт <br>
              при заказе кальяна<br>
              до 17 : 00 скидка 30%<br>
              на все кальяны с табаком Serbetli
            </div>
          </div>
          <div class="discount_left-block_img">
            <div class="bg">
            </div>
            <div class="marquee">
              <span>Счастливые часы</span>
            </div>
            <img src="~assets/about-us/discount/rightimg-min.jpg" alt="img">
          </div>
        </div>
      </div>
      <v-expansion-panel class="mob-accordion">
        <v-expansion-panel-content
                v-for="(item,i) in items"
                :key="i"
        >
          <template v-slot:header>
            <div>{{item.title}}</div>
          </template>
          <v-card>
            <v-card-text>{{item.description}}</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
    <div class="find-us">
      <h2>Где Нас Найти</h2>
      <div class="panels ">
        <div class="panel panel1">
          <div class="p-rows">
            <a href="tel:+380636087393">+38 (063) 608 73 93</a>
            <a href="tel:+380993243616">+38 (099) 324 36 16</a>
          </div>
          <div class="p-rows">DOIT VDNH</div>
          <div class="p-rows maps">
            <div class="adress">
              Голосеевский проспект 130/57
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20348.934628336476!2d30.453641790048202!3d50.3923410909551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x48c7d50f130664dd!2sDOIT!5e0!3m2!1sru!2sua!4v1554399787362!5m2!1sru!2sua" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
        </div>
        <div class="panel panel2">
          <div class="p-rows">
            <a href="tel:+380970712426">+38 (097) 071 24 26</a>
            <a href="tel:+380995095072">+38 (099) 509 50 72</a>
          </div>
          <div class="p-rows">DOIT KPI</div>
          <div class="p-rows maps">
            <div class="adress">
              Провиантская 5
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4467452027307!2d30.470887342845735!3d50.45140511053237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce86a62ddc23%3A0x46bb86cedc195ba6!2z0YPQuy4g0J_RgNC-0LLQuNCw0L3RgtGB0LrQsNGPLCA1LCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1554400409371!5m2!1sru!2sua" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
import quickMenu from 'vue-quick-menu'
import 'font-awesome/css/font-awesome.min.css'
// import { BadgerAccordion, BadgerAccordionItem } from 'vue-badger-accordion'

export default {
  mounted () {
    const panels = document.querySelectorAll('.panel')

    function toggleOpen () {
      // console.log('Hello')
      this.classList.toggle('open')
    }

    function toggleActive (e) {
      // console.log(e.propertyName)
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
      }
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen))
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))
  },
  components: {
    Parallax,
    quickMenu
    // BadgerAccordion,
    // BadgerAccordionItem
  },
  data () {
    return {
      // count: 4,
      // icons: [ 'fa fa-home', 'fa fa-comment', 'fa fa-code', 'fa fa-envelope' ],
      // list: [{ 'isLink': false }, { 'isLink': true, url: '/doo' }, { 'isLink': true, url: '/foo' }, { 'isLink': false }],
      // backgroundColor: '#ff9800',
      // color: '#ffffff',
      // position: 'bottom-right',
      items: [
        {
          title: 'Широкий выбор кальянов',
          description: 'Вы всегда сможете насладиться ароматным кальяном. Наши кальянщики смогут предоставить Вам широкий ассортимент табаков на любой вкус. Поэтому если Вы ищете комфортное и уютное место для отдыха, двери наших кальян-баров всегда открыты для Вас, а на нашем сайте Вы с легкостью сможете забронировать столик и просмотреть наше меню'
        },
        {
          title: 'Настольные игры',
          description: 'Все знают, что настольные игры  - это всегда интерактивно и весело, особенно в компании друзей. У нас всегда большой выбор настолок для Вас: Дженга, Монополия, Карты конфликта, Правда или Действие, шашки, шахматы, нарды, игральные карты. Частенько стараемся пополнять список еще более интересными и разнообразными играмию С любовью для Вас'
        },
        {
          title: 'Авторские коктейли',
          description: 'Можем предложить достаточно широкий ассортимент алкоголя, от крафтового пива до интересных коктейлей, как классических, так и авторских. Наибольшей популярностью пользуются сеты из шотов - отличный вариант для больших компаний. Так же наш бармен может удивить вас потрясающим безалкогольным коктейлем, который не оставит тебя равнодушным, вообщем мы всегда найдем чем вас побаловать'
        },
        {
          title: 'Sony PlayStation',
          description: 'При заказе кальяна в Нашем баре, Вы можете совершенно бесплатно погрузиться в мир интерактивных развлечеий. Устраивайте турниры по FIFA, почувствуйте себя супер-героем в INJUSTICE, или гонщиком в BLUR. Также Вас ждет множество настольных игр. Поэтому забронировав у нас столик, Вы можете быть уверенны в отличном времепровождении'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  .mob-accordion{
    display:none;
  }
  .wrapper{
    background-color:black;
  }
  .no-opacity{
    opacity:0;
  }
  .title-block{
    position:relative;
    width:100%;
    h1{
      font-size:32px;
      position:absolute;
      top:-200px;
      background-color:rgba(19, 11, 44, 0.9);
      padding:0 10px;
    }
  }

h2{
  margin:20px 0;
}
.flex{
  display:flex;
}
.about-us-block{
  background-color:black;
  max-width: 1300px;
  margin:0 auto;
  padding-left:30px;
  padding-right:30px;
  .left-block, .right-block{
    margin:0 auto;
    display:flex;
  }
  .blocks{
    transition: .5s;
    margin: 0 5px;
    max-width:370px;
    background-color:rgba(255, 255, 255, 0.9);
    color:black;
    width:100%;
    min-width:250px;
    .img{
      position:relative;
      .bg{
        opacity:0;
        transition: .5s;
        position:absolute;
        width:100%;
        height:99%;
        background-color:#f0452b;
      }
      .marquee{
        display:flex;
        align-items:center;
        position:absolute;
        width:100%;
        height:100%;
        font-size:50px;
        font-weight:bold;
        color:#f0452b;
        overflow: hidden;
        white-space: nowrap;
         span {
          display:none;
          }
          @-webkit-keyframes marquee {
            0%{-webkit-transform: translate(0, 0);}
            100%{-webkit-transform: translate(-100%, 0);}
            }
            @keyframes marquee{
            0%{transform: translate(0, 0);}
            100%{transform: translate(-100%, 0)}
          }
      }
      img{
        width:100%;
      }
    }
    .text{
      padding:30px;
      text-align: center;
    }
    &:hover{
      background-color:rgba(19, 11, 44, 0.6);
      color:#fff;
      .bg{
        opacity:0.4;
      }
      .marquee{
        span{
          opacity:0.8;
          display:inline-block;
          padding-left:100%;
          -webkit-animation: marquee 10s infinite linear;
          animation: marquee 10s infinite linear;
        }
      }
    }
  }
  &:after {
  content: '';
  display: block;
  clear: both;
}
&_tabak.blocks{
  margin-left:0;
}
&_ps.blocks{
  margin-right:0;
  }
}
.discount{
  max-width: 1300px;
  margin:0 auto;
  padding-left:30px;
  padding-right:30px;
  &_left-block{
      width:50%;
      align-items: center;
    &_img{
      max-width:470px;
      position:relative;
      .bg{
        opacity:0;
        transition: .5s;
        position:absolute;
        width:100%;
        height:99%;
        background-color:#0FC;
      }
      .marquee{
        display:flex;
        align-items:center;
        position:absolute;
        width:100%;
        height:100%;
        font-size:50px;
        font-weight:bold;
        color:#0FC;
        overflow: hidden;
        white-space: nowrap;
         span {
          display:none;
          }
          @-webkit-keyframes marquee {
            0%{-webkit-transform: translate(0, 0);}
            100%{-webkit-transform: translate(-100%, 0);}
            }
            @keyframes marquee{
            0%{transform: translate(0, 0);}
            100%{transform: translate(-100%, 0)}
          }
      }
      img{
        width:100%;
      }
    }
    &_text{
      text-align:right;
      padding-right:10px;
    }
    &:hover{
      .bg{
        opacity:0.2;
      }
      .marquee{
        span{
          opacity:0.7;
          display:inline-block;
          padding-left:100%;
          -webkit-animation: marquee 10s infinite linear;
          animation: marquee 10s infinite linear;
        }
      }
    }
  }
  &_right-block{
      width:50%;
      align-items: center;
    &_img{
      max-width:470px;
      position:relative;
      .bg{
        opacity:0;
        transition: .5s;
        position:absolute;
        width:100%;
        height:99%;
        background-color:#0FC;
      }
      .marquee{
        display:flex;
        align-items:center;
        position:absolute;
        width:100%;
        height:100%;
        font-size:50px;
        font-weight:bold;
        color:#0FC;
        overflow: hidden;
        white-space: nowrap;
         span {
          display:none;
          }
          @-webkit-keyframes marquee {
            0%{-webkit-transform: translate(0, 0);}
            100%{-webkit-transform: translate(-100%, 0);}
            }
            @keyframes marquee{
            0%{transform: translate(0, 0);}
            100%{transform: translate(-100%, 0)}
          }
      }
      img{
        width:100%;
      }
    }
    &_text{
      min-width:180px;
      padding-left:10px;
      border-left:1px solid #fff;
    }
    &:hover{
      .bg{
        opacity:0.2;
      }
      .marquee{
        span{
          opacity:0.8;
          display:inline-block;
          padding-left:100%;
          -webkit-animation: marquee 10s infinite linear;
          animation: marquee 10s infinite linear;
        }
      }
    }
  }
}
.find-us{
  max-width: 1300px;
  margin:0 auto;
  padding-left:30px;
  padding-right:30px;
  .panels {
    overflow: hidden;
    display: flex;
    padding-bottom:120px;
  }
  .panel {
    overflow:hidden;
    cursor:pointer;
    box-shadow: inset 0 0 0 5px rgba(255,255,255,0.1);
    color: white;
    text-align: center;
    align-items: center;
    /* Safari transitionend event.propertyName === flex */
    /* Chrome + FF transitionend event.propertyName === flex-grow */
    transition:
      font-size 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
      flex 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
      background 0.2s;
    font-size: 20px;
    background-size: cover;
    background-position: center;
    flex: 1;
    justify-content: center;
    display: flex;
    flex-direction: column;
    a{
      text-decoration:none;
      font-size:25px;
      color:#fff;
      padding: 0 10px;
      margin:10px 0;
      text-shadow: 0px 0px 13px #000000;
      background-color:rgba(19, 11, 44, 0.6);;
    }
    .maps{
      height:300px;
      .adress{
        font-size:25px;
        padding:20px 0;
        text-shadow: 0px 0px 13px #000000;
        background-color:rgba(19, 11, 44, 0.6);
        padding:0 10px;
        margin: 20px 0;
      }
    }
  }

  .panel1 { background-image:url(~assets/about-us/findus/doit-min.jpg); }
  .panel2 { background-image:url(~assets/about-us/findus/doitkpi-min.jpg); }

  /* Flex Items */
  .panel > * {
    margin: 0;
    width: 100%;
    transition: transform 0.5s;
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .panel > *:first-child { transform: translateY(-100%); }
  .panel.open-active > *:first-child { transform: translateY(0); }
  .panel > *:last-child { transform: translateY(100%); }
  .panel.open-active > *:last-child { transform: translateY(0); }

  .panel .p-rows {
    flex-direction:column;
    text-transform: uppercase;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
    font-size: 2em;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    a{
      z-index:999;
    }
  }

  .panel .p-rows:nth-child(2) {
    font-size: 2em;
  }

  .panel.open {
    flex: 5;
    font-size: 30px;
  }

  @media only screen and (max-width: 600px) {
    .panel p {
      font-size: 1em;
    }
  }
}
  @media only screen and (max-width: 1100px){
    .desktop-title{
      display:none;
    }
    .first-block{
      flex-direction:column;
      .blocks{
        max-width:100%;
      }
      .about-us-block_games{
        margin-right:0;
      }
      .right-block{
        margin-top:10px;
        .about-us-block_coktails{
          margin-left:0;
        }
      }
    }
    .second-block{
      flex-direction:column;
      .discount_left-block{
        width:100%;
        &_img{
          max-width:50%;
        }
        &_text{
          width: 50%
        }
      }
      .discount_right-block{
        width:100%;
        &_text{
          width: 50%;
          padding-left: 0;
          border-left: none;
        }
      }
    }

  }
  @media screen and (max-width: 588px){
    .first-block{
      display:none;
    }
    .mob-accordion{
      display:block;
    }
    .discount_left-block{
      display:flex;
      flex-direction:column;
      .discount_left-block_img{
        max-width:100%;
      }
      .discount_left-block_text{
        width: 100%;
        padding-right: 0;
      }
    }
    .discount_right-block{
      flex-direction:column-reverse;
      .discount_left-block_img{
        max-width: 100%;
        width:100%;
      }
      .discount_right-block_text{
        width:100%;
      }
    }
    .panels{
      flex-direction:column;
    }
  }
  @media screen and (max-width: 376px){

  }
</style>

<style lang="less">
  .theme--dark.v-expansion-panel .v-expansion-panel__container {
    background-color: transparent;
    .v-expansion-panel__header{
      color:#ff9800;
      padding-left:0;
      padding-right:0;
    }
  }
  .quick-menu{
    z-index:1;
  }
</style>
