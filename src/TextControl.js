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
    this.render();
  };

  this.$textControl = document.createElement("div");
  this.$textControl.className = "textControl";

  this.$textFieldset = document.createElement("fieldset");
  this.$textFieldset.className = "textFieldset";

  this.$textControl.appendChild(this.$textFieldset);

  const textInput = new TextInput({
    $app: this.$textFieldset,
    fontColor,
    onKeyUp,
    onSelectFontColor,
    onSelectFontSize,
  });

  this.$recentlyUsedFontColors = document.createElement("div");
  this.$recentlyUsedFontColors.className = "recently_used_font_colors";

  this.render = () => {
    if (
      this.state.recentlyUsedFontColors &&
      this.state.recentlyUsedFontColors.length > 0
    ) {
      // 내부 엘리먼트 초기화
      this.$recentlyUsedFontColors.innerHTML = "";

      const $ul = document.createElement("ul");

      $ul.addEventListener("click", onSelectFontColor);

      $ul.innerHTML = `
        ${this.state.recentlyUsedFontColors
          .map(
            (fontColor) =>
              `<li data-color="${fontColor}"
                   style="background : ${fontColor}"></li>`
          )
          .join("")}
      `;

      this.$recentlyUsedFontColors.appendChild($ul);
    } else {
      this.$recentlyUsedFontColors.innerHTML =
        "<p>최근 선택한 글자색이 없습니다</p>";
    }
  };

  $app.appendChild(this.$textControl);
  $app.appendChild(this.$recentlyUsedFontColors);

  this.render();
}
