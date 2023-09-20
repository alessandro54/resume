import { configureLocalization } from '@lit/localize'
import { allLocales, sourceLocale, targetLocales } from '../generated/locale-codes'

export const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: (locale) => import(`../generated/locales/${locale}.js`)
})

export const setLocaleFromUrl = async () => {
  const url = window.location.href
  const unsafeLocale = url.split('/').pop()
  const locale = allLocales.includes(unsafeLocale) ? unsafeLocale : 'en'
  await setLocale(locale)
}
