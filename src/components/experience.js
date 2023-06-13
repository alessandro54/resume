import { LitElement, html } from 'lit';

import install from '@twind/with-web-components'
import config from '../twind.config'

const withTwind = install(config)

export default class Experience extends withTwind(LitElement) {
  static properties = {
    test: { type: String },
    companyName: { type: String },
    roleName: { type: String },
    location: { type: String },
    modality: { type: String },
    description: { type: String },
    interval: { type: String },
    achievements: { type: Array }
  };

  constructor() {
    super();
    this.achievements = [];
  }

  render() {
    return html`
      <div class="flex justify-between items-center">
        <div>
          <div class="flex">
            <h2>${this.companyName}</h2>
            | <span>${this.roleName}</span>
          </div>
          <p>${this.location} (${this.modality})</p>
          <span>${this.description}</span>
        </div>
        <div>${this.interval}</div>
      </div>
      <div>
        <ul class="list-disc">
          ${
            this.achievements.map(
              (achievement) => html`
                <li>
                  ${achievement}
                </li>
              `
            )}
        </ul>
      </div>
    `;
  }
}
