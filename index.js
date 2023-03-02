import { response, isResolvingPhpFile, buildPath } from './utils'

export default async lang => {
    const resolved = []

    const langs = import.meta.glob('/lang/*.json')

    const path = buildPath(lang)

    if (lang && ! resolved[path]) {
        resolved[path] = await langs[path]()
    }

    return response(lang, async lang => {
        if (! isResolvingPhpFile(lang)) {
            return
        }

        const path = buildPath(lang)

        return resolved[path] || await langs[path]()
    })
}
