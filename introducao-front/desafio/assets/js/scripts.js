const modalOverlay = document.querySelector("#modal-overlay");
const posts = document.querySelectorAll(".foodfy__main__popular");

console.log(posts);

posts.forEach((post) => {
  post.addEventListener("click", () => {
    const img = post.querySelector("img").src;
    const title = post.querySelector("h3").textContent;
    const subTitle = post.querySelector("h4").textContent;

    modalOverlay.querySelector("img").src = img;
    modalOverlay.querySelector("h2").innerText = title;
    modalOverlay.querySelector("h3").innerText = subTitle;

    modalOverlay.classList.add("active");
  });
});

document.querySelector("#close-btn").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
});
