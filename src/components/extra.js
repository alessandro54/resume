import { LitElement, html } from "lit";

import install from "@twind/with-web-components";
import config from "../twind.config";

const withTwind = install(config);

export default class Extra extends withTwind(LitElement) {
  constructor() {
    super();
  }

  render() {
    return html`
      <section class="px-10">
        <ul class="list-disc leading-none text-sm">
          <li>
            Platzi |
            <a href="https://platzi.com/p/alessandro54/" target="_blank">
              alessandro54
            </a>
            -
            <a href="https://platzi.com/p/alessandro54/ruta/2-backend-ruby/diploma/detalle/" target="_blank">
            Desarrollo Web Backend con Ruby on Rails
            </a>
          </li>
          <li>
            Udemy |
            <a href="https://www.udemy.com/certificate/UC-38c82a41-10dd-4691-b8b3-e46f74e8daf3/" target="_blank">
              The Complete Web Developer in 2023: Zero to Mastery
            </a>
          </li>
          <li>
            B2 English Proficiency
          </li>
        </ul>
      </section>
    `;
  }
}
