import { text } from "./text.js";
import { isRussian } from "../main.js";

import React from 'react';
import ReactDOM from 'react-dom';

class Article extends React.Component {
  findText(textLink) {
    const outputText = text.find(el => el.isRussian === isRussian)[textLink];
    return outputText;
  }
  render() {
    return (
      <article>
        <div class="article__header">
          <i class={this.props.articleIconClass}></i>
          <div class="article__title">{this.findText(this.props.textLink).title}</div>
        </div>
        <div class="article__text">{this.findText(this.props.textLink).text}</div>
      </article>
    )
  }
}

class Link extends React.Component {
  render() {
    return(
        <div class="article__link">
          <a href={this.props.link} target="_blank">{this.props.title}</a>
        </div>
    )
  }
}

export class Section extends React.Component {
  constructor(props) {
    super(props);
  }
  findText(textLink) {
    const outputText = text.find(el => el.isRussian === isRussian)[textLink];
    return outputText;
  }
  render() {
    return(
      <section>
        <Article articleIconClass="fas fa-user" textLink="aboutMe"/>
        <Article articleIconClass="fas fa-wrench" textLink="skillsInDevelopment"/>

        <article class="article__works">
          <div class="article__header">
            <i class="fas fa-briefcase"></i>
            <div class="article__title">{this.findText("portfolio").title}</div>
          </div>
          <div class="article__works-wrap">
          <Link link="https://sitecreator143.github.io/cv-react/dist" title="CV (React, HTML/SCSS, Webpack)"/>
            <Link link="https://sitecreator143.github.io/kids-jump-tech/dist" title="Landing: Kids jump tech (HTML/SCSS/JS, Webpack)"/>
            <Link link="https://sitecreator143.github.io/RS-clone" title="App: Dice poker (HTML/CSS/JS, AnimeJS, AudioAPI, Mocha, Airbnb)"/>
            <Link link="https://sitecreator143.github.io/app-english-for-kids" title="App: English for kids (HTML/SCSS/JS)"/>
            <Link link="https://sitecreator143.github.io/app-covid-dashboard/" title="App: Covid dashboard (HTML/SCSS/JS, Hight charts, ESlint, API, localStorage)"/>
            <Link link="https://sitecreator143.github.io/app-gem-puzzle" title="App: Gem puzzle (HTML/SCSS/JS, localStorage, Canvas)"/>
            <Link link="https://sitecreator143.github.io/app-keyboard" title="App: Keyboard (HTML/SCSS/JS)"/>
            <Link link="https://sitecreator143.github.io/app-calculator" title="App: Calculator (HTML/CSS/JS)"/>
            <Link link="https://sitecreator143.github.io/site-landing-shelter" title="Landing: Shelter (HTML/SCSS/JS)"/>
            <Link link="https://sitecreator143.github.io/site-landing-eleven" title="Landing: Eleven (HTML/SCSS/JS, jQuery, PHP mailer)"/>
            <Link link="https://sitecreator143.github.io/app-momentum/" title="App: Momentum (HTML/SCSS/JS, API, localStorage)"/>
            <Link link="https://sitecreator143.github.io/site-landing-portfolio" title="Landing: Personal page (HTML/SCSS/jQuery)"/>
            <Link link="https://sitecreator143.github.io/site-landing-webdev" title="Landing: Webdev (HTML/CSS)"/>
            <Link link="https://github.com/Sitecreator143" title="My GitHub: Sitecreator143"/>
          </div>
        </article>

        
        <Article articleIconClass="fas fa-graduation-cap" textLink="education"/>
        <Article articleIconClass="fas fa-building" textLink="workExperience"/>
        <Article articleIconClass="fas fa-user-shield" textLink="personalQualities"/>
        <Article articleIconClass="fas fa-cog" textLink="specialSkills"/>
      </section>
    )
  }
}
