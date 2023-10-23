getWeather("vitry-sur-seine");
// requete http vers l'api pour récupérer la météo d'une ville
function getWeather(city){
    fetch(`https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ecfe5019a9471fb59d3e9f4fbaad4df`)
    .then(response=>{
        response.json()
        .then(data=>{
            document.getElementById("city").textContent = data.name;
            document.getElementById("icon").setAttribute("src","https://openweathermap.org/img/wn/"+data.weather[0].icon+".png");
            document.getElementById("min").textContent = "Température min: " +Math.round(data.main.temp_min
        -273.15)+ " °C";
            document.getElementById("real").textContent = "Température réelle: " +Math.round(data.main.temp  -273.15)+ " °C";
            document.getElementById("max").textContent ="Température max: " +Math.round(data.main.temp_max  -273.15)+ " °C";
        })
        .catch(error=>console.log(error));
    })
    .catch(error=>{
        console.log(error);
    })
}
const FORM =document.getElementById("formCity");
// on récupère la valeur du input
let city= document.getElementById("ville").value;

FORM.addEventListener("submit",(e) => {
    e.preventDefault();

    // on récupère la valeur du input
    let city = document.getElementById("ville").value;
    getWeather(city);
})