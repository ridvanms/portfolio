import { html } from "../../../node_modules/lit-html/lit-html.js";

export const layoutTemplate = (content) => {
  return html`<main class="container">${content}</main>`;
};
