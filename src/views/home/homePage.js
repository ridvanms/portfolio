import { html } from "../../../node_modules/lit-html/lit-html.js";
import Typed from "../../../node_modules/typed.js/dist/typed.module.js";

const homeTemplate = () => html`
  <section id="homeSection" class="homeSection container tc">
    <img
      src="./assert/images/AZ3I0429-withShadow-removebg-preview.png"
      class="img-fluid   animate__animated animate__zoomIn animate__delay-0.2s"
      style="width:16em;height:auto"
      alt="avatar"
    />
    <h1>Hi, I'm <span class="h1Profile">Ridvan Saraliev</span></h1>
    </span>
    <h4 class="h4Profile"></h4>
  </section>
`;

const welcomeTemplate = () => html`<div
  class="toast"
  role="alert"
  aria-live="assertive"
  aria-atomic="true"
>
  <div class="toast-header">
    <img src="..." class="rounded me-2" alt="..." />
    <strong class="me-auto">Bootstrap</strong>
    <small class="text-body-secondary">11 mins ago</small>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="toast"
      aria-label="Close"
    ></button>
  </div>
  <div class="toast-body">Hello, world! This is a toast message.</div>
</div>`;

export function homePage(ctx) {
  ctx.render(homeTemplate());

  const typed = new Typed(".h4Profile", {
    strings: ["^1000 <i> I build things for the web.</i>^2000"],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 50,
    loop: false,
    loopCount: Infinity,
    showCursor: false,
  });
  [...document.querySelectorAll(" a")].forEach((a) => {
    a.style.opacity = "0.7";
    a.style["font-size"] = "smaller";
  });
  document.getElementById(`${ctx.path}`).style["opacity"] = "1";
  document.getElementById(`${ctx.path}`).style["font-size"] = "larger";
}

export const themeSwitcherOn = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 17"
    width="17"
    height="17"
    class="icons-style mini-icons"
  >
    <title>Theme</title>
    <path
      d="M14.994,7.99a7,7,0,0,1-12.813,3.9,1,1,0,0,1,1.063-1.532,6.139,6.139,0,0,0,1.961.089,6.012,6.012,0,0,0,5.212-4.985,6.067,6.067,0,0,0-.065-2.274A1,1,0,0,1,11.9,2.182,6.985,6.985,0,0,1,14.994,7.99Z"
      transform-origin="0px 0px"
      style="transform: translateY(17px); transform-origin: 0px 0px;"
    ></path>
    <g
      transform-origin="0px 0px"
      style="transform: none; transform-origin: 0px 0px;"
    >
      <circle cx="8.5" cy="8.5" r="3"></circle>
      <line x1="8.5" y1="1" x2="8.5" y2="2"></line>
      <line x1="13.803" y1="3.197" x2="13.096" y2="3.904"></line>
      <line x1="16" y1="8.5" x2="15" y2="8.5"></line>
      <line x1="13.803" y1="13.803" x2="13.096" y2="13.096"></line>
      <line x1="8.5" y1="16" x2="8.5" y2="15"></line>
      <line x1="3.197" y1="13.803" x2="3.904" y2="13.096"></line>
      <line x1="1" y1="8.5" x2="2" y2="8.5"></line>
      <line x1="3.197" y1="3.197" x2="3.904" y2="3.904"></line>
    </g>
  </svg>
`;

export const themeSwitcherOff = ` <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 17 17"
  width="17"
  height="17"
  class="icons-style mini-icons"
>
  <title>Theme</title>
  <path
    d="M14.994,7.99a7,7,0,0,1-12.813,3.9,1,1,0,0,1,1.063-1.532,6.139,6.139,0,0,0,1.961.089,6.012,6.012,0,0,0,5.212-4.985,6.067,6.067,0,0,0-.065-2.274A1,1,0,0,1,11.9,2.182,6.985,6.985,0,0,1,14.994,7.99Z"
    transform-origin="0px 0px"
    style="transform: none; transform-origin: 0px 0px;"
  ></path>
  <g
    transform-origin="0px 0px"
    style="transform: translateY(17px); transform-origin: 0px 0px;"
  >
    <circle cx="8.5" cy="8.5" r="3"></circle>
    <line x1="8.5" y1="1" x2="8.5" y2="2"></line>
    <line x1="13.803" y1="3.197" x2="13.096" y2="3.904"></line>
    <line x1="16" y1="8.5" x2="15" y2="8.5"></line>
    <line x1="13.803" y1="13.803" x2="13.096" y2="13.096"></line>
    <line x1="8.5" y1="16" x2="8.5" y2="15"></line>
    <line x1="3.197" y1="13.803" x2="3.904" y2="13.096"></line>
    <line x1="1" y1="8.5" x2="2" y2="8.5"></line>
    <line x1="3.197" y1="3.197" x2="3.904" y2="3.904"></line>
  </g>
</svg>`;
