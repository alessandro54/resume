import { LitElement, html } from 'lit'

import install from '@twind/with-web-components'
import config from '../../twind.config'
import data from '../lib/experienceData'

const withTwind = install(config)

class Experiences extends withTwind(LitElement) {
  render () {
    return html`
        <section>
            ${data.map((experience) => {
                return html`
                    <experience-section
                            companyName="${experience.companyName}"
                            roleName="${experience.roleName}"
                            location="${experience.location}"
                            modality="${experience.modality}"
                            description="${experience.description}"
                            interval="${experience.interval}"
                            achievements="${JSON.stringify(experience.achievements)}"
                    ></experience-section>`
            })}
        </section>
    `
  }
}

customElements.define('experiences-section', Experiences)
