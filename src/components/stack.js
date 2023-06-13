import { LitElement, html } from "lit";

import install from "@twind/with-web-components";
import config from "../twind.config";

const withTwind = install(config);

export default class Stack extends withTwind(LitElement) {
  constructor() {
    super();
    this.languages = ["Ruby", "Python", "C++/C#", "Typescript"];
    this.extraTools = ["Node", "Vercel", "Linux", "Sanity", "Docker/Compose"];
  }
  render() {
    return html`
      <section class="grid grid(cols-2 rows-2) text-xs h-[35mm]">
        <!-- Server side -->
        <div class="flex flex-col items-center border-r-2 border-gray-200">
          <h2 class="font-bold"> Server Side </h1>
          <div class="w-full flex justify-between pl-10">
            <div>
              <ul class="list-disc">
                <li>Ruby on Rails</li>
                <li>FastAPI</li>
                <li>Express</li>
              </ul>
            </div>
            <div>
              <ul class="list-disc pr-8">
                <li>PostgresSQL</li>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Client side -->
        <div class="flex flex-col items-center">
          <h2 class="font-bold"> Client Side </h1>
          <div class="w-full flex justify-between">
            <div class="pl-10">
              <ul class="list-disc ">
                <li>Next</li>
                <li>Svelte</li>
                <li>Nuxt</li>
              </ul>
            </div>
            <div class="pr-5">
              <ul class="list-disc">
                <li>Tailwind</li>
                <li>Styled Components/ Twind</li>
                <li>Jquery</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Programming Languages -->
        <div class="flex flex-col items-center border-r-2 border-gray-200">
          <div class="w-11/12 h-0.5 bg-gray-200 my-0.5"></div>
          <h2 class="font-bold"> Programming Languages</h1>
          <ul class="w-full list-disc flex flex-wrap pl-10">
            ${this.languages.map((l) => html`<li class="w-1/2">${l}</li>`)}
          </ul>
        </div>
        <!-- Extra -->
        <div class="flex flex-col items-center">
        <div class="w-11/12 h-0.5 bg-gray-200 my-0.5"></div>
          <h2 class="font-bold"> Extra tools </h1>
          <ul class="w-full list-disc flex flex-wrap pl-10">
            ${this.extraTools.map((t) => html`<li class="w-1/3">${t}</li>`)}
          </ul>
        </div>
      </section>
    `;
  }
}
