import { LitElement, html } from "lit";

import install from "@twind/with-web-components";
import config from "../twind.config";

const withTwind = install(config);

export default class Education extends withTwind(LitElement) {
  constructor() {
    super();
    this.achievements = [];
  }

  render() {
    return html`
      <section class="text-sm pl-3 h-[21mm]">
        <div class="mb-2">
          <span>
            <div class="flex justify-between">
              <h4>
                <strong>Universidad Peruana de Ciencias Aplicadas (UPC)</strong> | Software
                Engineering
              </h4>
              <strong>Aug'15 - Present</strong>
            </div>
          </span>
        </div>
        <div>
          <span>
            <div class="flex justify-between">
              <h4>
                <strong>Codeable</strong>
                - Cohort 2 | <a href="codeabe.la" target="_blank">codeable.la</a>
              </h4>
              <strong>Mar'20 - Sep'20</strong>
            </div>
            <p class="leading-none italic font-normal">Intensive 6-month full-time coding Bootcamp. The program focuses on strengthening the technical skills as well as Soft Skills like leadership, assertive communication, teamwork, empathy among others.</p>
            <br/>
          </span>
        </div>
      </section>
    `;
  }
}
