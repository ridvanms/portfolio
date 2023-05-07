import { html, render } from "../../../node_modules/lit-html/lit-html.js";

export const loaderTemplate = () => html`
  <div class="splashscreen" style="opacity:1">
    <div id="loading-screen">
      <p class="loading-text-wrapper credits">LOADING...</p>
    </div>
  </div>
`;

export const homeLoaderTemplate = () => html`
  <div class="splashscreen homeLoader" style="opacity:1">
    <div id="loading-screen">
      <img id="outline" src="https://i.ibb.co/DwrN2rk/logo-loader.gif" />
    </div>
  </div>
`;
