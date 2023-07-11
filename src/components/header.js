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
            <a class="text-xs text-sky-600" href="mailto:alessandrochumpitazp@gmail.com" target="_blank">
              alessandrochumpitazp@gmail.com
            </a>
            |
            <span class="text-xs"> +51 977 858 998</span>
          </div>
          <span class="text-xs font-semibold">Lima - Peru</span>
        </address>
        <p class="leading-none text-[12.5px] p-1 text-justify">
          Full Stack Software Engineer specialized in Ruby with a successful track record of
          3 years in the tech industry. Complemented by a background with data-science, focused on making
          data-drive decisions which makes robust solutions that effectively address application requirements.
          Known for ensuring high code quality and scalability.
        </p>
      </header>
    `;
  }
}
