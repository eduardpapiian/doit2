<template>
  <div>
  </div>
</template>


<script>
// window.location.href = 'http://kalyanschiki.com.ua/'
export default {
  head: {
    title: 'Кейтеринг - DOIT Сеть кальян-баров',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'У нас Вы можете заказать кальянщика со всем оборудованием на любое мероприятие: день рождения, свадьба, вечеринка или просто арендовать кальян. Не надо безпокоитсья ни о чем, команда кальянщиков DOIT сделает все чтоб Ваш отдых стал более приятным. Со всеми ценами Вы можете ознакомиться на нашем сайте.' },
      { name: 'og:title', content: 'Кейтеринг - DOIT Сеть кальян-баров' },
      { name: 'og:description', content: 'У нас Вы можете заказать кальянщика со всем оборудованием на любое мероприятие: день рождения, свадьба, вечеринка или просто арендовать кальян. Не надо безпокоитсья ни о чем, команда кальянщиков DOIT сделает все чтоб Ваш отдых стал более приятным. Со всеми ценами Вы можете ознакомиться на нашем сайте.' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://doit.kiev.ua/keitering' },
      { name: 'og:image', content: 'https://doit.kiev.ua' + require('~/assets/logo.jpg') }
    ]
  },
  middleware ({ store, redirect }) {
    // If the user is not authenticated
    return redirect('https://kalyanschiki.com.ua')
  },
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
  }
}
</script>


<style lang="less" scoped>

</style>
