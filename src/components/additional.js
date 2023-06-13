import { LitElement, html } from "lit";

import install from "@twind/with-web-components";
import config from "../twind.config";

const withTwind = install(config);

export default class Additional extends withTwind(LitElement) {
  constructor() {
    super();
    this.achievements = [];
  }

  render() {
    return html`

    `;
  }
}
