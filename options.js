// When the options page is loaded, fetch and display the saved options
document.addEventListener('DOMContentLoaded', function () {
  var langCode = browser.i18n.getMessage("langCode");
  document.documentElement.lang = langCode;
    document.querySelector('title').innerText = browser.i18n.getMessage("labelName");
    document.querySelector('h1').innerText = browser.i18n.getMessage("settingLabel");
    document.querySelector('label[for="length"]').innerText = browser.i18n.getMessage("passwordLength");
    document.querySelector('label[for="numbers"]').innerText = browser.i18n.getMessage("includeNumbers");
    document.querySelector('label[for="specialChars"]').innerText = browser.i18n.getMessage("includeCharacters");
    document.querySelector('label[for="alphabet"]').innerText = browser.i18n.getMessage("includeAlphabet");
    document.querySelector('#saveButton').innerText = browser.i18n.getMessage("saveButton");
  browser.storage.sync.get({
      length: 12, // Default length
      numbers: true, // Default setting
      specialChars: true, // Default setting
      alphabet: true // Default setting
  }, function(items) {
      document.getElementById('length').value = items.length;
      document.getElementById('numbers').checked = items.numbers;
      document.getElementById('specialChars').checked = items.specialChars;
      document.getElementById('alphabet').checked = items.alphabet;
  });
});

// Save the options when the form is submitted
document.getElementById('optionsForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent submission

  var length = document.getElementById('length').value;
  var numbers = document.getElementById('numbers').checked;
  var specialChars = document.getElementById('specialChars').checked;
  var alphabet = document.getElementById('alphabet').checked;

  browser.storage.sync.set({
      length,
      numbers,
      specialChars,
      alphabet
  }, function() {
      // Update status to let user know options were saved, if needed
      console.log('Settings were saved.');
  });
});
