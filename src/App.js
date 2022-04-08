import Preview from "./Preview.js";
import Control from "./Control.js";

export default function App({ $app }) {
  this.$title = document.createElement("h1");
  this.$title.innerText = "Lyrics artifact generator";

  $app.appendChild(this.$title);

  this.state = {
    text: "",
    fontSize: 1,
    fontColor: "#ffffff",
    gradients: [],
    recentlyUsedGradients: [],
    selectedGradient: "",
    rotateIndex: 0,
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    preview.setState({
      ...preview.state,
      ...this.state,
    });
    control.setState({
      ...control.state,
      ...this.state,
    });
  };

  const preview = new Preview({
    $app,
    text: this.state.text,
    fontSize: this.state.fontSize,
    fontColor: this.state.fontColor,
    selectedGradient: this.state.selectedGradient,
    rotateIndex: this.state.rotateIndex,
  });

  const control = new Control({
    $app,
    gradients: this.state.gradients,
    recentlyUsedGradients: this.state.recentlyUsedGradients,
    onKeyUp: (e) => {
      this.setState({
        text: e.target.value,
      });
    },
    onSelectFontColor: (e) => {
      // To-Do : 최근 선택 글씨들
      this.setState({
        fontColor: e.target.value,
      });
    },
    onSelectFontSize: (e) => {
      this.setState({
        fontSize: e.target.value,
      });
    },

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
    onClickRotateBtn: () => {
      let newRotateIndex = this.state.rotateIndex + 1;

      if (newRotateIndex >= 8) {
        newRotateIndex = 0;
      }

      this.setState({
        rotateIndex: newRotateIndex,
      });
    },
  });

  const init = async () => {
    const response = await fetch("/gradients.json");

    if (response.ok) {
      const gradients = await response.json();

      // 기본 색상 랜덤 선택
      const basicGraidentIndex = Math.floor(
        Math.random() * (gradients.length + 1)
      );

      // 최근 선택 배경
      const recentlyUsedBgs = JSON.parse(localStorage.getItem("recentlyUsed"));

      this.setState({
        ...this.state,
        gradients: gradients,
        selectedGradient: gradients[basicGraidentIndex].colors.join(","),
        recentlyUsedGradients: recentlyUsedBgs,
      });
    }
  };

  init();
}
