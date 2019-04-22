<template>
  <div>
  <v-layout>
    <v-container grid-list-md text-xs-center>
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
                <div class="box-part" id="bp-left">
                    <div class="partition" id="partition-register">
                      <div class="partition-title">Резерв Онлайн</div>
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
                              <v-btn class="button" color="success" @click="submit">Забронировать</v-btn>
                            </form>
                            <div class="partition-title-1">
                              Внимание! При резерве вип-комнаты действует система депозита. Обязательный заказ на сумму не менее 800 грн.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box-part" id="bp-right">
                    <div class="box-img">
                      <img src="~/assets/roomplan/roomplan1-1.png" alt="roomplan">
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
                <div class="box-part" id="bp-left">
                    <div class="partition" id="partition-register">
                      <div class="partition-title">Резерв Онлайн</div>
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
                                v-model="selectKpi"
                                :items="itemsKpi"
                                :error-messages="selectKpiErrors"
                                label="Номер Стола"
                                required
                                @change="$v.selectKpi.$touch()"
                                @blur="$v.selectKpi.$touch()"
                              ></v-select>
                              <v-textarea
                                label="Пожелания"
                                v-model="wish"
                                value=""
                                rows="1"
                                hint="Есть пожелания?"
                              ></v-textarea>
                              <v-btn class="button" color="success" @click="submit">Забронировать</v-btn>
                            </form>
                            <div class="partition-title-1">
                              Внимание! При резерве вип-комнаты действует система депозита. Обязательный заказ на сумму не менее 800 грн.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box-part" id="bp-right">
                    <div class="box-img">
                      <img src="~/assets/roomplan/roomplan2-1.png" alt="roomplan">
                    </div>
                </div>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
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
  import { validationMixin } from 'vuelidate'
  import { required, minLength } from 'vuelidate/lib/validators'
  export default {
    data: vm => ({
      text: 'spme text',
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
      name: '',
      tel: '',
      time: '',
      number: '',
      select: null,
      selectKpi: null,
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
      select: { required },
      selectKpi: { required }
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
      selectKpiErrors () {
        const errors = []
        if (!this.$v.selectKpi.$dirty) return errors
        !this.$v.selectKpi.required && errors.push('обязательное поле')
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
      submit () {
        this.$v.$touch()
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
    font-size: 0;

    .box-part {
        display: inline-block;
        position: relative;
        vertical-align: top;
        box-sizing: border-box;
        height: 100%;
        width: 50%;
        &#bp-right {
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
        font-size: 12px;
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
</style>
