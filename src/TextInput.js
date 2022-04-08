export default function TextInput({
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

    this.render();
  };

  // legend
  this.$fontLegend = document.createElement("legend");
  this.$fontLegend.innerText = "font control";

  // text Color
  this.$fontControlWrap = document.createElement("div");
  this.$fontControlWrap.className = "font_control_wrap";

  this.$fontColorLabel = document.createElement("label");
  this.$fontColorLabel.innerText = "글자 색";
  this.$fontColorLabel.htmlFor = "fontColor";
  this.$fontColorLabel.className = "font_control_item";

  this.$fontColor = document.createElement("input");
  this.$fontColor.type = "color";
  this.$fontColor.id = "fontColor";
  this.$fontColor.value = "#ffffff";
  this.$fontColor.className = "font_control_item";

  this.$fontColor.addEventListener("change", onSelectFontColor);

  // fontSize
  this.$fontSizeLabel = document.createElement("label");
  this.$fontSizeLabel.innerText = "글자 크기";
  this.$fontSizeLabel.htmlFor = "fontSizeSelect";
  this.$fontSizeLabel.className = "font_control_item";

  this.$fontSizeSelect = document.createElement("select");
  this.$fontSizeSelect.id = "fontSizeSelect";
  this.$fontSizeSelect.name = "fontSizeSelect";
  this.$fontSizeSelect.className = "font_control_item";

  // recentlyUsedFontColors
  this.$recentlyUsedFontColors = document.createElement("div");
  this.$recentlyUsedFontColors.className = "recently_used_font_colors";

  for (let i = 1; i <= 10; i++) {
    const $fontSizeOption = document.createElement("option");
    $fontSizeOption.text = `${i} rem`;
    $fontSizeOption.value = i;

    this.$fontSizeSelect.options.add($fontSizeOption);
  }

  this.$fontSizeSelect.addEventListener("change", onSelectFontSize);

  // textArea
  this.$textArea = document.createElement("textarea");
  this.$textArea.addEventListener("keyup", onKeyUp);

  this.render = () => {
    this.$fontColor.value = this.state.fontColor;

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

  $app.appendChild(this.$fontLegend);

  $app.appendChild(this.$textArea);

  this.$fontControlWrap.appendChild(this.$fontColorLabel);
  this.$fontControlWrap.appendChild(this.$fontColor);

  this.$fontControlWrap.appendChild(this.$fontSizeLabel);
  this.$fontControlWrap.appendChild(this.$fontSizeSelect);

  $app.appendChild(this.$fontControlWrap);

  $app.appendChild(this.$recentlyUsedFontColors);
}
