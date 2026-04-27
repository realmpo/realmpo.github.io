// Use underscores or camelCase instead of hyphens
let enContent = `
<button class='ceh-translate-button' onclick='translateAll()'>Cetlennen hipu shid̃a boco? Kad̃e shid̃a benci.</button>
<h1>Hi! This is my site!</h1>
`;

let cehContent = `
<button class='ceh-translate-button' onclick='translateAll()'>Do you speak English? Click here.</button>
<h1>Had̃a!</h1>
`;

let clang = 'en';

function translateAll() {
  const contentDiv = document.getElementById('code-to-translate');
  
  if (clang === 'en') {
    contentDiv.innerHTML = cehContent;
    clang = 'ceh';
  } else {
    contentDiv.innerHTML = enContent;
    clang = 'en';
  }
}
