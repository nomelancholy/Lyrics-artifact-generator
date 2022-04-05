import Canvas from "./Canvas.js";
import ColorPicker from "./ColorPicker.js";

export default function Preview({ $app, text = "" }) {
  this.state = {
    text,
    gradients: [],
    selectedGradient: [],
    recentlyUsedGradients: [],
  };

  this.$perviewSection = document.createElement("div");
  this.$perviewSection.className = "preview_section";

  $app.appendChild(this.$perviewSection);

  let canvas = new Canvas({
    $app: this.$perviewSection,
    text: "",
  });

  this.setState = (nextState) => {
    this.state = nextState;
    canvas.setState;
  };

  const init = async () => {
    const response = await fetch("/gradients.json");

    if (response.ok) {
      const gradients = await response.json();
      this.setState({
        ...this.state,
        gradients: gradients,
      });

      new ColorPicker({
        $app: this.$perviewSection,

        initialstate: {
          gradients: this.state.gradients,
          recentlyUsedGradients: this.state.recentlyUsedGradients,
          selectedGradient: this.state.selectedGradient,
        },
      });
    }
  };

  init();
}
