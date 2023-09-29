const nav = document.querySelector(".navbar")
const closeBtn = document.querySelector(".bx-menu")
const searchBtn = document.querySelector(".bx-search")

const toggleNav = () => {
 nav.classList.contains("open")
  ? closeBtn.classList.replace("bx-menu", "bx-menu-alt-right")
  : closeBtn.classList.replace("bx-menu-alt-right", "bx-menu")
}

closeBtn.addEventListener("click", () => {
 nav.classList.toggle("open")
 toggleNav()
})

searchBtn.addEventListener("click", () => {
 nav.classList.toggle("open")
 toggleNav()
})