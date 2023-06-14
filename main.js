fetch('https://api.openweathermap.org/data/2.5/weather?lat=52.17&lon=104.17&appid=e4b700d7f9867c894ef3757dc254dc33')
.then(function(resp){return resp.json()})
.then(function(data){
    document.querySelector('.cityName').textContent = data.name
    document.querySelector('.temp').textContent = Math.round((data.main.temp -273) ) + '°C'
    document.querySelector('.weather').textContent = data.weather[0]['description']
    document.querySelector('.icon').innerHTML = `<img src ='https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png'>`
    document.querySelector('.windSpeed').textContent = data.wind.speed
    document.querySelector('.humidity').textContent = data.main.humidity
    document.querySelector('.country').textContent = data.sys.country
    document.querySelector('.sunrise').textContent = data.sys.sunrise
    document.querySelector('.sunset').textContent = data.sys.sunset
    console.log(data)});

    /*fetch('https://api.openweathermap.org/data/2.5/weather?lat=52.17&lon=104.17&appid=e4b700d7f9867c894ef3757dc254dc33')
.then(function(resp){return resp.json()})
.then(function(data){
    document.querySelector('.cityName').textContent = data.name
    document.querySelector('.temp').textContent = Math.round((data.main.temp -273) ) + '°C'
    console.log(data)});*/