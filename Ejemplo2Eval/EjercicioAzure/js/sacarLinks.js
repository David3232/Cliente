/*
Extrae todos enlaces de la web

let link = document.getElementsByTagName('a');

for (x of link) {
  console.log(x.hostname);
}
*/

let stepImg = document.querySelectorAll('.step img, a');
let stepIconImg = document.querySelectorAll('.step-icon ~ img');
let hrefDefined = document.querySelectorAll("a[href = 'https://go.microsoft.com/fwlink/?linkid=862126']");

console.log('1');
console.log(stepImg);
console.log('2');
console.log(stepIconImg);
console.log('3');
console.log(hrefDefined);
