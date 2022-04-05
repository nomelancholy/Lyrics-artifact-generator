export default function Canvase({ $app, text, fontSize, fontColor }) {
  this.$canvas = document.createElement("canvas");
  this.$canvas.style.width = 540;
  this.$canvas.style.height = 540;

  this.state = { text, fontSize, fontColor };

  $app.appendChild(this.$canvas);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const ctx = this.$canvas.getContext("2d");
    ctx.clearRect(540, 540, 540, 540);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `${this.state.fontSize}px Noto Sans KR`;

    const lines = this.state.text.split("\n");

    lines.forEach((line, index) => {
      ctx.fillStyle = this.state.fontColor;
      ctx.fillText(
        line,
        this.$canvas.width / 2,
        this.$canvas.height / 2 + this.state.fontSize * index
      );
    });

    console.log("ctx :>> ", ctx);
    console.log("canvas render");
  };

  this.render();
}
