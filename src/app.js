import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";

const root = document.querySelector("body");

page(decorateContext);

page("index.html", "/");
// page("/",homePage);

function decorateContext(ctx, next) {
  ctx.render = renderView;

  next();
}
