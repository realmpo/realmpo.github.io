// Use underscores or camelCase instead of hyphens
let enContent = `
<button class='ceh-translate-button' onclick='translateAll()'>Cetlennen hipu shid̃a boco? Kad̃e shid̃a benci.</button>
<h1>Hi! This is my site!</h1>
<section class='link-clicking-section'>
  <h3>Click these links!</h3>
  <a href='https://scratch.mit.edu/users/Meower-Pro'><button>Scratch profile</button></a>
  <a href='https://conworkshop.com/view_language.php?l=CEHP'><button>Latin Catlanian page</button></a>
</section>
`;

let cehContent = `
<button class='ceh-translate-button' onclick='translateAll()'>Do you speak English? Click here.</button>
<h1>Had̃a!</h1>
<section class='link-clicking-section'>
  <h3>D̃obis shid̃a benci!</h3>
  <a href='https://scratch.mit.edu/users/Meower-Pro'><button>Lona o Scratch</button></a>
  <a href='https://conworkshop.com/view_language.php?l=CEHP'><button>Lona o cetlennen hipu</button></a>
</section>
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
