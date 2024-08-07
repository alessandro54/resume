import { LitElement, html } from 'lit'

import install from '@twind/with-web-components'
import config from '../../twind.config'
import { msg, updateWhenLocaleChanges } from '@lit/localize'

const withTwind = install(config)

export default class Additional extends withTwind(LitElement) {
  constructor () {
    super()
    this.achievements = []
    updateWhenLocaleChanges(this)
  }

  render () {
    return html`
      <separator-section title=${msg('Additional Projects')}></separator-section>
      <section class="my-1.5">
      <div class="flex justify-between items-center pl-2 h-[10mm]">
          <div class="mb-2">
            <div class="flex items-center leading-none pb-0.5">
              <h2
                class="font-bold pr-2 text-lg leading-none border-black border-r-2"
              >
                Autodeal
              </h2>
              <span class="pl-2 text-base underline">${msg('Software Consultant')}</span>
              <small class="pl-2 text-xs italic font-semibold leading-none">
                ${msg('Lima, Peru (Remote - Freelance)')}
              </small>
            </div>
            <p class="leading-none text-xs italic font-light">
              ${msg('SaaS enabled marketplace of furnished & flexible-lease spaces for Wellness practice.')}
            </p>
          </div>
          <div class="font-bold text-sm">${msg('Oct 2023 - Apr 2024')}</div>
        </div>
        <div>
          <p class="text-xs pl-4">
          ${msg('Transformed the concept and ideas to a robust application, applying best architecture practices, building the application from scratch')}
          </p>
        </div>
        <div class="flex justify-between items-center pl-2 h-[10mm]">
          <div class="mb-2">
            <div class="flex items-center leading-none pb-0.5">
              <h2
                class="font-bold pr-2 text-lg leading-none border-black border-r-2"
              >
                Bree.mx
              </h2>
              <span class="pl-2 text-base underline">${msg('Software Consultant')}</span>
              <small class="pl-2 text-xs italic font-semibold leading-none">
                ${msg('Mexico City, Mexico (Remote - Freelance)')}
              </small>
            </div>
            <p class="leading-none text-xs italic font-light">
              ${msg('SaaS enabled marketplace of furnished & flexible-lease spaces for Wellness practice.')}
            </p>
          </div>
          <div class="font-bold text-sm">${msg('Nov 2022 - Aug 2023')}</div>
        </div>
        <div>
          <p class="text-xs pl-4">
          ${msg('Led the initiative to revamp the "Professional Profile", providing users with advanced autonomy in managing shared service information; directly contributing to a remarkable 45% surge in overall client satisfaction.')}
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
              <span class="pl-2 text-base underline">${msg('Ruby Developer')}</span>
              <small class="pl-2 text-xs italic font-semibold leading-none">
                ${msg('Lima, Peru (Remote - Freelance)')}
              </small>
            </div>
            <p class="leading-none text-xs italic font-light">
            ${msg('Metasearch engine for buying and selling real estate in Peru, Mexico, Ecuador, and Colombia.')}
            </p>
          </div>
          <div class="font-bold text-sm">${msg('Oct 2021 - Jan 2022')}</div>
        </div>
        <div>
          <p class="text-xs pl-4">
          ${msg('Developed and implemented a robust JSON API, exposing 10+ services to customers, resulting in a 40% reduction in response time and enabling seamless integration with third-party applications.')}
          </p>
        </div>
      </section>
    `
  }
}

customElements.define('additional-section', Additional)
