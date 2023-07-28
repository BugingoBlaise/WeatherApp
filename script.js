
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")

const apiKey = "69794f28e213f587a347fcbd160f1226";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  const reponse = await fetch(apiUrl + city+`&appid=${apiKey}`);
  
  if(reponse.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
}else{
    var data = await reponse.json();
    console.log(data);
  
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"KM/H";
  
    if(data.weather[0].main=="Clouds"){
      weatherIcon.src="images/clouds.png";
    }else if(data.weather[0].main=="Rain"){
      weatherIcon.src="images/rain.png";
    }else if(data.weather[0].main=="Drizzle"){
      weatherIcon.src="images/drizzle.png";
    }else if(data.weather[0].main=="Mist"){
      weatherIcon.src="images/mist.png";
    }
  
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
  }
}
  
 

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
}) 

