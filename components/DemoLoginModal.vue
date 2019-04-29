<template>
    <no-ssr>
        <div>
          <sweet-modal ref="openVdnhModal" modal-theme="dark" overlay-theme="dark" :width="modalWidth" class="modal-vdnh" v-on:close="closeModal">
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
                                  v-if="isVdnh"
                                  v-model="select"
                                  :items="items"
                                  :error-messages="selectErrors"
                                  label="Номер Стола"
                                  required
                                  @change="$v.select.$touch()"
                                  @blur="$v.select.$touch()"
                                ></v-select>
                                <v-select
                                  v-else
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
                                  value=""
                                  rows="1"
                                  hint="Есть пожелания?"
                                ></v-textarea>
                                <v-btn v-if="isVdnh"  class="button" color="success" @click="submitVdnh">Забронировать</v-btn>
                                <v-btn v-else class="button" color="success" @click="submitKpi">Забронировать</v-btn>
                              </form>
                          </div>
                      </div>
                  </div>
                  <div class="box-part" id="bp-right">
                      <div class="box-img">
                        <img v-if="isVdnh" src="~/assets/roomplan/roomplan1-1-min.png" alt="roomplan">
                        <img v-else src="~/assets/roomplan/roomplan2-1-min.png" alt="roomplan">
                      </div>
                  </div>
              </div>
          </sweet-modal>
        <sweet-modal modal-theme="dark" ref="addNot">
            Внимание! При резерве вип-комнаты действует система депозита. Обязательный заказ на сумму не менее 800 грн.
            <v-btn color="success" slot="button" v-on:click="close">OK</v-btn>
        </sweet-modal>
         <sweet-modal ref="success" modal-theme="dark" icon="success">
             Столик {{select}} Успешно зарезервирован!<br>
             Мы Вам перезвоним Для подтверждения резерва
         </sweet-modal>
        </div>
    </no-ssr>
</template>
<script>
  import { validationMixin } from 'vuelidate'
  import { required, minLength } from 'vuelidate/lib/validators'
  import axios from 'axios'
  const MODAL_WIDTH = 780

  export default {
    name: 'ReserveModal',
    components: {
    },
    mixins: [validationMixin],
    validations: {
      name: { required },
      tel: { required, minLength: minLength(10) },
      time: { required },
      number: { required },
      select: { required }
    },
    data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      modalWidth: MODAL_WIDTH,
      name: '',
      tel: '',
      time: '',
      number: '',
      select: null,
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
    props: ['isVdnh'],
    // data () {
    //   return {
    //   }
    // },
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
    mounted () {
      this.modalWidth = window.innerWidth < MODAL_WIDTH
        ? MODAL_WIDTH / 2
        : MODAL_WIDTH
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
              this.$v.$reset()
              this.$refs.success.open()
              setTimeout(() => {
                this.$refs.success.close()
                this.name = ''
                this.tel = ''
                this.dateFormatted = ''
                this.time = ''
                this.number = ''
                this.select = ''
                this.wish = ''
                this.$refs.openVdnhModal.close()
              }, 4000)
                .catch(error => {
                  if (!error.response.data.ok) {
                    this.$v.$reset()
                    this.$refs.error.open()
                    setTimeout(() => {
                      this.$refs.error.close()
                    }, 4000)
                  }
                })
              // console.log('---', response.data)
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
                this.$refs.openVdnhModal.close()
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
      },
      close () {
        this.$refs.addNot.close()
      },
      closeModal () {
        this.$v.$reset()
      }
    },
    watch: {
      select (val) {
        if (val === '4 - VIP ROOM') {
          this.$refs.addNot.open()
        }
        if (val === '8 - VIP ROOM') {
          this.$refs.addNot.open()
        }
      },
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      }
    }
  }
</script>
<style lang="scss">
    $background_color: #404142;
    $github_color: #DBA226;
    $facebook_color: #3880FF;
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
.modal-vdnh{
  .sweet-content{
    padding:0 !important;
  }
  .sweet-box-actions{
    z-index:1;
  }
  .box input[type=password], .box input[type=text]{
    margin-bottom:0;
  }
  @media only screen and (max-width: 800px){
    .box{
        flex-direction:column-reverse;
        .box-part {
            width: 100% !important;
        }
    }
  }
}
</style>
