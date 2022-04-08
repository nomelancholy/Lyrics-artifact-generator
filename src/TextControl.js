import TextInput from "./TextInput.js";

export default function TextControl({
  $app,
  fontColor,
  recentlyUsedFontColors,
  onKeyUp,
  onSelectFontColor,
  onSelectFontSize,
}) {
  this.state = {
    fontColor,
    recentlyUsedFontColors,
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };

    textInput.setState({
      ...textInput,
      ...this.state,
    });
  };

  this.$textControl = document.createElement("div");
  this.$textControl.className = "text_control";

  this.$textFieldset = document.createElement("fieldset");
  this.$textFieldset.className = "text_fieldset";

  this.$textControl.appendChild(this.$textFieldset);

  const textInput = new TextInput({
    $app: this.$textFieldset,
    fontColor,
    recentlyUsedFontColors,
    onKeyUp,
    onSelectFontColor,
    onSelectFontSize,
  });

  $app.appendChild(this.$textControl);
}
