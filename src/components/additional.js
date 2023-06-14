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
      <section class="my-1.5">
        <div class="flex justify-between items-center pl-2 h-[10mm]">
          <div class="mb-2">
            <div class="flex items-center leading-none pb-0.5">
              <h2
                class="font-bold pr-2 text-lg leading-none border-black border-r-2"
              >
                Bree.mx
              </h2>
              <span class="pl-2 text-base underline">Software Consultant</span>
              <small class="pl-2 text-xs italic font-semibold leading-none">
                Mexico City, Mexico (Remote - Freelance)
              </small>
            </div>
            <p class="leading-none text-xs italic font-light">
              SaaS enabled marketplace of furnished & flexible-lease spaces for
              Wellness practice.
            </p>
          </div>
          <div class="font-bold text-sm">Nov'22 - Present</div>
        </div>
        <div>
          <p class="text-xs pl-4">
            Introduced the new 'Professional Profile' module. Which gives a
            presentation card for the clients.
          </p>
        </div>
        <div class="flex justify-between items-center pl-2">
          <div class="mb-2">
            <div class="flex items-center leading-none pb-0.5">
              <h2
                class="font-bold pr-2 text-lg leading-none border-black border-r-2"
              >
                Gojom.pe
              </h2>
              <span class="pl-2 text-base underline">Software Consultant</span>
              <small class="pl-2 text-xs italic font-semibold leading-none">
                Lima, Peru (Remote - Freelance)
              </small>
            </div>
            <p class="leading-none text-sm italic font-light">
            Meta search engine for buying and selling real estate in Peru, Mexico, Ecuador, and Colombia.
            </p>
          </div>
          <div class="font-bold text-sm">Oct'21 - Jan'22</div>
        </div>
        <div>
          <p class="text-xs pl-4">
            Introduced an JSON API exposing services for customers
          </p>
        </div>
      </section>
    `;
  }
}
