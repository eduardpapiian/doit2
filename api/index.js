const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log('connected to DB!')
);

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.send('API root')
})

app.post('/postvdnh', async (req, res, next) => {
  const token = process.env.VDNH_TOKEN
  const chatId = process.env.VDNH_CHAT_ID
  console.log(token, chatId)
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
  const token = process.env.KPI_TOKEN
  const chatId = process.env.KPI_CHAT_ID
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
