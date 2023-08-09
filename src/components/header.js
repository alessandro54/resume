import { LitElement, html } from "lit";

import install from "@twind/with-web-components";
import config from "../twind.config";

const withTwind = install(config);

export default class Header extends withTwind(LitElement) {
  constructor() {
    super();
  }

  render() {
    return html`
      <header class="flex flex-col w-full">
        <address class="flex flex-col justify-center items-center not-italic">
          <h1 class="font-semibold text-xl">Alessandro Paris Chumpitaz Paredes</h1>
          <div>
            <a class="text-xs text-sky-600" href="mailto:alessandro.chumpitazp@gmail.com" target="_blank">
              alessandro.chumpitazp@gmail.com
            </a>
            |
            <span class="text-xs"> +51 977 858 998</span>
            |
            <span class="text-xs font-semibold">Lima - Peru</span>
          </div>
        </address>
        <p class="leading-none text-[12.5px] p-1 text-justify">
          Full Stack Engineer specialized in Ruby, backed by
          three years of experience in the technology sector. Augmented by a
          proficient background in data science, with a focus on employing
          data-driven methodologies to deliver optimized solutions that streamline
          the development process by an impressive reduction of 35%,
          while upholding exceptional code quality and scalability standards.
        </p>
      </header>
    `;
  }
}
