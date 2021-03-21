//Styles
import "./styles/style.scss"

//React
import React from 'react';
import ReactDOM from 'react-dom';

import asideImg from "./img/aside__img.jpg";
export const asideImgSrc = asideImg;

import { Settings } from "./scripts/settings.js";
new Settings().setDefaultSettings();

import { Aside } from "./scripts/aside.js";
import { Section } from "./scripts/section.js";
export const blocsObject = {
  aside: {},
  section: {}
};
blocsObject.aside = new Aside(JSON.parse(localStorage.getItem("Alexander Nikolaev CV Settings")).language).createAside();
blocsObject.section = new Section(JSON.parse(localStorage.getItem("Alexander Nikolaev CV Settings")).language).createSection();