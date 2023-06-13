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
        <address class="flex flex-col justify-center items-center">
          <h1>Alessandro Paris Chumpitaz Paredes</h1>
          <div>
            <a href="mailto:alessandrochumpitazp@gmail.com">
              alessandrochumpitazp@gmail.com
            </a>
            |
            <span> +51 977 858 998</span>
          </div>
          <span>Lima - Peru</span>
        </address>
        <p>
          Full Stack Software engineer specialized in Ruby with proven 3 years
          of experience in the industry, also with a solid background in data
          science as supplement mainly focused on decision making and to build
          successful solutions covering the application needs ensuring the high
          code quality and scalability that overcomes any obstacle.
        </p>
      </header>
    `;
  }
}
