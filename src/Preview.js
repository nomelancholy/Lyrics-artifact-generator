import Canvas from "./Canvas.js";

export default function Preview({
  $app,
  text,
  fontSize,
  fontColor,
  selectedFontFamily,
  selectedGradient,
  rotateIndex,
}) {
  this.state = {
    text,
    fontSize,
    fontColor,
    selectedFontFamily,
    selectedGradient,
    rotateIndex,
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    canvas.setState({
      ...canvas.state,
      ...this.state,
    });
  };

  this.$perviewSection = document.createElement("div");
  this.$perviewSection.className = "preview_section";

  const canvas = new Canvas({
    $app: this.$perviewSection,
    text: this.state.text,
    fontSize: this.state.fontSize,
    fontColor: this.state.fontColor,
    selectedFontFamily: this.state.selectedFontFamily,
    selectedGradient: this.state.selectedGradient,
    rotateIndex: this.state.rotateIndex,
  });

  $app.appendChild(this.$perviewSection);
}
