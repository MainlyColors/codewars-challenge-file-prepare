'use strict';

function convertTitleToFileName(str) {
  return (
    str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join('') + '.js'
  );
}

// only 1 input
const inputEl = document.querySelector('input');
const outputEl = document.querySelector('#output');

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
});

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
  navigator.clipboard.readText().then((text) => {
    let copyBoardText = convertTitleToFileName(text);
    navigator.clipboard.writeText(copyBoardText);
  });
});
