/**
 * 1.2 : Check Permutation
 * Given two strings, write a method to decide if one is a permutation of the other.
 */

/** Solution 1: Sort the strings. */
let sort = (str) => {
    return str.split('').sort().join('');
}
let checkPermutation = (a, b) => {
    if(a.length !== b.length) return false;

    // Now we know that they have the same characters, but in different orders.
    return sort(a) === sort(b);
}
console.log(checkPermutation('india', 'india'));

/** Solution 2: Check if the two strings have identical character counts. */
checkPermutation = (a, b) => {
    if(a.length !== b.length) return false;

    let charSet = new Array(128).fill(0);
    for(let i = 0; i < a.length; i++) {
        let val = a.charCodeAt(i);
        charSet[val]++;
    }

    for(let i = 0; i < b.length; i++) {
        let val = b.charCodeAt(i);
        charSet[val]--;

        if(charSet[val] < 0) return false;
    }
    return true;
}
console.log(checkPermutation('india', 'rajaa'));
