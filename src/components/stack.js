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
    this.extraTools = ['Notion', 'Vercel', 'Linux', 'Sanity CMS', 'Docker-Compose']
    updateWhenLocaleChanges(this)
  }

  render () {
    return html`
      <separator-section title=${msg('Tech Stack')}></separator-section>
      <div class='px-2'>
        <div class='flex'>
          <h2 class='text-md font-bold mr-2'>Server Side - </h2>
          ${this.serverSide.map((item) => html`<span class='mr-3'>${item}</span>`)}
        </div>
        <div class='flex'>
          <h2 class='text-md font-bold mr-2'>Client Side - </h2>
          ${this.clientSide.map((item) => html`<span class='mr-3'>${item}</span>`)}
        </div>
        <div class='flex'>
          <h2 class='text-md font-bold mr-2'>Development Tools - </h2>
          ${this.extraTools.map((item) => html`<span class='mr-3'>${item}</span>`)}
        </div>
      </div>
    `
  }
}

customElements.define('tech-stack-section', Stack)
