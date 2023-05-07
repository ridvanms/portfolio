import { html } from "../../../node_modules/lit-html/lit-html.js";
import Typed from "../../../node_modules/typed.js/dist/typed.module.js";

const aboutTemplate = () => html`
  <div class="about">
    <div class="left-partAbout ">
      <img class="aboutImg " src="./assert/images/photoProfil5.png" alt="" />
    </div>

    <div class="right-partAbout">
      <h1
        class="h1about animate__animated animate__fadeInLeft animate__delay-2s"
      >
        About
      </h1>
      <p class="paragraphAbout"></p>

      <div class="resume-link" style="opacity: 1; transform: none;">
        <div class="link-wrapper">
          <div class="link">
            <a
              href="../../../assert/Ridvan's Resume.pdf"
              target="_blank"
              rel="noreferrer"
              >↓
              <!-- -->Resume</a
            >
          </div>
          <div
            class="link-underline"
            style="transform: translateX(-101%) translateZ(0px);"
          ></div>
        </div>
      </div>
    </div>
  </div>
`;

export function aboutPage(ctx) {
  ctx.render(aboutTemplate());

  const typed = new Typed(".paragraphAbout", {
    strings: [
      "Hey,my name is Ridvan Saraliev.I enjoy creating things that live on the internet.I'm a UX/UI designer and front-end web developer from Bulgaria.I'm also passionate about pop music.I'm always curious to learn more when it comes to new technologies.",
    ],
    smartBackspace: false,
    typeSpeed: 30,
    loop: false,
    loopCount: Infinity,
    showCursor: false,
  });

  document.querySelector(".link a").style.color = "currentColor";
}
