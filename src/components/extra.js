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
            B2 English Proficiency
          </li>
        </ul>
      </section>
    `;
  }
}
