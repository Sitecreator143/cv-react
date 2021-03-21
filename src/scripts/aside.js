import { text } from "./text.js";
import { isRussian } from "../main.js"

import React from 'react';
import ReactDOM from 'react-dom';

class TextBlock extends React.Component {
  findText(textLink) {
    const outputText = text.find(el => el.isRussian === isRussian)[textLink];
    return outputText;
  }
  render() {
    return <div class={this.props.class}>{this.findText(this.props.text)}</div>
  }
}

class LinkBlock extends React.Component {
  render() {
    return(
      <div><a target="_blank" class="aside__link" href={this.props.link}>{this.props.text}</a></div>
    )
  }
}


export class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languageEnClass: "aside__languageEn",
      languageRuClass: "aside__languageRu aside__language_active",
      isCurrentLanguageRussian: isRussian
    }
    this.changeLanguage = this.changeLanguage.bind(this)
  }
  findText(textLink) {
    const outputText = text.find(el => el.isRussian === isRussian)[textLink];
    return outputText;
  }
  changeLanguage() {
    if (isRussian) {
      this.setState({
        languageEnClass: "aside__languageEn aside__language_active",
        languageRuClass: "aside__languageRu",
      })
    } else {
      this.setState({
        languageEnClass: "aside__languageEn",
        languageRuClass: "aside__languageRu aside__language_active",
      })
    }
    isRussian = !isRussian
  }
  render() {
    return(
      <aside>
        <div class="aside__header">
          <div class="aside__image-wrap">
            <div class="aside__image">
              <div class="aside__language" onClick={this.changeLanguage}>
                <div class={this.state.languageEnClass}>EN</div>
                <div class={this.state.languageRuClass}>RU</div>
              </div>
            </div>
          </div>
          <TextBlock class="aside__name" text="name"/>
          <TextBlock class="aside__prof" text="prof"/>
        </div>
        <div class="aside__footer">
          <TextBlock class="aside__info" text="asideInfo"/>
          <div>{this.findText("asideData")[0]}</div><br></br>
          <div>{this.findText("asideData")[1]}</div>
          <div>{this.findText("asideData")[2]}</div>
          <div>{this.findText("asideData")[3]}</div><br></br>
          <div>{this.findText("asideData")[4]}</div>
          <div>{this.findText("asideData")[5]}</div><br></br>
          <div>{this.findText("asideData")[6]}</div>
          <div>{this.findText("asideData")[7]}</div><br></br>

          <LinkBlock link="https://www.facebook.com/Nikolaevsailing/" text="facebook.com/Nikolaevsailing" />
          <LinkBlock link="https://vk.com/Nikolaevsailing" text="vk.com/Nikolaevsailing" />
          <div>
            <a target="_blank" class="aside__link aside__gitlink" href="https://github.com/Sitecreator143">github.com/Sitecreator143</a>
          </div>
        </div>
      </aside>
    )
  }
}
