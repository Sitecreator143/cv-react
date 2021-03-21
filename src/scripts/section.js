import { text } from "./text.js"
import { isRussian } from "../main.js"

export class Section {
  constructor(isRussian) {
    this.container = document.querySelector("[data-container]")
    this.isRussian = isRussian;
  }

  findText(textLink) {
    const outputText = text.find(el => el.isRussian === this.isRussian)[textLink];
    return outputText;
  }

  createWrap() {
    this.section = document.createElement("section");
    this.container.append(this.section)
    return this;
  }

  createArticle(articleIconClass, textLink) {
    const article = document.createElement("article");
    this.section.append(article);

    const articleHeader = document.createElement("div");
    articleHeader.classList.add("article__header");
    article.append(articleHeader);

    const articleIcon = document.createElement("i");
    articleIcon.classList.add("fas");
    articleIcon.classList.add(articleIconClass);
    articleHeader.append(articleIcon);

    const articleTitle = document.createElement("div");
    articleTitle.classList.add("article__title");
    articleTitle.innerText = this.findText(textLink).title;
    articleHeader.append(articleTitle);

    article.articleText = document.createElement("div");
    article.articleText.classList.add("article__text");
    article.articleText.innerText = this.findText(textLink).text;
    article.append(article.articleText);
    return article;
  }

  createLink(title, link) {
    const portfolioLink = document.createElement("a");
    portfolioLink.setAttribute("href", link);
    portfolioLink.setAttribute("target", "_blank");
    portfolioLink.innerText = title;
    portfolioLink.classList.add("article__link");
    return portfolioLink;
  }

  createDrop() {
    const drop = document.createElement("br");
    return drop;
  }

  createSection() {
    this.createWrap();
    const articleAboutMe = this.createArticle("fa-user", "aboutMe");
    const articleSkillsInDevelopment = this.createArticle("fa-wrench", "skillsInDevelopment");

    const articlePortfolio = this.createArticle("fa-briefcase", "portfolio");
    articlePortfolio.articleText.append(this.createLink("Landing: Kids jump tech (HTML/SCSS/JS, Webpack)", "https://sitecreator143.github.io/kids-jump-tech/dist"));
    articlePortfolio.articleText.append(this.createDrop());
    articlePortfolio.articleText.append(this.createLink("App: Dice poker (HTML/CSS/JS, AnimeJS, AudioAPI, Mocha, Airbnb)", "https://sitecreator143.github.io/RS-clone"));
    articlePortfolio.articleText.append(this.createDrop());
    articlePortfolio.articleText.append(this.createLink("App: Covid-19 dashboard (HTML/CSS/JS, ESlint, Hight charts, API)", "https://sitecreator143.github.io/app-covid-dashboard"));
    articlePortfolio.articleText.append(this.createDrop());
    articlePortfolio.articleText.append(this.createLink("App: English for kids (HTML/SCSS/JS)", "https://sitecreator143.github.io/app-english-for-kids"));
    articlePortfolio.articleText.append(this.createDrop());
    articlePortfolio.articleText.append(this.createLink("App: Gem puzzle (HTML/SCSS/JS, localStorage, Canvas)", "https://sitecreator143.github.io/app-gem-puzzle"));
    articlePortfolio.articleText.append(this.createDrop());
    articlePortfolio.articleText.append(this.createLink("App: Keyboard (HTML/SCSS/JS)", "https://sitecreator143.github.io/app-keyboard"));
    articlePortfolio.articleText.append(this.createDrop());
    articlePortfolio.articleText.append(this.createLink("App: Calculator (HTML/CSS/JS)", "https://sitecreator143.github.io/app-calculator"));
    articlePortfolio.articleText.append(this.createDrop());
    articlePortfolio.articleText.append(this.createLink("App: Momentum (HTML/SCSS/JS, localStorage, API)", "https://sitecreator143.github.io/app-momentum"));
    articlePortfolio.articleText.append(this.createDrop());
    articlePortfolio.articleText.append(this.createLink("Landing: Shelter (HTML/SCSS/JS)", "https://sitecreator143.github.io/site-landing-shelter"));
    articlePortfolio.articleText.append(this.createDrop());
    articlePortfolio.articleText.append(this.createLink("Landing: Eleven (HTML/SCSS/JS, jQuery, PHP mailer)", "https://sitecreator143.github.io/site-landing-eleven"));
    articlePortfolio.articleText.append(this.createDrop());
    articlePortfolio.articleText.append(this.createLink("Landing: Personal page (HTML/SCSS/jQuery)", "https://sitecreator143.github.io/site-landing-portfolio"));
    articlePortfolio.articleText.append(this.createDrop());
    articlePortfolio.articleText.append(this.createLink("Landing: Webdev (HTML/CSS)", "https://sitecreator143.github.io/site-landing-webdev"));
    articlePortfolio.articleText.append(this.createDrop());
    articlePortfolio.articleText.append(this.createLink("For test: truck (HTML/CSS)", "https://sitecreator143.github.io/fun-truck"));
    articlePortfolio.articleText.append(this.createDrop());
    articlePortfolio.articleText.append(this.createDrop());
    articlePortfolio.articleText.append(this.createLink("GitHub: Sitecreator143", "https://github.com/Sitecreator143"));

    const articleEducation = this.createArticle("fa-graduation-cap", "education");
    const articleWorkExperience = this.createArticle("fa-building", "workExperience");
    const articlePersonalQualities = this.createArticle("fa-user-shield", "personalQualities");
    const articleSpecialSkills = this.createArticle("fa-cog", "specialSkills");
  }
}