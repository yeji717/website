const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jscolor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");
const clear = document.getElementById("jsClear");

const INITIAL_COLOR = "#2c2c2c"
const CANVAS_W_SIZE = 400;
const CANVAS_H_SIZE = 300;

canvas.width = CANVAS_W_SIZE;
canvas.height = CANVAS_H_SIZE;

ctx.fillStyle="white";
ctx.fillRect(0, 0, CANVAS_W_SIZE, CANVAS_H_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

// ctx.fillRect(50, 100, 100, 49);

let painting = false;

let filling = false;

function startPainting(){
    painting = true;
}

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        // console.log("move path in", x, y);
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        // console.log("move line in", x, y);
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function onMouseDown(event){
    painting = true;
}

function onMouseUp(event){
    stopPainting();
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick(){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill";
    }else{
        filling = true;
        mode.innerText = "PAINT";
    }
}

function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0, 0, CANVAS_W_SIZE, CANVAS_H_SIZE);
    }
}

function handleSaveClick(){
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "paintJS";
    link.click();
    // console.log(image);
}

function handleClear(){
    ctx.clearRect(0, 0, CANVAS_W_SIZE, CANVAS_H_SIZE);
}


if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
}



Array.from(colors).forEach(color => color.addEventListener("click",handleColorClick));



if(range){
    range.addEventListener("input", handleRangeChange);
}

if(mode){
    mode.addEventListener("click", handleModeClick);   
}

if(saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}

if(clear) {
    clear.addEventListener("click", handleClear);
}