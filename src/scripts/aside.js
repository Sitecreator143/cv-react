import { isRussian } from "../main.js";
import { languageSwitch } from "../main.js";

import React from 'react';
import ReactDOM from 'react-dom';

const asideText = {
  name: [
    "ALEXANDER\nNIKOLAEV",
    "АЛЕКСАНДР\nНИКОЛАЕВ"
  ],
  prof: [
    "Front-end Web-developer",
    "Фронт-энд Веб-разработчик"
  ],
  asideInfo: [
    "Personal information",
    "Персональная информация"
  ],
  asideData: [["Age 27, Saint Petersburg, Russia",
  "Phone number:", "+7(967)570-66-23",
  "WhatsApp, Viber, Telegram",
  "Marital status:",
  "Single",
  "Email:",
  "Nikolaevsailing@mail.ru"],
  ["Возраст 27 лет, г. Санкт-Петербург, Россия",
  "Номер телефона:",
  "+7(967)570-66-23",
  "WhatsApp, Viber, Telegram",
  "Семейное положение:",
  "Не женат",
  "Email:",
  "Nikolaevsailing@mail.ru"]
  ]
}

export class Aside extends React.Component {
  constructor(props) {
    super(props);
  }
  findText(textLink) {
    const outputText = isRussian ? asideText[textLink][1] : asideText[textLink][0]
    return outputText;
  }
  render() {
    return(
      <aside class="aside">
        <div class="aside__top">
          <div class="aside__img"></div>
          <div class="language-switch language-switch--aside" onClick={() => {document.documentElement.dispatchEvent(languageSwitch)}}>
            <div class={isRussian ? "language-switch__en" : "language-switch__en language-switch--active"}>EN</div>
            <div class={isRussian ? "language-switch__ru language-switch--active" : "language-switch__ru"}>RU</div>
          </div>

          <div class="aside__name">{this.findText("name")}</div>
          <div class="aside__prof">{this.findText("prof")}</div>
        </div>
        <div class="aside__bottom">
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
