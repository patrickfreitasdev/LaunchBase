const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {

    const videoID = card.getAttribute("id");

    window.location.href = `video?id=${videoID}`
  });
});
