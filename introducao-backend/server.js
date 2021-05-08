const express = require('express')
const nunjucks = require('nunjucks')
const videos = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')


nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/portfolio', function (req, res) {
  return res.render('portfolio', { items: videos })
})

server.get('/', function (req, res) {

  const perfil = {
    avatar_url: "https://avatars1.githubusercontent.com/u/38871336?s=460&v=4",
    nome: "Patrick de Freitas",
    role: "Suporte WordPress",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non ullam nemo dolore officia commodi nisi ratione deleniti, tempora molestiae enim magni? Amet accusamus saepe eveniet quis corrupti laboriosam tempora.",
    links: [
      { name: "Github", url: "#" },
      { name: "Instagram", url: "#" },
      { name: "Facebook", url: "#" },
    ]
  }

  return res.render('about', { perfil })
})

server.get('/video', function (req, res) {

  const id = req.query.id;

  const video = videos.find(function (video) {

    return video.id == id

  })

  if (!video) {
    res.send("Video Nao Encontrado")
  } else {
    res.render('video', { item: video })
  }

});


server.listen(5000, function () {
  console.log('Server is running')
})