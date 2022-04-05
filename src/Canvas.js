export default function Canvase({ $app, text }) {
  const $canvas = document.createElement("canvas");
  $canvas.style.width = 540;
  $canvas.style.height = 540;

  this.state = text;

  console.log($app);

  $app.appendChild($canvas);

  this.setState = (nextState) => {
    this.state = nextState;
  };

  this.render = () => {
    console.log("canvas render");
  };

  this.render();
}
