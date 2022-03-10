// 캔버스
const canvas = document.querySelector("#canvas");
// 폰트 관련
const fontColor = document.querySelector("#fontColor");
const fontSize = document.querySelector("#fontSize");
const textArea = document.querySelector("textarea");
// 배경 관련
const mainBgColor = document.querySelector("#mainBgColor");
const mainBgHex = document.querySelector("#mainBgHex");
const subBgColor = document.querySelector("#subBgColor");
const subBgHex = document.querySelector("#subBgHex");
// 다운로드
const downloadButton = document.querySelector(".downloadButton");

function download() {}

function bgColorChange() {}

function inputText(e) {
  e.preventDefault();
  const ctx = canvas.getContext("2d");

  ctx.clearRect(540, 540, 540, 540);
  console.log(ctx);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `${fontSize.value}px Noto Sans KR`;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let text = e.target.value;

  let lines = text.split("\n");

  console.log(lines);

  lines.forEach((line, index) => {
    ctx.fillStyle = fontColor.value;
    ctx.fillText(
      line,
      canvas.width / 2,
      canvas.height / 2 + fontSize.value * index
    );

    // ctx.strokeText(
    //   line,
    //   canvas.width / 2,
    //   (canvas.height / 2 - fontSize.value) * index
    // );
  });

  // ctx.strokeText(e.target.value, canvas.width / 2, canvas.height / 2);
}

function fontColorChange(e) {
  g;
  textArea.style.color = e.target.value;
}

function fontSizeChange() {}

function draw() {
  if (canvas.getContext) {
    // const ctx = canvas.getContext("2d");
    // 그라데이션 생성
    // let grd = ctx.creatLinearGradient(0, 0, 200, 0);
    // ctx.fillStyle = "rgb(200,0,0)";
    // ctx.fillRect(10, 10, 50, 50);
    // ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    // ctx.fillRect(30, 30, 50, 50);
  }
}

function init() {
  textArea.addEventListener("keyup", inputText);
  fontColor.addEventListener("input", fontColorChange);
  // draw();
}

init();
