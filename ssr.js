export default lang => response(lang, lang => {
    if (! isResolvingPhpFile(lang)) {
        return
    }

     const langs = import.meta.globEager('/lang/*.json')

     return langs[`/lang/${lang}.json`].default
})
