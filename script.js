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

showPopup(city)

})

citiesLayer.appendChild(el)

})


const popup = document.getElementById("cityPopup")
const cityName = document.getElementById("cityName")
const cityDesc = document.getElementById("cityDesc")


function showPopup(city){

cityName.innerText = city.name
cityDesc.innerText = city.description

popup.classList.remove("hidden")

}

function closePopup(){

popup.classList.add("hidden")

}
