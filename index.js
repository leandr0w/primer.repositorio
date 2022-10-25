const navBtn = document.querySelector(".nav-btn")
const navMenu = document.querySelector(".-nav")

navBtn.addEventListener("click", () => {
    navMenu.classList.toggle("nav-visible")
})