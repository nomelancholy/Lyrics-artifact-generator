import Geneate from "./Generate.js";
import TextControl from "./TextControl.js";
import BgControl from "./BgControl.js";

export default function Control({
  $app,
  gradients,
  recentlyUsedGradients,
  fontColor,
  recentlyUsedFontColors,
  onKeyUp,
  onSelectFontColor,
  onSelectFontSize,
  onSelectFontFamily,
  onSelectBgColor,
  onClickRotateBtn,
}) {
  this.$controlSection = document.createElement("div");
  this.$controlSection.className = "control_section";

  this.state = {
    gradients,
    fontColor,
    recentlyUsedGradients,
    recentlyUsedFontColors,
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
    textControl.setState({
      ...textControl.state,
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

  const textControl = new TextControl({
    $app: this.$controlSection,
    fontColor: this.state.fontColor,
    recentlyUsedFontColors: this.state.recentlyUsedFontColors,
    onKeyUp,
    onSelectFontColor,
    onSelectFontSize,
    onSelectFontFamily,
  });

  new Geneate({ $app: this.$controlSection });

  $app.appendChild(this.$controlSection);
}
