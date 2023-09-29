const nav = document.querySelector("nav")
const menuBtn = document.querySelector(".menu-btn button")
const navLinks = document.querySelectorAll(".nav-link")

menuBtn.addEventListener("click", () => {
 nav.classList.toggle("expanded")
})

navLinks.forEach(item => {
 item.addEventListener("click", () => {
  document.querySelector(".active").classList.remove("active")
  item.classList.add("active")
 })
})