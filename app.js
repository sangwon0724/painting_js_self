const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d"); //canvas의 그림 그리기 기능을 가져옴
const colors = document.getElementsByClassName("jsColor");

//canvas의 그리기 기능 이용시 크기 설정 필요
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c"; //선의 기본 색상
ctx.lineWidth = 2.5; //선의 굵기
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
    //painting이 false인 상태 또는 값이 없는 상태 = 클릭 안 한 상태
    ctx.beginPath(); //path 생성
    ctx.moveTo(x, y); //내가 클릭한 위치
  } else {
    //painting이 true인 상태 또는 값이 있는 상태 = 클린 한 상태
    ctx.lineTo(x, y); //선을 긋는다.
    ctx.stroke(); //선을 현재의 stokeStyle로 채운다.
  }
}

function handleColorClick(event) {
  //console.log(event.target.style);
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
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
  canvas.addEventListener("mousedown", startPainting); //마우스 왼쪽 버튼을 누르고 있는 상태
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

//console.log(Array.from(color));
//Array.from은 Object에서 Array를 만든다.
//forEach를 통해 Array 안에 있는 모든 요소들에게 이벤트를 추가한다.
//Lambda를 이용해서 코드를 간결하게 만든다.
//단 this가 필요한 경우에는 Lambda를 이용하지 않는 것이 좋다.
Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);
