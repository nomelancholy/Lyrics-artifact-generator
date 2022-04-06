export default function Canvase({ $app, text, fontSize, fontColor }) {
  this.$canvas = document.createElement("canvas");
  this.$canvas.width = 540;
  this.$canvas.height = 540;

  this.state = { text, fontSize, fontColor };

  $app.appendChild(this.$canvas);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    // rem 사용중이니 root font size load
    const $html = document.querySelector("html");
    let fontSize = document.defaultView
      .getComputedStyle($html)
      .getPropertyValue("font-size");

    fontSize = Number(fontSize.slice(0, -2));

    const ctx = this.$canvas.getContext("2d");
    // 기존 그림 지우고
    ctx.clearRect(0, 0, this.$canvas.width, this.$canvas.height);

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
          this.state.fontSize * (fontSize / 1.6) * line_len +
          this.state.fontSize * (fontSize + 3) * index
      );
    });
  };

  this.render();
}
