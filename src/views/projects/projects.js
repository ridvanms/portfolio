import { html } from "../../../node_modules/lit-html/lit-html.js";

const projectsTemplate = () => html`
  <div class="container tc padTop12">
    <h1 class="flex justify-content-center">PROJECTS</h1>
    <div class="w-100  projects projectsIMG " style="">
      <div class="flex justify-content-center ">
        <img
          id="img1"
          class=" w-100 h3   dn "
          src="../../../assert/images/mehdi-messrro-oaN-5vyo4WA-unsplash.jpg"
          alt=""
        />
        <img
          id="img2"
          class="w-100 h3  dn "
          src="../../../assert/images/mehdi-messrro-oaN-5vyo4WA-unsplash.jpg"
          alt=""
        />
        <img
          id="img3"
          class=" w-100 h3  dn "
          src="../../../assert/images/mehdi-messrro-oaN-5vyo4WA-unsplash.jpg"
          alt=""
        />
        <img
          id="img4"
          class=" w-100 h3 dn "
          src="../../../assert/images/mehdi-messrro-oaN-5vyo4WA-unsplash.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="w-100  justify-content-around" style="overflow-x:auto;padding-bottom:10%">
      <a class="project justify-content-around" href="/" target="_blank" alt=""
        >Project 1</a
      >
      <a class="project justify-content-around" href="/" target="_blank" alt=""
        >Project 2</a
      >
      <a class="project justify-content-around" href="" target="_blank" alt=""
        >Project 3</a
      >
      <a class="project justify-content-around" href="" target="_blank" alt=""
        >Project 4</a
      >
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
    el.addEventListener("mouseover", whenMouseIsOver.bind(null, el, i));
    el.addEventListener("mouseout", whenMouseIsOut.bind(null, el, i));
  });
  //
}

function whenMouseIsOver(elName, index) {
  index += 1;
  const currentImg = document.querySelector(`#img${index}`);

  currentImg.classList.remove("dn");

  currentImg.classList.add("animate__animated", "animate__zoomIn");

  currentImg.style.setProperty("--animate-duration", "0.8s");
}
function whenMouseIsOut(elName, index) {
  index += 1;
  const currentImg = document.querySelector(`#img${index}`);
  currentImg.classList.add("dn");

  currentImg.classList.remove("animate__animated", "animate__zoomIn");
}
