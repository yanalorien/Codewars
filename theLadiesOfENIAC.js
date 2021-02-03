// Write a function which reveals "The ladies of ENIAC" names, so that you too can add them to your own hall of tech fame!
//     To keep: only alpha characters, space characters and exclamation marks.
//     To remove: numbers and these characters: %$&/£?@
// Result should be all in uppercase.

function radLadies(name){
    return name.replace(/[^a-z !]/gi, '').toUpperCase();
}