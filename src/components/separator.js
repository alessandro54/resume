import { LitElement, html } from "lit";

import install from "@twind/with-web-components";
import config from "../twind.config";

const withTwind = install(config);

export default class Separator extends withTwind(LitElement) {
  static properties = {
    title: { type: String }
  }
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="bg-sky-100 font-bold my-1 px-1 uppercase">
        ${this.title}
      </div>
    `;
  }
}
