import { LitElement, html } from "lit";

import install from "@twind/with-web-components";
import config from "../twind.config";

const withTwind = install(config);

export default class Stack extends withTwind(LitElement) {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="bg-sky-100 font-bold">Experience</div>
      <section>
        
      </section>
    `;
  }
}
