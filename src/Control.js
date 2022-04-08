import Geneate from "./Generate.js";
import TextControl from "./TextControl.js";
import BgControl from "./BgControl.js";

export default function Control({
  $app,
  gradients,
  recentlyUsedGradients,
  onKeyUp,
  onSelectFontColor,
  onSelectFontSize,
  onSelectBgColor,
  onClickRotateBtn,
}) {
  this.$controlSection = document.createElement("div");
  this.$controlSection.className = "controlSection";

  this.state = {
    gradients,
    recentlyUsedGradients,
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    bgControl.setState({
      ...bgControl.state,
      ...this.state,
    });
  };

  const bgControl = new BgControl({
    $app: this.$controlSection,
    gradients: this.state.gradients,
    recentlyUsedGradients: this.state.recentlyUsedGradients,
    onSelectBgColor,
    onClickRotateBtn,
  });

  new TextControl({
    $app: this.$controlSection,
    onKeyUp,
    onSelectFontColor,
    onSelectFontSize,
  });

  new Geneate({ $app: this.$controlSection });

  $app.appendChild(this.$controlSection);
}
