import { text } from "./text.js";
import { isRussian } from "../main.js";
import { languageSwitch } from "../main.js";

import React from 'react';
import ReactDOM from 'react-dom';

export class Aside extends React.Component {
  constructor(props) {
    super(props);
  }
  findText(textLink) {
    const outputText = text.find(el => el.isRussian === isRussian)[textLink];
    return outputText;
  }
  render() {
    return(
      <aside>
        <div class="aside__header">
          <div class="aside__image-wrap">
            <div class="aside__image">
              <div class="aside__language" onClick={() => {document.documentElement.dispatchEvent(languageSwitch)}}>
                <div class={isRussian ? "aside__languageEn" : "aside__languageEn aside__language_active"}>EN</div>
                <div class={isRussian ? "aside__languageRu aside__language_active" : "aside__languageRu"}>RU</div>
              </div>
            </div>
          </div>

          <div class="aside__name">{this.findText("name")}</div>
          <div class="aside__prof">{this.findText("prof")}</div>
        </div>
        <div class="aside__footer">
          <div class="aside__info">{this.findText("asideInfo")}</div>
          <div>{this.findText("asideData")[0]}</div><br></br>
          <div>{this.findText("asideData")[1]}</div>
          <div>{this.findText("asideData")[2]}</div>
          <div>{this.findText("asideData")[3]}</div><br></br>
          <div>{this.findText("asideData")[4]}</div>
          <div>{this.findText("asideData")[5]}</div><br></br>
          <div>{this.findText("asideData")[6]}</div>
          <div>{this.findText("asideData")[7]}</div><br></br>

          <div><a target="_blank" class="aside__link" href="https://www.facebook.com/Nikolaevsailing/">facebook.com/Nikolaevsailing</a></div>
          <div><a target="_blank" class="aside__link" href="https://vk.com/Nikolaevsailing">vk.com/Nikolaevsailing</a></div>
          <div>
            <a target="_blank" class="aside__link aside__gitlink" href="https://github.com/Sitecreator143">github.com/Sitecreator143</a>
          </div>
        </div>
      </aside>
    )
  }
}
