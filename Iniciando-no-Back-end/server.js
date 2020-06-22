const express = require("express");
const nunjucks = require("nunjucks");

const videos = require("./data");

const server = express();

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get("/", function (req, res) {
  const data = {
    avatarUrl: "https://avatars1.githubusercontent.com/u/38871336?s=460&v=4",
    name: "Patrick Freitas",
    role: "Support WordPress",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non ullam nemo dolore officia commodi nisi ratione deleniti, tempora molestiae enim magni? Amet accusamus saepe eveniet quis corrupti laboriosam tempora.",
    links: [
      { name: "Github", url: "" },
      { name: "Twitter", url: "" },
      { name: "linkedin", url: "" },
    ],
  };
  return res.render("about", { data });
});

server.get("/aulas", function (req, res) {
  return res.render("classes", { items: videos });
});

server.get("/video", function (req, res) {
  const id = req.query.id;

  const video = videos.find(function (video) {
    return video.id == id;
  });

  if (!video) {
    return res.send("video nao encontrado");
  }

  return res.render("video", { item: video });
});

server.listen(5000, function () {});
