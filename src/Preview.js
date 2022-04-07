import Canvas from "./Canvas.js";
import ColorPicker from "./ColorPicker.js";

export default function Preview({ $app, text, fontSize, fontColor }) {
  this.state = {
    text,
    fontSize,
    fontColor,
    gradients: [],
    recentlyUsedGradients: [],
    selectedGradient: "",
    rotateIndex: 0,
  };

  this.$perviewSection = document.createElement("div");
  this.$perviewSection.className = "preview_section";

  $app.appendChild(this.$perviewSection);

  const canvas = new Canvas({
    $app: this.$perviewSection,
    text: this.state.text,
    fontSize: this.state.fontSize,
    fontColor: this.state.fontColor,
    rotateIndex: this.state.rotateIndex,
  });

  const colorPicker = new ColorPicker({
    $app: this.$perviewSection,
    gradients: this.state.gradients,
    selectedGradient: this.state.selectedGradient,
    onSelectBgColor: (e) => {
      const $li = e.target.closest("li");

      if ($li) {
        const { colors } = $li.dataset;

        let recentlyUsed = [];

        if (localStorage.length > 0) {
          recentlyUsed = JSON.parse(localStorage.getItem("recentlyUsed"));
        }

        // 최근 10번이내 선택하지 않은 경우
        if (recentlyUsed.indexOf(colors) == -1) {
          recentlyUsed.push(colors);

          // 두 줄로 10개만 보여주자
          if (recentlyUsed.length > 10) {
            recentlyUsed.splice(0, recentlyUsed.length - 10);
          }

          localStorage.setItem("recentlyUsed", JSON.stringify(recentlyUsed));
        }
        this.setState({
          selectedGradient: colors,
          recentlyUsedGradients: recentlyUsed,
        });
      }
    },
    onRotate: (e) => {
      let newRotateIndex = this.state.rotateIndex + 1;

      if (newRotateIndex >= 8) {
        newRotateIndex = 0;
      }

      this.setState({
        rotateIndex: newRotateIndex,
      });
    },
  });

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    canvas.setState({
      ...canvas.state,
      ...this.state,
    });
    colorPicker.setState({
      ...colorPicker.state,
      ...this.state,
    });
  };

  const init = async () => {
    const response = await fetch("/gradients.json");

    if (response.ok) {
      const gradients = await response.json();

      // 기본 색상 랜덤 선택
      const basicGraidentIndex = Math.floor(
        Math.random() * (gradients.length + 1)
      );

      // 최근 선택
      const recentlyUsed = JSON.parse(localStorage.getItem("recentlyUsed"));

      this.setState({
        ...this.state,
        gradients: gradients,
        selectedGradient: gradients[basicGraidentIndex].colors.join(","),
        recentlyUsedGradients: recentlyUsed,
      });
    }
  };

  init();
}
