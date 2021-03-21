//Styles
import "./styles/style.scss"

//React
import React from 'react';
import ReactDOM from 'react-dom';

const container = document.querySelector("[data-container]");
export let isRussian = true;

//Aside
import { Aside } from "./scripts/aside.js";
ReactDOM.render(
  <Aside />,
  container
)



import { Settings } from "./scripts/settings.js";
new Settings().setDefaultSettings();


import { Section } from "./scripts/section.js";
new Section(true);