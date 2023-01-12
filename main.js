function transformStringMaj () {
    let phrase = prompt('Entrez votre phrase');
    phrase = phrase.toLowerCase();
    phrase = capitalizeFirstLetter(phrase);

    return alert('Votre phrase transformée en: ' + phrase);
}

function capitalizeFirstLetter(phrase) {
    return phrase.charAt(0).toUpperCase() + phrase.slice(1).toLowerCase();
}

function minusculeFirstLetter(phrase) {
    return phrase.charAt(0).toLowerCase() + phrase.slice(1).toLowerCase();
}

function transformStringCamel () {
    let phrase = prompt('Entrez votre phrase');
    let phrase_arr = phrase.split(' ').toLowerCase();
    let phraseFinal = minusculeFirstLetter(phrase_arr[0]);
    for (let i = 1; i < phrase_arr.length; i++) {
        phraseFinal = phraseFinal.concat(capitalizeFirstLetter(phrase_arr[i]));
    }
    return alert(phraseFinal);
}