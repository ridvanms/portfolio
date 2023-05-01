import page from "../node_modules/page/page.mjs";
import { html, render } from "../node_modules/lit-html/lit-html.js";

import { homePage } from "./views/home/homePage.js";
import { layoutTemplate } from "./views/layout/layoutTemplate.js";
import { projectPage } from "./views/projects/projects.js";
import { loaderTemplate } from "./views/loader/loader.js";

const root = document.getElementById("wrapper");

page(decorateContext);

page("index.html", "/");
page("/", loader, homePage);
page("/projects", loader, projectPage);
page("/projects/:id", projectPage);
page.start();

function loader(ctx, next) {
  render(loaderTemplate(), root);
  setTimeout(() => {
    next();
  }, 1300);
}
function decorateContext(ctx, next) {
  ctx.render = renderView;
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
  if (sun.style.display === "inline") {
    moon.style.display = "inline";
    sun.style.display = "none";

    // adding brightness
    htmlEl.style = "filter:brightness(1);";

    a.forEach((el) => (el.style = "color:white"));

    body.style = "color:white";
  } else {
    moon.style.display = "none";
    sun.style.display = "inline";

    //  removing brightness
    htmlEl.style = "filter:brightness(0.75);";

    a.forEach((el) => (el.style = "color: black"));
    body.style = `color:black`;
    // changing font colors
  }
}
//NOTE fore footerNavigation
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleHamburgerMenu() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
document.querySelector(".icon").addEventListener("click", toggleHamburgerMenu);
