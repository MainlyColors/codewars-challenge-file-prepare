'use strict';
// only 1 input
const inputEl = document.querySelector('input');
const outputEl = document.querySelector('#output');

// Convert Codewar Title to JavaScript File name
function convertTitleToFileName(str) {
  const regex = new RegExp(/\?/, 'g');
  const newStr = str.replace(regex, '');

  return (
    newStr
      .trim()
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join('') + '.js'
  );
}

// prevent Form from submitting on enter key press
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
});

// grab text after input change event and put conversion in output element
let text;

inputEl.addEventListener('change', (e) => {
  text = convertTitleToFileName(e.target.value);
  outputEl.textContent = text;
});

// console.log(navigator.clipboard.readText());

// paste button
document.querySelector('#paste').addEventListener('click', function (e) {
  navigator.clipboard.readText().then((text) => {
    const copyBoardText = text;
    inputEl.value = copyBoardText;
    outputEl.textContent = convertTitleToFileName(copyBoardText);
  });
});

// copy button
document.querySelector('#copy').addEventListener('click', function (e) {
  navigator.clipboard.writeText(text);
});

//all in one button
document.querySelector('#allInOne').addEventListener('click', function (e) {
  // get text copied to the clipboard
  navigator.clipboard.readText().then((text) => {
    // place text in input to show user
    inputEl.value = text;

    // convert text to a js file name
    let copyBoardText = convertTitleToFileName(text);

    //place completed text in output to show user
    outputEl.textContent = copyBoardText;
    navigator.clipboard.writeText(copyBoardText);
  });
});
