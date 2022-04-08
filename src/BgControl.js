import ColorPicker from "./ColorPicker.js";

export default function BgControl({
  $app,
  gradients,
  recentlyUsedGradients,
  onSelectBgColor,
  onClickRotateBtn,
}) {
  this.$bgControl = document.createElement("div");
  this.$bgControl.className = "bg_control";

  this.$bgFieldset = document.createElement("fieldset");
  this.$bgFieldset.className = "bg_fieldset";

  this.state = {
    gradients,
    recentlyUsedGradients,
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    colorPicker.setState({
      ...colorPicker.state,
      ...this.state,
    });
  };

  const colorPicker = new ColorPicker({
    $app: this.$bgFieldset,
    gradients,
    recentlyUsedGradients,
    onSelectBgColor,
    onClickRotateBtn,
  });

  this.$bgControl.appendChild(this.$bgFieldset);
  $app.appendChild(this.$bgControl);
}
