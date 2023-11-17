let isValidPassphrase = (passphrase) => {
  const words = passphrase.split(" ");

  // Check the number of words.
  let minimumFourWords = true;
  if (words.length < 4) {
    minimumFourWords = false;
  }

  let minimumTwoCharsEach = words.every((word) => word.length >= 2);

  // All checks have passed, so return true.
  return minimumTwoCharsEach && minimumFourWords;
};

// Don't alter the `module.exports` line below - if you want to test your code, copy and
// paste the function, starting from `let isValidPassphrase = ...` to the final closing
// brace `}` into the browser's console, and call the function with different values.
//
// For example: `isValidPassphrase("this should be enough")`
// console.log(isValidPassphrase("this should enough"));
// IMPORTANT: However, please make sure that you include this line (unchanged) in the JS
// file that you upload to Pupilfirst LMS. It lets our automated tests "pick up" your
// function and use it.
console.log(isValidPassphrase("Av Man With pure heart"));
module.exports = isValidPassphrase;
