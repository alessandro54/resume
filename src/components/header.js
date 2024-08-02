import { LitElement, html } from 'lit'

import install from '@twind/with-web-components'
import config from '../../twind.config'
import { msg, updateWhenLocaleChanges } from '@lit/localize'

const withTwind = install(config)

class Header extends withTwind(LitElement) {
  constructor () {
    super()
    updateWhenLocaleChanges(this)
  }

  render () {
    return html`
      <header class="flex flex-col w-full">
        <address class="flex flex-col justify-center items-center not-italic">
          <h1 class="font-semibold text-xl">Alessandro Paris Chumpitaz Paredes</h1>
          <div>
            <a class="text-xs text-sky-600" href="mailto:alessandro.chumpitazp@gmail.com" target="_blank">
              alessandro.chumpitazp@gmail.com
            </a>
            |
            <span class="text-xs"> +51 977 858 998</span>
            |
            <span class="text-xs font-semibold">Lima - Peru</span>
          </div>
        </address>
        <p class="leading-none text-[12.5px] p-1 text-justify">
          ${msg(`
            Full Stack Engineer with Expertise in Web Development backed by 4+ years of experience in the
            technology sector, with extensive expertise in leveraging the most popular frameworks such as Next.js, Ruby on Rails, and
            FastAPI to deliver high-performing and scalable web applications. Guided by a strong commitment to best practices in UX
            and UI design, I excel at creating visually appealing and intuitive interfaces that provide an exceptional user experience.
          `)}
        </p>
      </header>
    `
  }
}

customElements.define('header-section', Header)
