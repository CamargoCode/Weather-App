

const key = "3fdd096fe831d4a430802955945338b5"

function inputDataOnScreen (data) {
 document.querySelector(".city").innerHTML = "Weather in " + data.name
 document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
 document.querySelector(".weather-text").innerHTML = data.weather[0].description
 document.querySelector(".umity").innerHTML = "Humidity : " + data.main.humidity + "%"
 document.querySelector(".weather-img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function findCity (city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`).then(response => response.json())
    
    inputDataOnScreen (data)
}


function clickButton () {
    const city = document.querySelector(".input-city").value
    
    findCity(city)

}
const inputField = document.querySelector(".input-city");

inputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    clickButton();
  }
});


    