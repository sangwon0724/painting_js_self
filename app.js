const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d"); //canvas의 그림 그리기 기능을 가져옴

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;
let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  //마우스의 위치값 설정
  //상위 요소에 relative가 없으면 컨텐츠의 절대값으로 설정
  const x = event.offsetX;
  const y = event.offsetY;

  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
  stopPainting();
}

if (canvas) {
  //canvas가 존재하는 경우
  //if(변수===null){}같이 쓰지말고 이렇게 쓰자
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
