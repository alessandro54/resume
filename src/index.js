import { install } from '@twind/core';
import config from './twind.config';
import Header from './components/header'
import Experience from './components/experience'
import Experiences from './components/experiences'
import Stack from './components/stack'
import Education from './components/education'
import Extra from './components/extra';
import Separator from './components/separator';

install(config)

customElements.define('header-section', Header)
customElements.define('experience-section', Experience)
customElements.define('experiences-section', Experiences)
customElements.define('tech-stack-section', Stack)
customElements.define('extra-section', Extra)
customElements.define('education-section', Education)
customElements.define('separator-section', Separator)
