//Styles
import "./styles/style.scss"

//React
import React from 'react';
import ReactDOM from 'react-dom';

const container = document.querySelector("[data-container]");
export let isRussian = false;

//Aside
import { Aside } from "./scripts/aside.js";

//Render
export const languageSwitch = new Event("my-event");
document.documentElement.addEventListener("my-event", () => {
  isRussian = !isRussian;
  ReactDOM.render(
    <Aside />,
    container
  )
})
document.documentElement.dispatchEvent(languageSwitch)



