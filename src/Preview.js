import Canvas from "./Canvas.js";
import ColorPicker from "./ColorPicker.js";

export default function Preview({ $app, text, fontSize, fontColor }) {
  this.state = {
    text,
    fontSize,
    fontColor,
    gradients: [],
    selectedGradient: "",
  };

  this.$perviewSection = document.createElement("div");
  this.$perviewSection.className = "preview_section";

  $app.appendChild(this.$perviewSection);

  const canvas = new Canvas({
    $app: this.$perviewSection,
    text: this.state.text,
    fontSize: this.state.fontSize,
    fontColor: this.state.fontColor,
  });

  this.setState = (nextState) => {
    this.state = nextState;
    canvas.setState({
      ...canvas.state,
      ...nextState,
    });
  };

  const init = async () => {
    const response = await fetch("/gradients.json");

    if (response.ok) {
      const gradients = await response.json();

      const basicGraidentIndex = Math.floor(
        Math.random() * (gradients.length + 1)
      );

      this.setState({
        ...this.state,
        gradients: gradients,
        selectedGradient: gradients[basicGraidentIndex].colors.join(","),
      });

      new ColorPicker({
        $app: this.$perviewSection,
        gradients: this.state.gradients,
        selectedGradient: this.state.selectedGradient,
        onSelectBgColor: (e) => {
          const $li = e.target.closest("li");

          if ($li) {
            const { colorName, colors } = $li.dataset;

            this.setState({
              selectedGradient: colors,
            });
          }
        },
      });
    }
  };

  init();
}
