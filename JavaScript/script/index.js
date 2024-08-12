console.log('SCRIPT LOADED...')

// // index.js
// setTimeout(() => {
//     const newParagraph = document.createElement('p');
//     newParagraph.textContent = 'This content was added by the deferred script after a delay.';
//     document.body.appendChild(newParagraph);
//   }, 20000); // 3000 milliseconds = 3 seconds


// Simulate script execution delay
setTimeout(() => {
    document.write('<h1>Script Loaded</h1>');
    document.write('<p>This content was added by the script before HTML content was fully loaded.</p>');
  }, 10000); // 3000 milliseconds = 3 seconds
  