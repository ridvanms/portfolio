import page from "../node_modules/page/page.mjs";
import { html, render } from "../node_modules/lit-html/lit-html.js";

import {
  homePage,
  themeSwitcherOff,
  themeSwitcherOn,
} from "./views/home/homePage.js";
import { layoutTemplate } from "./views/layout/layoutTemplate.js";
import { projectPage } from "./views/projects/projects.js";
import { homeLoaderTemplate, loaderTemplate } from "./views/loader/loader.js";
import { contactsPage } from "./views/contacts/contacts.js";
import { aboutPage } from "./views/about/about.js";

const root = document.querySelector("#wrapper");
page(loader);
page(decorateContext);

page("index.html", "/");
page("/", homePage);
page("/projects", projectPage);
page("/about", aboutPage);
page("/contacts", contactsPage);
page.start();

homeLoader();

setTimeout(() => {}, 2000);
function loader(ctx, next) {
  render(loaderTemplate(), root);
  setTimeout(() => {
    next();
  }, 300);
}
function homeLoader(ctx, next) {
  render(homeLoaderTemplate(), root);
}
function decorateContext(ctx, next) {
  ctx.render = renderView;

  [...document.querySelectorAll(" a")].forEach((a) => {
    a.style.opacity = "0.7";
    a.style["font-size"] = "smaller";
  });
  document.getElementById(`${ctx.path}`).style["opacity"] = "1";
  document.getElementById(`${ctx.path}`).style["font-size"] = "larger";

  next();
}

function renderView(content) {
  render(layoutTemplate(content), root);
}
//NOTE for brightness
const lightButtonToggle = document.querySelectorAll(".toggleImg");
lightButtonToggle.forEach((el) =>
  el.addEventListener("click", toggleDisplayStyle)
);
///NOTE -
const htmlEl = document.querySelector("body").parentElement;

const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

const body = document.querySelector("body");

const [...a] = document.querySelectorAll("a");

function toggleDisplayStyle(event) {
  if (sun.style.display === "block") {
    moon.style.display = "block";
    sun.style.display = "none";

    // adding brightness
    htmlEl.style = "filter:brightness(1);";

    a.forEach((el) => (el.style = "color:white"));

    body.style = "color:white";
  } else {
    moon.style.display = "none";
    sun.style.display = "block";

    //  removing brightness
    htmlEl.style = "filter:brightness(0.75);";

    a.forEach((el) => (el.style = "color: black"));
    body.style = `color:black`;

    // changing font colors
  }
}
//NOTE fore footerNavigation
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

//NOTE theme switch
let toggleBool = false;

const themeSwitchBtn = document.querySelector(".theme-switch ");
themeSwitchBtn.addEventListener("click", toggleSwitches);

function toggleSwitches(event) {
  const currentBtn = event.currentTarget;

  toggleBool = !toggleBool;

  if (toggleBool) {
    currentBtn.innerHTML = themeSwitcherOn;

    body.style["background-color"] = "rgb(69, 62, 62)";
    body.style.color = `white`;
    a.forEach((el) => {
      el.style.color = "white";
    });
  } else {
    currentBtn.innerHTML = themeSwitcherOff;

    body.style["background-color"] = "#0000";
    // body.style =
    //   "background: rgb(62,130,119);background: linear-gradient(87deg, rgba(62,130,119%);";
    body.style.color = "rgb(60, 56, 56)";
    a.forEach((el) => {
      el.style.color = "black";
    });
  }
}
