const posts = document.querySelectorAll(".foodfy__main__popular");

console.log(posts);

for (let index = 0; index < posts.length; index++) {
  posts[index].addEventListener("click", function () {
    window.location.href = `/receita/${index}`;
  });
}
