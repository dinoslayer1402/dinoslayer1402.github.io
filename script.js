document.addEventListener("DOMContentLoaded", () => {

const openMap = document.getElementById("openMap")
const intro = document.getElementById("intro")
const mapSection = document.getElementById("mapSection")

openMap.addEventListener("click", () => {

intro.classList.add("hidden")
mapSection.classList.remove("hidden")

})


const citiesLayer = document.getElementById("citiesLayer")

cities.forEach(city => {

const el = document.createElement("div")

el.classList.add("city")

el.style.left = city.x + "%"
el.style.top = city.y + "%"

el.addEventListener("click", () => {

openPopup(city)

})

citiesLayer.appendChild(el)

})


const popup = document.getElementById("popup")
const popupName = document.getElementById("popupName")
const popupDesc = document.getElementById("popupDesc")
const closePopup = document.getElementById("closePopup")

function openPopup(city){

popupName.innerText = city.name
popupDesc.innerText = city.description

popup.classList.remove("hidden")

}

closePopup.addEventListener("click", () => {

popup.classList.add("hidden")

})

})