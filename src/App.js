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
  };

  this.setState = (nextState) => {
    this.state = nextState;
    preview.setState({
      ...preview.state,
      ...this.state,
    });
  };

  const preview = new Preview({
    $app,
    text: this.state.text,
    fontSize: this.state.fontSize,
    fontColor: this.state.fontColor,
  });

  new Control({
    $app,
    onKeyUp: (e) => {
      this.setState({
        text: e.target.value,
      });
    },
    onSelectColor: (e) => {
      this.setState({
        fontColor: e.target.value,
      });
    },
    onSelectFontSize: (e) => {
      this.setState({
        fontSize: e.target.value,
      });
    },
  });
}
