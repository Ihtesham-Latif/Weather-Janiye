let input = document.getElementById("city-name")
let buttonClick = document.querySelector(".search")
let country = document.getElementById("api-city")
let time = document.getElementById("api-time")
let temprature = document.getElementById("api-temprature")


async function getData(cityname){ 
   let promise =  await fetch(`http://api.weatherapi.com/v1/current.json?key=aa88add7f3c240c2ba2201044242605&q=${cityname}&aqi=yes`)

   return await promise.json()
        }
        


buttonClick.addEventListener("click",async ()=>{
    let inputValue = input.value
     let result = await getData(inputValue)
     console.log(result);
     country.innerText = `${result.location.name},${result.location.region},${result.location.country}`
     time.innerText = `${result.location.tz_id},${result.location.localtime}`
     temprature.innerText = `Temprature in Celcius:${result.current.temp_c},Temprature in Farenheit:${result.current.temp_f}`


})