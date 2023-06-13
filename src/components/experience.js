import { LitElement, html } from "lit";

import install from "@twind/with-web-components";
import config from "../twind.config";

const withTwind = install(config);

export default class Experience extends withTwind(LitElement) {
  static properties = {
    test: { type: String },
    companyName: { type: String },
    roleName: { type: String },
    location: { type: String },
    modality: { type: String },
    description: { type: String },
    interval: { type: String },
    achievements: { type: Array },
  };

  constructor() {
    super();
    this.achievements = [];
  }

  render() {
    return html`
      <section class="my-1.5">
        <div class="flex justify-between items-center pl-2">
          <div class="mb-2">
            <div class="flex items-center leading-none pb-0.5">
              <h2 class="font-bold pr-2 text-lg leading-none border-black border-r-2">
                ${this.companyName}
              </h2>
              <span class="pl-2 text-base underline">${this.roleName}</span>
            </div>
            <p class="text-xs italic font-semibold leading-none">
              ${this.location} (${this.modality})
            </p>
            <p class="leading-none text-sm italic font-light">
              ${this.description}
            </p>
          </div>
          <div class="font-bold text-sm">${this.interval}</div>
        </div>
        <div>
          <ul class="list-disc text-sm leading-4 pl-8 text-justify text-base">
            ${this.achievements.map(
              (achievement) => html` <li>${achievement}</li> `
            )}
          </ul>
        </div>
      </section>
    `;
  }
}
