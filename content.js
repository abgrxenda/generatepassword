// Function to generate the password
function generatePassword(length, useNumbers, useSpecialChars, useAlphabet) {
    let characters = "";
    if (useNumbers) characters += "0123456789";
    if (useSpecialChars) characters += "!@#$-=+";
    if (useAlphabet) characters += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }
  
  // Fetch options and generate password
  function fetchOptionsAndGeneratePassword() {
    browser.storage.sync.get({
      length: 12, // Default length
      numbers: true, // Include numbers by default
      specialChars: true, // Include special characters by default
      alphabet: true // Include alphabet by default
    }, (options) => {
      const password = generatePassword(options.length, options.numbers, options.specialChars, options.alphabet);
      if (document.activeElement && document.activeElement.tagName === 'INPUT') {
        document.activeElement.value = password;
        // Copy the password to the clipboard
      copyTextToClipboard(password);
      }
    });
  }
  
  function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      console.log(browser.i18n.getMessage("copySuccess"));
    }).catch(err => {
      console.error(browser.i18n.getMessage("copyFail"), " - ", err);
    });
  }

  // Call the function to fetch options and generate password
  fetchOptionsAndGeneratePassword();
  
  // Example usage
//   const password = generatePassword(12, true, true, true); // Adjust based on user options
//   console.log(password);
//   document.activeElement.value = password;
  