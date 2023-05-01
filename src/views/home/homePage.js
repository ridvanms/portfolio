import { html } from "../../../node_modules/lit-html/lit-html.js";

const homeTemplate = () => html`
  <section id="homeSection" class="homeSection ">
    <div class="container tc ">
      <img
        src="./assert/images/AZ3I0429-withShadow-removebg-preview.png"
        class="br-100 w3 h3 dib animate__animated animate__zoomIn animate__delay-0.2s"
        style="opacity:75%"
        alt="avatar"
      />
      <h1 class="h1Profile">Ridvan Saraliev</h1>
      <h4  class="h4Profile ">Web Developer</h4>
    </div>
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

  [...document.querySelectorAll("footer a")].forEach((a) =>
    a.classList.remove("biggerNavEl")
  );
  document.getElementById(`${ctx.path}`).classList.add("biggerNavEl");
}
