import { pickBy } from 'lodash'

export const response = (lang, resolve) => pickBy({ lang, resolve }, value => value !== undefined)

export const isResolvingPhpFile = lang => lang.includes('php_')

export const buildPath = lang => `/lang/php_${lang.replace('php_', '')}.json`
