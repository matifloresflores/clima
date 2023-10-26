let lon;
let lat;
let temperature = document.querySelector(".temp")
let loc = document.querySelector(".location")
let summary = document.querySelector(".summary")  
let min = document.querySelector(".min")  
let max = document.querySelector(".max")
let fecha = document.querySelector(".fecha")    
let Moquegua =document.querySelector(".Moquegua")
let Arequipa = document.querySelector(".arequipa")
let Tacna =document.querySelector(".Tacna")
let Piura =document.querySelector(".Piura")
let Lima =document.querySelector(".Lima")
let kelvin = 273.15;
let city = document.getElementById('city')
let boton = document.getElementById('btn')
let fechaActual = new Date();


window.addEventListener("load",()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>
        {
            console.log(position)
            lon= position.coords.longitude;
            lat= position.coords.latitude;
            
            const api = "27287355ca07526d40d6778cbc3865e5"
            
            const url_base =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;
            const M =`https://api.openweathermap.org/data/2.5/weather?lat=-17.1983200&lon=-70.9356700&appid=${api}`
            const A =`https://api.openweathermap.org/data/2.5/weather?lat=-16.3988900&lon=-71.5350000&appid=${api}`
            const T =`https://api.openweathermap.org/data/2.5/weather?lat=-18.0146500&lon=-70.2536200&appid=${api}`
            const P =`https://api.openweathermap.org/data/2.5/weather?lat=-5.1944900&lon=-80.6328200&appid=${api}`
            const L =`https://api.openweathermap.org/data/2.5/weather?lat=-12.0431800&lon=-77.0282400&appid=${api}`
            fetch(url_base)
            .then((Response)=>{

                return Response.json();
            })
            .then((data)=> {
                console.log(data);

                temperature.textContent =Math.floor(data.main.temp-kelvin)+"°C";
                summary.textContent = data.weather[0].description; 
                loc.textContent = data.name + "," + data.sys.country +"-";
                min.textContent = Math.floor(data.main.temp_min-kelvin)+"/";
                max.textContent = Math.floor(data.main.temp_max-kelvin)+"°C";
                fecha.textContent = fechaActual.getDate()+"/"+(fechaActual.getMonth()+1)+"/"+fechaActual.getFullYear();
                hora.textContent = fechaActual.getHours()+":"+fechaActual.getMinutes()+"-";

            })
            
            fetch(M)
            .then((Response)=>{
                return Response.json();
            })
            .then((data)=> {
                console.log(data);
                Moquegua.textContent = data.name + ","+data.weather[0].description + "-" +Math.floor(data.main.temp-kelvin)+"°C"+"-humedad-"+ Math.floor(data.main.humidity)+"%";
            })
            fetch(A)
            .then((Response)=>{
                return Response.json();
            })
            .then((data)=> {
                console.log(data);
                Arequipa.textContent = data.name + ","+data.weather[0].description + "-" +Math.floor(data.main.temp-kelvin)+"°C"+"-humedad-"+ Math.floor(data.main.humidity)+"%";
            })
            fetch(T)
            .then((Response)=>{
                return Response.json();
            })
            .then((data)=> {
                console.log(data);
                Tacna.textContent = data.name + ","+data.weather[0].description + "-" +Math.floor(data.main.temp-kelvin)+"°C"+"-humedad-"+ Math.floor(data.main.humidity)+"%";
            })
            fetch(P)
            .then((Response)=>{
                return Response.json();
            })
            .then((data)=> {
                console.log(data);
                Piura.textContent = data.name + ","+data.weather[0].description + "-" +Math.floor(data.main.temp-kelvin)+"°C"+"-humedad-"+ Math.floor(data.main.humidity)+"%";
            })
            fetch(L)
            .then((Response)=>{
                return Response.json();
            })
            .then((data)=> {
                console.log(data);
                Lima.textContent = data.name + ","+data.weather[0].description + "-" +Math.floor(data.main.temp-kelvin)+"°C"+"-humedad-"+ Math.floor(data.main.humidity)+"%";
            })
        let get_weather= ()=>{
            let city_name = city.value;
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api}`
            fetch(url).then((resp)=> resp.json()).then(data =>{
                console.log(data);
                console.log(Math.floor(data.main.temp-kelvin)+"°C");
                console.log(data.weather[0].description);
                temperature.textContent =Math.floor(data.main.temp-kelvin)+"°C";
                summary.textContent = data.weather[0].description; 
                loc.textContent = data.name + "," + data.sys.country +"-";
                min.textContent = Math.floor(data.main.temp_min-kelvin)+"/";
                max.textContent = Math.floor(data.main.temp_max-kelvin)+"°C";
                fecha.textContent = fechaActual.getDate()+"/"+(fechaActual.getMonth()+1)+"/"+fechaActual.getFullYear();
            })
        }
        boton.addEventListener('click',get_weather);
        })
        
    }
    
})