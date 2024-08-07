// 1 уровень сложности: В рамках БД audiohosting_150124 напишите след/запросы:


// Вывести данные об одном треке (на ваш выбор)
db.tracks.findOne(
    {},
{
"title": 1,
"artist": 1,
"album": 1,
})



//    Вывести данные юзеров не из USA (в проекции - без страны)
   db.users.find(
    { "country": { "$ne": "USA" } },
    { "country": 0 }
  )



//   Вывести данные о треках продолжительностью 30 мин и более (в проекции - без первичного ключа)
  db.tracks.find(
    { "duration": { "$gte": 1800 } },
    { "_id": 0 }
  )

//   Вывести страны и имена всех клиентов (решение данной задачи оформить в виде PR)
  db.users.find(
    {},
    { "country": 1, "name": 1, "_id": 0 }
  )