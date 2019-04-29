const express = require('express')
var bodyParser = require('body-parser')
const app = express()

app.get('/', (req, res, next) => {
  res.send('API root')
})

app.use(bodyParser.json())
app.post('/postvdnh', async (req, res, next) => {
  // console.log(req.body)
  const token = '746587611:AAGQWwF6gI-aolduxr72frF9VXSOc6EmXm8'
  const chatId = '-357496791'
  const axios = require('axios')
  let myData = encodeURIComponent("<b>Имя: </b>"+ req.body.name + "\n<b>Телефон: </b>"+ req.body.phone + "\n<b>Число: </b>"+ req.body.date + "\n<b>Время: </b>" + req.body.time + "\n<b>Гостей: </b>" + req.body.guest + "\n<b>Стол: </b>"+ req.body.table + "\n<b>Пожелания: </b>"+ req.body.wishes)

  const answer = await axios.post(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${myData}`
  )
  // res.json(bot.data)
  // console.log(res.body)
  res.send(answer.data)
})

app.post('/postkpi', async (req, res, next) => {
  // console.log(req.body)
  const token = '822465834:AAHyV2e8b20hQsLHtJjORUKNu8IzFlOV79c'
  const chatId = '-388370787'
  const axios = require('axios')
  let myData = encodeURIComponent("<b>Имя: </b>"+ req.body.name + "\n<b>Телефон: </b>"+ req.body.phone + "\n<b>Число: </b>"+ req.body.date + "\n<b>Время: </b>" + req.body.time + "\n<b>Гостей: </b>" + req.body.guest + "\n<b>Стол: </b>"+ req.body.table + "\n<b>Пожелания: </b>"+ req.body.wishes)

  const answer = await axios.post(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${myData}`
  )
  // res.json(bot.data)
  // console.log(res.body)
  res.send(answer.data)
})

// export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
