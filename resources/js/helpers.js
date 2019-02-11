import es from './lang/es';
import en from './lang/en';

export function translate(locale, string, type) {
    const langs = {
        es,
        en,
    };

    type = type || 'general';
    return langs[locale] == undefined ? langs['es'][type][string] : langs[locale][type][string];
}

export function title(title) {
    document.title = title + ' - Pig Travel'
}