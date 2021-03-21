//Styles
import "./styles/style.scss"

//React
import React from 'react';
import ReactDOM from 'react-dom';

const main = document.querySelector("[data-main]");
export let isRussian = false;

//Aside
import { Aside } from "./scripts/aside.js";
import { Section } from "./scripts/section.js";

//Render
export const languageSwitch = new Event("my-event");
document.documentElement.addEventListener("my-event", () => {
  isRussian = !isRussian;
  ReactDOM.render(
    <div class="container">
      <Aside />
      <Section/>
    </div>,
    main
  )
})
document.documentElement.dispatchEvent(languageSwitch)



