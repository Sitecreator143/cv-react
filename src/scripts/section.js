import { isRussian } from "../main.js";

import React from 'react';
import ReactDOM from 'react-dom';

const sectionText = {
  aboutMe: [
    {
      title: "About me",
      text: "Hello. I am a Front-end Web-developer. I really like the IT industry and I want to become a professional in this area. I work on websites and applications every day, constantly developing. I get along well with the team. My strengths are logic, pedantry and self-organization."
    },
    {
      title: "Обо мне",
      text: "Здравствуйте. Я - Фронт-энд Веб-разработчик. Мне очень нравится IT индустрия, и я хочу стать профессионалом в этой сфере. Ежедневно работаю над сайтами и приложениями, постоянно развиваюсь. Хорошо уживаюсь с коллективом. Мои сильные стороны: логика, педантичность и самоорганизация."
    }
  ],
  skillsInDevelopment: [
    {
      title: "Skills in development",
      text: [
        "1) HTML and CSS:",
        "Preprocessor SCSS/SASS.",
        "Preprocessor PUG.",
        "Basic BEM.",
        "Adaptive. Cross Browser. Semantic. Validity.",
        "",
        "2) JavaScript:",
        "Object-oriented programming. Modern ECMAScript.",
        "Basic JS (Data types, operators, functions, arrays, cycles, objects, methods, classes).",
        "Advanced JS (DOM, events, API, localStorage, Asynchronous code, Canvas).",
        "",
        "3) Other:",
        "Basic Git. Github. Github Desktop.",
        "Webpack (Many projects in the portfolio are assembled into high-quality sites from the components Pug, SCSS, JS. This allows to make modern projects of large size.).",
        "Node.js beginner (For example eslint-air-bnb).",
      ]
    },
    {
      title: "Навыки в разработке",
      text: [
        "1) HTML и CSS:",
        "Препроцессор SCSS/SASS.",
        "Препроцессор PUG.",
        "Основы БЭМ.",
        "Адаптив. Кроссбраузерность. Семантика. Валидность.",
        "",
        "2) JavaScript:",
        "Объектно-ориентированное программирование. Современный ECMAScript.",
        "Базовый JS (Типы данных, операторы, функции, массивы, циклы, объекты, методы, классы).",
        "Продвинутый JS (DOM, события, API, localStorage, Асинхронные команды, Canvas).",
        " ",
        "3) Другое:",
        "Git. Github. Github Desktop.",
        "Webpack (Многие проекты, приведенные в портфолио, собираются в качественные сайты из компонентов Pug, SCSS, JS. Это позволяет делать современные проекты большого объема.).",
        "Начальный Node.js (Например использование eslint-air-bnb).",
      ]
    }
  ],
  portfolio: [
    {
      title: "My works",
      text: ""
    },
    {
      title: "Мои работы",
      text: ""
    }
  ],
  education: [
    {
      title: "Education",
      text: [
        "RS School «JavaScript/Front-end» 25 weeks course. During the course were developed many apps, including two team developments. In the final team-project I was a team-lead (2020).",
        "",
        "Tolyatti State University. Department of industrial electronics. Bachelor’s degree in Electronics and Nanoelectronics (2012-2016).",
        "",
        "Tolyatti State University. Department of industrial electronics. Master’s degree in Electronics and Nanoelectronics (2016-2018)."
      ]
    },
    {
      title: "Образование",
      text: [
        "RS School «JavaScript/Фронт-энд» 25-ти недельный курс. На курсе было сделано множество приложений, два из которых были командными. В финальном командном проекте я был в качестве тим-лида (2020).",
        "",
        "Тольяттинский Государственный Университет. Кафедра промышленной электроники. Степень бакалавра по направлению ”Электроника и наноэлектроника” (2012-2016).",
        "",
        "Тольяттинский Государственный Университет. Кафедра промышленной электроники. Степень магистра по направлению ”Электроника и наноэлектроника” (2016-2018)."
      ]
    }
  ],
  workExperience: [
    {
      title: "Work experience",
      text: [
        "“Azotremstroy” 2018 – 2020, Tolyatti, Russia, Engineer. Fire system design. Work with documents, projects.",
        "",
        "“Vershinasport” 2016-2017, Tolyatti, Russia, Businessman. Sports nutrition store development. Selling sports nutrition. Advertising setup.",
        "",
        "Yacht-club “Druzba” 2015 Tolyatti, Russia, Instructor. Theory training. Organization of training on the water."
      ]
    },
    {
      title: "Опыт работы",
      text: [
        "“Азотремстрой” 2018 – 2020, г. Тольятти, Россия, инженер. Разработка пожарных систем. Работа с документацией. Проектирование.",
        "",
        "“Вершинаспорт” 2016-2017, г. Тольятти, Россия, владелец бизнеса. Развитие магазина спортивного питания. Продажа спортивного питания. Настройка рекламы.",
        "",
        "Яхт-клуб “Дружба” 2015 г. Тольятти, Россия, инструктор. Теоретическая подготовка. Организация тренировок на воде."
      ]
    }
  ],
  personalQualities: [
    {
      title: "Personal qualities",
      text: "Careful, responsible, rational, tranquility, creative, reliable."
    },
    {
      title: "Личные качества",
      text: "Аккуратный, ответственный, рациональный, спокойный, креативный, надежный."
    }
  ],
  specialSkills: [
    {
      title: "Special skills",
      text: [
        "1) Language skills:",
        "Russia – Native.",
        "English – A2+.",
        "Italian – A1.",
        "",
        "2) Computer literacy:",
        "PhotoShop, Avocode, VSCode, Prepros.",
        "Microsoft Office.",
        "AutoCad, MathCad, Compass.",
        "",
        "3) Driving: I have got driving license for car (category B) and boat. I have got a car – Lada Largus.",
        "",
        "4) Hobbies: Ship and aero modeling, electronics, sailing, skiing, basketball, volleyball, swimming, cycling."
      ]
    },
    {
      title: "Особые навыки",
      text: [
        "1) Знание языков:",
        "Русский - родной.",
        "Английский - A2+ (выше  начального).",
        "Итальянский - A1 (начальный).",
        "",
        "2) Компьютерные навыки:",
        "PhotoShop, Avocode, VSCode, Prepros.",
        "Microsoft Office.",
        "AutoCad, MathCad, Compass.",
        "",
        "3) Вождение: Есть права на машину (категория B) и на яхту. Есть машина – Лада Ларгус.",
        "",
        "4) Хобби: Авиа- и судомоделирование, электроника, парусный спорт, лыжи, баскетбол, волейбол, плавание, велоспорт."
      ]
    }
  ]
}

class Article extends React.Component {
  findText(textLink) {
    const outputText = isRussian ? sectionText[textLink][1] : sectionText[textLink][0]
    return outputText;
}
  render() {
    return (
      <article class="article">
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
      const outputText = isRussian ? sectionText[textLink][1] : sectionText[textLink][0]
      return outputText;
  }
  render() {
    return(
      <section class="section">
        <Article articleIconClass="fas fa-user" textLink="aboutMe"/>

        <article class="article">
          <div class="article__header">
            <i class="fas fa-wrench"></i>
            <div class="article__title">{this.findText("skillsInDevelopment").title}</div>
          </div>
          <div class="article__text">
            <p class="article__paragraph">{this.findText("skillsInDevelopment").text[0]}</p>
            <p class="article__paragraph">{this.findText("skillsInDevelopment").text[1]}</p>
            <p class="article__paragraph">{this.findText("skillsInDevelopment").text[2]}</p>
            <p class="article__paragraph">{this.findText("skillsInDevelopment").text[3]}</p>
            <p class="article__paragraph">{this.findText("skillsInDevelopment").text[4]}</p>
            <p class="article__paragraph">{this.findText("skillsInDevelopment").text[5]}</p>
            <p class="article__paragraph">{this.findText("skillsInDevelopment").text[6]}</p>
            <p class="article__paragraph">{this.findText("skillsInDevelopment").text[7]}</p>
            <p class="article__paragraph">{this.findText("skillsInDevelopment").text[8]}</p>
            <p class="article__paragraph">{this.findText("skillsInDevelopment").text[9]}</p>
            <p class="article__paragraph">{this.findText("skillsInDevelopment").text[10]}</p>
            <p class="article__paragraph">{this.findText("skillsInDevelopment").text[11]}</p>
            <p class="article__paragraph">{this.findText("skillsInDevelopment").text[12]}</p>
            <p class="article__paragraph">{this.findText("skillsInDevelopment").text[13]}</p>
            <p class="article__paragraph">{this.findText("skillsInDevelopment").text[14]}</p>
          </div>
        </article>

        <article class="article__works article">
          <div class="article__header">
            <i class="fas fa-briefcase"></i>
            <div class="article__title">{this.findText("portfolio").title}</div>
          </div>
          <div class="article__wrap">
            <Link link="https://sitecreator143.github.io/cv-react/dist" title="CV (React, Pug/SCSS, Webpack)"/>
            <Link link="https://sitecreator143.github.io/site-landing-kids-jump-tech/dist" title="Landing: Kids jump tech (HTML/SCSS/JS, Webpack)"/>
            <Link link="https://sitecreator143.github.io/RS-clone" title="App: Dice poker (HTML/CSS/JS, AnimeJS, AudioAPI, Mocha, Airbnb)"/>
            <Link link="https://sitecreator143.github.io/app-english-for-kids" title="App: English for kids (HTML/SCSS/JS)"/>
            <Link link="https://sitecreator143.github.io/app-covid-dashboard/" title="App: Covid dashboard (HTML/SCSS/JS, Hight charts, ESlint, API, localStorage)"/>
            <Link link="https://sitecreator143.github.io/app-gem-puzzle" title="App: Gem puzzle (HTML/SCSS/JS, localStorage, Canvas)"/>
            <Link link="https://sitecreator143.github.io/app-keyboard" title="App: Keyboard (HTML/SCSS/JS)"/>
            <Link link="https://sitecreator143.github.io/app-calculator/dist" title="App: Calculator (HTML/CSS/JS)"/>
            <Link link="https://sitecreator143.github.io/site-landing-shelter" title="Landing: Shelter (HTML/SCSS/JS)"/>
            <Link link="https://sitecreator143.github.io/site-landing-eleven" title="Landing: Eleven (HTML/SCSS/JS, jQuery, PHP mailer)"/>
            <Link link="https://sitecreator143.github.io/site-landing-webdev" title="Landing: Webdev (HTML/CSS)"/>
            <Link link="https://github.com/Sitecreator143" title="My GitHub: Sitecreator143"/>
          </div>
        </article>
        
        <article class="article">
          <div class="article__header">
            <i class="fas fa-graduation-cap"></i>
            <div class="article__title">{this.findText("education").title}</div>
          </div>
          <div class="article__text">
            <p class="article__paragraph">{this.findText("education").text[0]}</p>
            <p class="article__paragraph">{this.findText("education").text[1]}</p>
            <p class="article__paragraph">{this.findText("education").text[2]}</p>
            <p class="article__paragraph">{this.findText("education").text[3]}</p>
            <p class="article__paragraph">{this.findText("education").text[4]}</p>
          </div>
        </article>

        <article class="article">
          <div class="article__header">
            <i class="fas fa-building"></i>
            <div class="article__title">{this.findText("workExperience").title}</div>
          </div>
          <div class="article__text">
            <p class="article__paragraph">{this.findText("workExperience").text[0]}</p>
            <p class="article__paragraph">{this.findText("workExperience").text[1]}</p>
            <p class="article__paragraph">{this.findText("workExperience").text[2]}</p>
            <p class="article__paragraph">{this.findText("workExperience").text[3]}</p>
            <p class="article__paragraph">{this.findText("workExperience").text[4]}</p>
          </div>
        </article>

        <Article articleIconClass="fas fa-user-shield" textLink="personalQualities"/>

        <article class="article">
          <div class="article__header">
            <i class="fas fa-cog"></i>
            <div class="article__title">{this.findText("specialSkills").title}</div>
          </div>
          <div class="article__text">
            <p class="article__paragraph">{this.findText("specialSkills").text[0]}</p>
            <p class="article__paragraph">{this.findText("specialSkills").text[1]}</p>
            <p class="article__paragraph">{this.findText("specialSkills").text[2]}</p>
            <p class="article__paragraph">{this.findText("specialSkills").text[3]}</p>
            <p class="article__paragraph">{this.findText("specialSkills").text[4]}</p>
            <p class="article__paragraph">{this.findText("specialSkills").text[5]}</p>
            <p class="article__paragraph">{this.findText("specialSkills").text[6]}</p>
            <p class="article__paragraph">{this.findText("specialSkills").text[7]}</p>
            <p class="article__paragraph">{this.findText("specialSkills").text[8]}</p>
            <p class="article__paragraph">{this.findText("specialSkills").text[9]}</p>
            <p class="article__paragraph">{this.findText("specialSkills").text[10]}</p>
            <p class="article__paragraph">{this.findText("specialSkills").text[11]}</p>
            <p class="article__paragraph">{this.findText("specialSkills").text[12]}</p>
          </div>
        </article>
      </section>
    )
  }
}
