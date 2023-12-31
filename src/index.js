import { install } from '@twind/core'
import config from '../twind.config.js'
import { setLocaleFromUrl } from './lib/localization'
import.meta.glob('./components/*.js', { eager: true })

install(config)

window.document.addEventListener('DOMContentLoaded', async () => {
  await setLocaleFromUrl()
})
