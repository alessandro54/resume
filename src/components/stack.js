import { LitElement, html } from 'lit'

import install from '@twind/with-web-components'
import config from '../../twind.config'

import { msg, updateWhenLocaleChanges } from '@lit/localize'

const withTwind = install(config)

class Stack extends withTwind(LitElement) {
  constructor () {
    super()
    this.languages = ['Ruby', 'Python', 'C++/C#', 'Typescript']
    this.serverSide = ['Ruby on Rails', 'FastAPI', 'PostgresSQL', 'MySQL']
    this.clientSide = ['Next.js', 'Svelte.kit', 'TailwindCSS', 'Jquery']
    this.extraTools = ['Node', 'Vercel', 'Linux', 'Sanity CMS', 'Docker-Compose']
    updateWhenLocaleChanges(this)
  }

  render () {
    return html`
      <section class="grid grid(cols-2 rows-2) text-xs h-[26mm]">
        <!-- Server side -->
        <div class="flex flex-col items-center border-r-2 border-gray-200">
          <h2 class="font-bold">${msg('Server Side')}</h1>
          <div class="w-full flex justify-between pl-10">
            <div class="w-full">
              <ul class="list-disc grid grid-cols-2 gap-x-20">
                ${this.serverSide.map((ss) => html`<li>${ss}</li>`)}
              </ul>
            </div>
          </div>
        </div>
        <!-- Client side -->
        <div class="flex flex-col items-center">
          <h2 class="font-bold">${msg('Client Side')}</h1>
          <div class="w-full flex justify-between">
            <div class="w-full pl-10">
              <ul class="list-disc grid grid-cols-2 gap-x-20">
                ${this.clientSide.map((cs) => html`<li>${cs}</li>`)}
              </ul>
            </div>
          </div>
        </div>
        <!-- Programming Languages -->
        <div class="flex flex-col items-center border-r-2 border-gray-200">
          <div class="w-11/12 h-0.5 bg-gray-200 my-0.5"></div>
          <h2 class="font-bold">${msg('Programming Languages')}</h1>
          <ul class="w-full list-disc grid grid-cols-2 gap-x-20 pl-10">
            ${this.languages.map((l) => html`<li class="w-1/2">${l}</li>`)}
          </ul>
        </div>
        <!-- Extra -->
        <div class="flex flex-col items-center">
        <div class="w-11/12 h-0.5 bg-gray-200 my-0.5"></div>
          <h2 class="font-bold">${msg('Extra tools')}</h1>
          <ul class="w-full list-disc flex flex-wrap pl-10">
            ${this.extraTools.map((t) => html`<li class="w-1/3">${t}</li>`)}
          </ul>
        </div>
      </section>
    `
  }
}

customElements.define('tech-stack-section', Stack)
