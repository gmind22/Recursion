function isPalindrome(word) {
    // Stop condition: an empty word or a word containing a single character is a palindrome
    if (word.length <= 1) {
        return true;
    }

    // Compare the characters located at the ends of the word
    if (word[0] === word[word.length - 1]) {
        // Recursively test the rest of the word
        return isPalindrome(word.slice(1, -1));
    } else {
        // If difference, it's not a palindrome
        return false;
    }
}

// Examples
console.log(isPalindrome("gag"));    // true
console.log(isPalindrome("kayak"));  // true
console.log(isPalindrome("php"));    // true
console.log(isPalindrome("radar"));  // true