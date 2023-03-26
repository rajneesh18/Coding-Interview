/**
 * 1.1 : Is Unique
 * Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data Structures.
 */

/**
 * Solution:1
 *      - Create an Array of boolean values, where the flag at index i indicates whether character i in the alphabet is contained in the string.
 *      - The 2nd time you see the character, you can immediately return false.
 *
 *      - You can also immediately return false, if the string length exceeds the no. of unique character in the alphabet.
 *
 *      TIME COMPLEXITY: O(n), where n is the length of string.
 *      SPACE COMPLEXITY: O(1)
 */

let isUnique = (str) => {
    if(str.length > 128) return false;
    let charSet = new Array(128).fill(false);

    for(let i = 0; i < str.length; i++) {
        let val = str.charCodeAt(i);
        if(charSet[val]) {
            return false;
        }
        charSet[val] = true;
    }
    return true;
}
console.log(isUnique('India great'));