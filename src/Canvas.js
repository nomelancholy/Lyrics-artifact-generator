export default function Canvase({
  $app,
  text,
  fontSize,
  fontColor,
  selectedGradient,
  rotateIndex,
}) {
  this.$canvas = document.createElement("canvas");
  this.$canvas.width = 540;
  this.$canvas.height = 540;

  this.state = {
    text,
    fontSize,
    fontColor,
    selectedGradient,
    rotateIndex,
  };

  // left to right, left top to right bottom, top to bottom, right top to left bottom, right to left, right bottom to left top, bottom to top, left bottom to right top
  const directions = [
    [0, 0, this.$canvas.width, 0],
    [0, 0, this.$canvas.width, this.$canvas.height],
    [0, 0, 0, this.$canvas.height],
    [this.$canvas.width, 0, 0, this.$canvas.height],
    [this.$canvas.width, 0, 0, 0],
    [this.$canvas.width, this.$canvas.height, 0, 0],
    [0, this.$canvas.height, 0, 0],
    [0, this.$canvas.height, this.$canvas.width, 0],
  ];

  $app.appendChild(this.$canvas);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    // rem 사용중이니 root font size load
    const $html = document.querySelector("html");
    let rootFontSize = document.defaultView
      .getComputedStyle($html)
      .getPropertyValue("font-size");

    rootFontSize = Number(rootFontSize.slice(0, -2));

    const ctx = this.$canvas.getContext("2d");
    // 기존 그림 지우고
    ctx.clearRect(0, 0, this.$canvas.width, this.$canvas.height);

    // 배경 입력
    if (this.state.selectedGradient) {
      const [x0, y0, x1, y1] = directions[this.state.rotateIndex];

      const gradients = this.state.selectedGradient.split(",");
      let grd = ctx.createLinearGradient(x0, y0, x1, y1);

      for (let [index, gradient] of gradients.entries()) {
        grd.addColorStop(index, gradient);
      }

      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, this.$canvas.width, this.$canvas.height);
    }

    // 글자 입력
    if (this.state.text) {
      const ctx = this.$canvas.getContext("2d");

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `${this.state.fontSize}em Noto Sans KR`;

      const lines = this.state.text.split("\n");

      const line_len = lines.length - 1;

      lines.forEach((line, index) => {
        ctx.fillStyle = this.state.fontColor;
        ctx.fillText(
          line,
          this.$canvas.width / 2,
          this.$canvas.height / 2 -
            this.state.fontSize * (rootFontSize / 1.6) * line_len +
            this.state.fontSize * (rootFontSize + 3) * index
        );
      });
    }
  };

  this.render();
}
