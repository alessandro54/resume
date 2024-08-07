import { LitElement, html } from 'lit'

import install from '@twind/with-web-components'
import config from '../../twind.config'
import { msg, updateWhenLocaleChanges } from '@lit/localize'

const withTwind = install(config)

class Education extends withTwind(LitElement) {
  constructor () {
    super()
    this.achievements = []
    updateWhenLocaleChanges(this)
  }

  render () {
    return html`
      <separator-section title=${msg('Education')}></separator-section>
      <section class="text-sm pl-3 h-[21mm]">
        <div class="mb-2">
          <span>
            <div class="flex justify-between">
              <h4>
                ${msg(html`<strong>Universidad Peruana de Ciencias Aplicadas (UPC)</strong> | Software
                Engineering`)}
              </h4>
              <strong>${msg('Aug 2015')}</strong>
            </div>
          </span>
        </div>
        <div>
          <span>
            <div class="flex justify-between">
              <h4>
                <a href="codeabe.la" target="_blank">
                  <strong>Codeable</strong> | Cohort 2
                </a>
              </h4>
              <strong>${msg('Mar 2020 - Sep 2020')}</strong>
            </div>
            <p class="leading-none italic font-normal">
              ${msg('Intensive 6-month full-time coding Bootcamp. The program focuses on strengthening the technical skills as well as Soft Skills like leadership, assertive communication, teamwork, empathy among others.')}
            </p>
            <br/>
          </span>
        </div>
      </section>
    `
  }
}

customElements.define('education-section', Education)
