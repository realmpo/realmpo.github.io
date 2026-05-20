// Use underscores or camelCase instead of hyphens
let enContent = `
<button class='ceh-translate-button' onclick='translateAll()'>Cetlennen hipu shid̃a boco? Kad̃e shid̃a benci.</button>
<h1>Hi! This is my site!</h1>
<section class='link-clicking-section'>
  <h3>Click these links!</h3>
  <a href='https://scratch.mit.edu/users/Meower-Pro'><button>Scratch profile</button></a>
  <a href='https://conworkshop.com/view_language.php?l=CEHP'><button>Latin Catlanian page</button></a>
</section>
<div style="background-color: black; color: white;">
  <h3>News</h3><br>
    <h5>Coming Soon: Accounts</h5><br>
    <p>Accounts in MPOW are coming soon! We are estimated to finish on May 25, 2026.</p><br>
    <p>Have fun with the accounts, and the Portal of Secrets coming soon!</p><br>
</div>
`;

let cehContent = `
<button class='ceh-translate-button' onclick='translateAll()'>Do you speak English? Click here.</button>
<h1>Had̃a!</h1>
<section class='link-clicking-section'>
  <h3>D̃obis shid̃a benci!</h3>
  <a href='https://scratch.mit.edu/users/Meower-Pro'><button>Lona o Scratch</button></a>
  <a href='https://conworkshop.com/view_language.php?l=CEHP'><button>Lona o cetlennen hipu</button></a>
</section>
<div style="background-color: black; color: white;">
  <h3>INIMA AD̃E!</h3><br>
    <h5>INIMA AD̃E!</h5><br>
    <p>INIMA AD̃E!</p><br>
    <p>INIMA AD̃E!</p><br>
</div>
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
