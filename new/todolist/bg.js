const body = document.querySelector("body");

const IMG_NUM = 3;

function paintImage(imgNumber){
    const image = new Image();//paintImage 함수 안에 새로운 object 만들기
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function numRandom(){
    const number = Math.floor(Math.random() * IMG_NUM);
    return number;
}

function init(){
    const randomNumber = numRandom(); // 숫자를 생성하게 하는 함수
    paintImage(randomNumber);
}

init();