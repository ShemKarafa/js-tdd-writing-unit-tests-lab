export function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error("Input must be a string");
    }
  
    if (word.length > 0 && !/^[A-Za-z]+$/.test(word)) {
      throw new Error("Input must contain only alphabetic characters");
    }

    if (word.length === 0) {
      return false;
    }
  
    const lowercaseWord = word.toLowerCase();
    return lowercaseWord === lowercaseWord.split('').reverse().join('');
}