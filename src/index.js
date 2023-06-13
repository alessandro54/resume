import { install } from '@twind/core';
import config from './twind.config';
import Header from './components/header'
import Experience from './components/experience'
import Experiences from './components/experiences'
import Stack from './components/stack'

install(config)

customElements.define('header-section', Header)
customElements.define('experience-section', Experience)
customElements.define('experiences-section', Experiences)
customElements.define('tech-stack-section', Stack)
