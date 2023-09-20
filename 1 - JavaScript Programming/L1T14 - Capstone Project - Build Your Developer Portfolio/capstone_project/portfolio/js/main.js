// Learned how to effect Html file via JS from
// Pjj et al. (1960) How to import javascript variable from .JS file to HTML document, Stack Overflow.
// Available at: https://stackoverflow.com/questions/23614504/how-to-import-javascript-variable-from-js-file-to-html-document (Accessed: 20 September 2023).

// getFullYear() learned from MDN Web Docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
const currentYear = new Date(Date.now());
document.getElementById("currentYear").innerText = currentYear.getFullYear();
