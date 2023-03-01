import { pickBy } from 'lodash'

const isResolvingPhpFile = lang => lang.includes('php_')

const response = (lang, resolve) => pickBy({ lang, resolve }, value => value !== undefined)

export default async lang => {
    const resolved = []

    const langs = import.meta.glob('/lang/*.json')

    if (lang) {
        resolved[`/lang/php_${lang}.json`] = await langs[`/lang/php_${lang}.json`]()
    }

    return response(lang, async lang => {
        if (! isResolvingPhpFile(lang)) {
            return
        }

        return resolved[`/lang/${lang}.json`] || await langs[`/lang/${lang}.json`]()
    })
}
