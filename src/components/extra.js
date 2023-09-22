import { LitElement, html } from 'lit'

import install from '@twind/with-web-components'
import config from '../../twind.config'
import { msg } from '@lit/localize'

const withTwind = install(config)

class Extra extends withTwind(LitElement) {
  render () {
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
            ${msg('Ruby on Rails Backend Development')}
            </a>
          </li>
          <li>
            B2 English Proficiency
          </li>
        </ul>
      </section>
    `
  }
}

customElements.define('extra-section', Extra)
