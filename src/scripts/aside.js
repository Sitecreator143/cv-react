import { text } from "./text.js";
import { blocsObject } from "../main.js";
import { Section } from "./section.js";
import { asideImgSrc } from "../main.js";

export class Aside {
  constructor(language) {
    this.container = document.querySelector("[data-container]")
    this.language = language;
  }

  findText(textLink) {
    const outputText = text.find(el => el.language === this.language)[textLink];
    return outputText;
  }

  createWrap() {
    this.aside = document.createElement("aside");
    this.container.append(this.aside);
    return this;
  }

  createHeader() {
    const header = document.createElement("div");
    header.classList.add("aside__header");
    this.aside.append(header);

    const asideImage = document.createElement("div");
    asideImage.classList.add("aside__image");
    header.append(asideImage);

    const asideImagePicture = document.createElement("img");
    asideImagePicture.setAttribute("src", asideImgSrc);
    asideImagePicture.style.width = "100%";
    asideImage.append(asideImagePicture);

    const asideLanguage = document.createElement("div");
    asideLanguage.classList.add("aside__language");
    asideImage.append(asideLanguage);

    const asideLanguageEn = document.createElement("div");
    asideLanguageEn.classList.add("aside__languageEn");
    if (this.language === "English") {
      asideLanguageEn.classList.add("aside__language_active");
    }
    asideLanguageEn.innerText = "EN";
    asideLanguage.append(asideLanguageEn);

    const asideLanguageRu = document.createElement("div");
    asideLanguageRu.classList.add("aside__languageRu");
    if (this.language === "Russian") {
      asideLanguageRu.classList.add("aside__language_active");
    }
    asideLanguageRu.innerText = "RU";
    asideLanguage.append(asideLanguageRu);

    const changeLanguage = () => {
      const languagesCount = 2;
      const languages = ["Russian", "English"];
      const currentSetting = JSON.parse(localStorage.getItem("Alexander Nikolaev CV Settings"));
      let currentLanguageNumber = languages.indexOf(currentSetting.language);
      currentLanguageNumber = (currentLanguageNumber + 1) % languagesCount;
      currentSetting.language = languages[currentLanguageNumber];
      localStorage.setItem("Alexander Nikolaev CV Settings", JSON.stringify(currentSetting));
    };

    const refreshPage = () => {
      this.container.innerHTML = "";
      blocsObject.aside = new Aside(JSON.parse(localStorage.getItem("Alexander Nikolaev CV Settings")).language).createAside();
      blocsObject.section = new Section(JSON.parse(localStorage.getItem("Alexander Nikolaev CV Settings")).language).createSection();
    };

    asideLanguage.addEventListener("click", () => {
      changeLanguage();
      refreshPage();
    });

    const asideName = document.createElement("div");
    asideName.innerText = this.findText("name");
    asideName.classList.add("aside__name");
    header.append(asideName);

    const asideProf = document.createElement("div");
    asideProf.innerText = this.findText("prof");
    asideProf.classList.add("aside__prof");
    header.append(asideProf);
  }

  createFooter() {
    const footer = document.createElement("div");
    footer.classList.add("aside__footer");
    this.aside.append(footer);

    const asideInfo = document.createElement("div");
    asideInfo.classList.add("aside__info");
    asideInfo.innerText = this.findText("asideInfo")
    footer.append(asideInfo);

    const asideData = document.createElement("div");
    asideData.innerText = this.findText("asideData")
    footer.append(asideData);

    const createLink = (link, text) => {
      const asideLink = document.createElement("a");
      asideLink.classList.add("aside__link");
      asideLink.setAttribute("href", link)
      asideLink.innerText = text;
      footer.append(asideLink);
      return asideLink;
    }

    const asideLinkFirst = createLink("https://www.facebook.com/Nikolaevsailing/", "\nfacebook.com/Nikolaevsailing");
    const asideLinkSecond = createLink("https://vk.com/Nikolaevsailing", "\nvk.com/Nikolaevsailing");
    const asideLinkThird = createLink("https://github.com/Sitecreator143", "\ngithub.com/Sitecreator143");
    asideLinkThird.classList.add("aside__gitlink");
  }

  createAside() {
    this.createWrap();
    this.createHeader();
    this.createFooter();
  }
}