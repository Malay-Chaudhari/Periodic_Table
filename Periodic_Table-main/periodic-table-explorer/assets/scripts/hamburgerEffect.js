const list = document.querySelector(".list");
const hamburgerMenu = document.querySelector(".hamburgerMenu");

hamburgerMenu.addEventListener("click", () => {
    list.classList.toggle("active");
});