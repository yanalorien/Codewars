// Create a function that takes any sentence and redistributes the spaces (and adds additional spaces
// if needed) so that each word starts with a vowel. The letters should all be in the same order but
// every vowel in the sentence should be the start of a new word. The first word in the new sentencemay start
// without a vowel. It should return a string in all lowercase with no punctuation (only alphanumeric characters).

function vowelStart(str){
    let vowels = 'aeiou';
    return str.toLowerCase().replace(/[^a-z0-9]/g, '').split('')
        .map((el, i) => i === 0? el: vowels.includes(el) ? ' ' + el : el).join('');
}