// const modalOverlay = document.querySelector(".moda-overlay");
// const cards = document.querySelectorAll(".card");

// cards.forEach((card) => {
//   card.addEventListener("click", () => {
//     modalOverlay.classList.add("active");

//     const videoID = card.getAttribute("id");

//     modalOverlay.querySelector(
//       "iframe"
//     ).src = `https://www.youtube.com/embed/${videoID}`;
//   });
// });

// document.querySelector(".close-modal").addEventListener("click", () => {
//   modalOverlay.classList.remove("active");
//   modalOverlay.querySelector("iframe").src = "";
// });

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const videoID = card.getAttribute("id");
    window.location.href = `/video?id=${videoID}`;
  });
});
