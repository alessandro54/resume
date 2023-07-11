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
          <div>
            <div class="flex items-center leading-none pb-0.5">
              <h2 class="font-bold pr-2 text-lg leading-none">
                ${this.companyName}
              </h2>
            </div>
            <span class="text-base leading-none">${this.roleName}</span>
          </div>
          <div class="flex flex-col items-end">
            <div class="font-bold text-sm">${this.interval}</div>
            <div class="text-sm">${this.location} (Remote)</div>
          </div>
        </div>
        <div>
          <ul class="list-disc text-sm leading-4 pl-6 text-justify text-base">
            ${this.achievements.map(
              (achievement) => html` <li>${achievement}</li> `
            )}
          </ul>
        </div>
      </section>
    `;
  }
}
