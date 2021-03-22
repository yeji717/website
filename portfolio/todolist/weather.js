const weather = document.querySelector(".js-weather");

const API_KEY = "f39e5def088fe8a33afcbf4f66570c7f";   
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response){
        return (response.json());  // 여기서 가져오는 JSON 은 아까 쓴 javascript Object 이다.
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude; 
    const longitude = position.coords.longitude;  // 성공했을때 position 출력
    const coordsObj = {
        latitude: latitude,               //객체의 변수의 이름과 객체의 key의 이름을 같게 저장할때에는 이렇게 생략가능. latitude, logitude
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Cant access geo location");   // 실패하면.. 이 메세지 출력
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError); // 첫번째 인자는 함수, 좌표를 가져오는데 성공했을때 처리하는 함수, 두번째 실패했을때의 함수.
}

function loadCoords(){
    const loadCoords = localStorage.getItem(COORDS);
    if(loadCoords === null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}


function init(){
    loadCoords();
}

init();