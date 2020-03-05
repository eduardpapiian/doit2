<template>
  <div>
  <v-layout>
    <v-container grid-list-md text-xs-center>
        <h1 class="mb-3 top-title">Забронировать столик онлайн</h1>
    <v-layout row wrap>
      <v-tabs
      class="reserve-tabs"
      fixed-tabs
      centered
      dark
      icons-and-text
    >
      <v-tabs-slider color="orange"></v-tabs-slider>

      <v-tab href="#tab-1">
        DOIT ВДНХ
        <v-icon>where_to_vote</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        DOIT КПИ
        <v-icon>where_to_vote</v-icon>
      </v-tab>

      <v-tab-item
        :value="'tab-1'"
      >
        <v-card flat>
          <v-card-text>
            <div class="box">
                <div class="box-part bp-left">
                    <div class="partition partition-register">
                      <div class="partition-title">
                          <h2>Резерв Онлайн DOIT VDNH</h2>
                      </div>
                        <div class="partition-form">
                            <form>
                              <v-text-field
                                v-model="name"
                                :error-messages="nameErrors"
                                label="Имя"
                                required
                                @input="$v.name.$touch()"
                                @blur="$v.name.$touch()"
                              ></v-text-field>
                              <v-text-field
                                v-model="tel"
                                :error-messages="telErrors"
                                label="Телефон"
                                required
                                @input="$v.tel.$touch()"
                                @blur="$v.tel.$touch()"
                              ></v-text-field>
                              <v-menu
                                ref="menu1"
                                v-model="menu1"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                max-width="290px"
                                min-width="290px"
                              >
                                <template v-slot:activator="{ on }">
                                  <v-text-field
                                    v-model="dateFormatted"
                                    label="Дата"
                                    persistent-hint
                                    @blur="date = parseDate(dateFormatted)"
                                    v-on="on"
                                  ></v-text-field>
                                </template>
                                <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                              </v-menu>
                              <v-text-field
                                v-model="time"
                                :error-messages="timeErrors"
                                type="time"
                                label="Время"
                                required
                                @input="$v.time.$touch()"
                                @blur="$v.time.$touch()"
                              ></v-text-field>
                              <v-text-field
                                v-model="number"
                                :error-messages="numberErrors"
                                type="number"
                                label="Количество гостей"
                                required
                                @input="$v.number.$touch()"
                                @blur="$v.number.$touch()"
                              ></v-text-field>
                              <v-select
                                v-model="select"
                                :items="items"
                                :error-messages="selectErrors"
                                label="Номер Стола"
                                required
                                @change="$v.select.$touch()"
                                @blur="$v.select.$touch()"
                              ></v-select>
                              <v-textarea
                                label="Пожелания"
                                v-model="wish"
                                value=""
                                rows="1"
                                hint="Есть пожелания?"
                              ></v-textarea>
                              <v-btn class="button" color="success" @click="submitVdnh">Забронировать</v-btn>
                            </form>
                            <div class="partition-title-1">
                              Внимание! При резерве вип-комнаты действует система депозита. Обязательный заказ на сумму не менее 800 грн.<br>
                              Время резерва неограниченно, за исключением, если вип-комната, не была забронирована минимум через 4 часа, с момента Вашего прихода<br>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box-part bp-right">
                    <div class="box-img">
                      <img src="~/assets/roomplan/roomplan1-1-min.png" alt="roomplan">
                    </div>
                </div>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item
        :value="'tab-2'"
      >
        <v-card flat>
          <v-card-text>
            <div class="box">
                <div class="box-part bp-left">
                    <div class="partition partition-register">
                      <div class="partition-title">
                          <h2>Резерв Онлайн DOIT KPI</h2>
                      </div>
                        <div class="partition-form">
                            <form>
                              <v-text-field
                                v-model="name"
                                :error-messages="nameErrors"
                                label="Имя"
                                required
                                @input="$v.name.$touch()"
                                @blur="$v.name.$touch()"
                              ></v-text-field>
                              <v-text-field
                                v-model="tel"
                                :error-messages="telErrors"
                                label="Телефон"
                                required
                                @input="$v.tel.$touch()"
                                @blur="$v.tel.$touch()"
                              ></v-text-field>
                              <v-menu
                                ref="menu2"
                                v-model="menu2"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                max-width="290px"
                                min-width="290px"
                              >
                                <template v-slot:activator="{ on }">
                                  <v-text-field
                                    v-model="dateFormatted"
                                    label="Дата"
                                    persistent-hint
                                    @blur="date = parseDate(dateFormatted)"
                                    v-on="on"
                                  ></v-text-field>
                                </template>
                                <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
                              </v-menu>
                              <v-text-field
                                v-model="time"
                                :error-messages="timeErrors"
                                type="time"
                                label="Время"
                                required
                                @input="$v.time.$touch()"
                                @blur="$v.time.$touch()"
                              ></v-text-field>
                              <v-text-field
                                v-model="number"
                                :error-messages="numberErrors"
                                type="number"
                                label="Количество гостей"
                                required
                                @input="$v.number.$touch()"
                                @blur="$v.number.$touch()"
                              ></v-text-field>
                              <v-select
                                v-model="select"
                                :items="itemsKpi"
                                :error-messages="selectErrors"
                                label="Номер Стола"
                                required
                                @change="$v.select.$touch()"
                                @blur="$v.select.$touch()"
                              ></v-select>
                              <v-textarea
                                label="Пожелания"
                                v-model="wish"
                                value=""Акции кальян-баров DOIT
                                rows="1"
                                hint="Есть пожелания?"
                              ></v-textarea>
                              <v-btn class="button" color="success" @click="submitKpi">Забронировать</v-btn>
                            </form>
                            <div class="partition-title-1">
                              Внимание! При резерве вип-комнаты действует система депозита. Обязательный заказ на сумму не менее 800 грн.
                              Время резерва неограниченно, за исключением, если вип-комната, не была забронирована минимум через 4 часа, с момента Вашего прихода<br>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box-part bp-right">
                    <div class="box-img">
                      <img src="~/assets/roomplan/roomplan2-1-min.png" alt="roomplan">
                    </div>
                </div>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
    </v-layout>
        <no-ssr>
            <sweet-modal ref="success" modal-theme="dark" icon="success">
                Столик {{select}} Успешно зарезервирован!<br>
                Мы Вам перезвоним Для подтверждения резерва
            </sweet-modal>
            <sweet-modal ref="error" modal-theme="dark" icon="error">
                Ошибка
            </sweet-modal>
        </no-ssr>
  </v-container>
</v-layout>
<div>
  <Footer/>
</div>
</div>
</template>


<script>
  import Footer from '~/components/Footer.vue'
  import { validationMixin } from 'vuelidate'
  import { required, minLength } from 'vuelidate/lib/validators'
  import axios from 'axios'
  export default {
    head: {
      title: 'Резерв Онлайн - DOIT Сеть кальян-баров',
      htmlAttrs: {
        lang: 'ru',
        amp: true
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Быстрое нлайн бронирование столиков, в сети кальн-баров DOIT' },
        { name: 'og:title', content: 'Резерв Онлайн - DOIT Сеть кальян-баров' },
        { name: 'og:description', content: 'Быстрое нлайн бронирование столиков, в сети кальн-баров DOIT' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://doit.kiev.ua/reserv' },
        { name: 'og:image', content: 'https://doit.kiev.ua' + require('~/assets/logo.jpg') }
      ]
    },
    data: vm => ({
      text: 'sоme text',
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: '',
      menu2: '',
      name: '',
      tel: '',
      time: '',
      number: '',
      select: '',
      items: [
        '1',
        '2',
        '3',
        '4 - VIP ROOM',
        '5',
        '6',
        '7'
      ],
      itemsKpi: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8 - VIP ROOM'
      ],
      wish: ''
    }),
    mixins: [validationMixin],
    validations: {
      name: { required },
      tel: { required, minLength: minLength(10) },
      time: { required },
      number: { required },
      select: { required }
    },
    components: {
      Footer
    },
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('обязательное поле')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('обязательное поле')
        return errors
      },
      telErrors () {
        const errors = []
        if (!this.$v.tel.$dirty) return errors
        !this.$v.tel.minLength && errors.push('введите коректный номер')
        !this.$v.tel.required && errors.push('обязательно поле')
        return errors
      },
      timeErrors () {
        const errors = []
        if (!this.$v.time.$dirty) return errors
        !this.$v.time.required && errors.push('обязательно поле')
        return errors
      },
      numberErrors () {
        const errors = []
        if (!this.$v.number.$dirty) return errors
        !this.$v.number.required && errors.push('обязательно поле')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      }
    },
    methods: {
      submitVdnh () {
        this.$v.$touch()
        if (this.$v.$invalid) {
          return
        }
        let data = {
          name: this.name,
          phone: this.tel,
          date: this.dateFormatted,
          time: this.time,
          guest: this.number,
          table: this.select,
          wishes: this.wish
        }
        axios
          .post(`api/postvdnh`, data)
          .then(response => {
            if (response.data.ok === true) {
              this.$refs.success.open()
              setTimeout(() => {
                this.$v.$reset()
                this.$refs.success.close()
                this.name = ''
                this.tel = ''
                this.dateFormatted = ''
                this.time = ''
                this.number = ''
                this.select = false
                this.wish = ''
              }, 4000)
            }
          })
          .catch(error => {
            if (!error.response.data.ok) {
              this.$v.$reset()
              this.$refs.error.open()
              setTimeout(() => {
                this.$refs.error.close()
              }, 4000)
            }
          })
      },
      submitKpi () {
        this.$v.$touch()
        if (this.$v.$invalid) {
          return
        }
        let data = {
          name: this.name,
          phone: this.tel,
          date: this.dateFormatted,
          time: this.time,
          guest: this.number,
          table: this.select,
          wishes: this.wish
        }
        axios
          .post(`api/postkpi`, data)
          .then(response => {
            if (response.data.ok === true) {
              this.$refs.success.open()
              setTimeout(() => {
                this.$v.$reset()
                this.$refs.success.close()
                this.name = ''
                this.tel = ''
                this.dateFormatted = ''
                this.time = ''
                this.number = ''
                this.select = false
                this.wish = ''
              }, 4000)
            }
          })
          .catch(error => {
            if (!error.response.data.ok) {
              this.$v.$reset()
              this.$refs.error.open()
              setTimeout(() => {
                this.$refs.error.close()
              }, 4000)
            }
          })
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.tel = ''
        this.select = null
        this.time = ''
        this.number = ''
      },
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      }
    },
    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      }
    }
  }
</script>


<style lang="scss" scoped>
$background_color: #404142;
$github_color: #DBA226;
$facebook_color: #3880FF;
.reserve-tabs{
  width:100%;
}
.box {
    display:flex;
    align-items: center;
    overflow: hidden;
    border-radius: 2px;
    box-sizing: border-box;
    color: #8b8c8d;

    .box-part {
        display: inline-block;
        position: relative;
        vertical-align: top;
        box-sizing: border-box;
        height: 100%;
        width: 50%;
        &.bp-right {
            // background: url("../assets/roomplan/roomplan.jpg") no-repeat top left;
            // background-size: 100%;
            margin-right:20px;
            // border-left: 1px solid #eee;
        }
    }

    .box-img {
        // position: absolute;
        // left: 0;
        // bottom: 0;
        // width: 100%;
        img{
          width:100%;
        }
    }

    .box-error-message {
        position: relative;
        overflow: hidden;
        box-sizing: border-box;

        height: 0;
        line-height: 32px;
        padding: 0 12px;
        text-align: center;
        width: 100%;
        font-size: 11px;
        color: white;
        background: #F38181;
    }

    .partition {
        width: 100%;
        height: 100%;

        .partition-title {
            color:#fff;
            box-sizing: border-box;
            padding: 20px;
            width: 100%;
            text-align: center;
            letter-spacing: 1px;
            font-size: 20px;
            font-weight: 300;
        }
        .partition-title-1 {
            color:#fff;
            box-sizing: border-box;
            width: 100%;
            text-align: center;
            letter-spacing: 1px;
            font-size: 14px;
            padding-top:15px;
        }

        .partition-form {
            padding: 0 20px;
            box-sizing: border-box;
            padding-bottom: 20px;
        }
    }

    input[type=password],
    input[type=text] {
        display: block;
        box-sizing: border-box;
        margin-bottom: 4px;
        width: 100%;
        font-size: 16px;
        line-height: 2;
        border: 0;
        border-bottom: 1px solid #DDDEDF;
        padding: 4px 8px;
        transition: 0.5s all;
        outline: none;
    }



    .large-btn {
        width: 100%;
        background: white;

        span {
            font-weight: 600;
        }
        &:hover {
            color: white !important;
        }
    }

    .button-set {
        margin-bottom: 8px;
    }

    #register-btn,
    #signin-btn {
        margin-left: 8px;
    }

    .facebook-btn {
        border-color: $facebook_color;
        color: $facebook_color;
        &:hover {
            border-color: $facebook_color;
            background: $facebook_color;
        }
    }

    .github-btn {
        border-color: $github_color;
        color: $github_color;
        &:hover {
            border-color: $github_color;
            background: $github_color;
        }
    }

    .autocomplete-fix {
        position: absolute;
        visibility: hidden;
        overflow: hidden;
        opacity: 0;
        width: 0;
        height: 0;
        left: 0;
        top: 0;
    }
}

.pop-out-enter-active,
.pop-out-leave-active {
    transition: all 0.5s;
}

.pop-out-enter,
.pop-out-leave-active {
    opacity: 0;
    transform: translateY(24px);
}
</style>

<style lang="less">
  .box input[type=password], .box input[type=text]{
    margin-bottom:0 !important;
  }

  @media only screen and (max-width: 800px){
      .box{
          flex-direction:column-reverse;
      }
      .box-part {
          width: 100% !important;
      }
      .v-input{
          font-size: 17px !important;
      }
      input[type="color"],
      input[type="date"],
      input[type="datetime"],
      input[type="datetime-local"],
      input[type="email"],
      input[type="month"],
      input[type="number"],
      input[type="password"],
      input[type="search"],
      input[type="tel"],
      input[type="text"],
      input[type="time"],
      input[type="url"],
      input[type="week"],
      select:focus,
      textarea {
          font-size: 17px !important;
      }
  }
</style>
