import { html } from "../../../node_modules/lit-html/lit-html.js";

const projectsTemplate = () => html`
  <div class="container-xl tc padTop12">
    <h1 class="flex justify-content-center">Projects</h1>
    <div
      class="w-100  justify-content-around"
      style="overflow-x:auto;padding-bottom:5%"
    >
      <a
        class="project justify-content-around"
        href="https://recipeapp-demo.netlify.app/"
        target="_blank"
        alt=""
        >1.recipeapp-demo</a
      >
      <a
        class="project justify-content-around"
        href="https://mapty-ridvan.netlify.app/"
        target="_blank"
        alt=""
      >
        2.mapty</a
      >
      <a
        class="project justify-content-around"
        href="https://banking-ridvan.netlify.app/"
        target="_blank"
        alt=""
      >
        3.banking</a
      >
      <a
        class="project justify-content-around"
        href="https://recipeb-k.netlify.app/"
        target="_blank"
        alt=""
      >
        4.recipeBook</a
      >
    </div>
    <div id="projectsImg">
      <img
        id="img1"
        class=" w-100 h3   dn "
        src="../../../assert/projectsPhotos/brave_screenshot_recipeapp-demo.netlify.app.png"
        alt=""
      />
      <img
        id="img2"
        class="w-100 h3  dn "
        src="../../../assert/projectsPhotos/brave_screenshot_mapty-ridvan.netlify.app.png"
        alt=""
      />
      <img
        id="img3"
        class=" w-100 h3  dn "
        src="../../../assert/projectsPhotos/brave_screenshot_banking-ridvan.netlify.app.png"
        alt=""
      />
      <img
        id="img4"
        class=" w-100 h3 dn "
        src="../../../assert/projectsPhotos/brave_screenshot_recipeb-k.netlify.app.png"
        alt=""
      />
    </div>
  </div>
`;

export function projectPage(ctx) {
  ctx.render(projectsTemplate());

  [...document.querySelectorAll("footer a")].forEach((a) =>
    a.classList.remove("biggerNavEl")
  );
  document.getElementById(`${ctx.path}`).classList.add("biggerNavEl");
  //
  const projects = document.getElementsByClassName("project");
  [...projects].map((el, i) => {
    el.style.color = "currentColor";
    el.addEventListener("mouseover", whenMouseIsOver.bind(null, el, i));
    el.addEventListener("mouseout", whenMouseIsOut.bind(null, el, i));
  });
  //
}

function whenMouseIsOver(elName, index) {
  index += 1;
  const currentImg = document.querySelector(`#img${index}`);

  currentImg.classList.remove("dn");

  currentImg.classList.add("animate__animated", "animate__fadeIn");

  currentImg.style.setProperty("--animate-duration", "1.8s");
}
function whenMouseIsOut(elName, index) {
  index += 1;
  const currentImg = document.querySelector(`#img${index}`);
  currentImg.classList.add("dn");

  currentImg.classList.remove("animate__animated", "animate__fadeIn");
}
