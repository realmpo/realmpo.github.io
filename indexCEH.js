en-content = `
<button class='ceh-translate-button' onclick='translateAll()'>Cetlennen hipu shid̃a boco? Kad̃e shid̃a benci.</button>
<h1>Hi! This is my site!</h1>
`
ceh-content = `
<button class='ceh-translate-button' onclick='translateAll()'>Do you speak English? Click here.</button>
<h1>Had̃a!</h1>
`
clang = 'en'
function translateAll() {
  if (clang == 'en') {
    content = document.getElementById('code-to-translate')
    content.innerHTML = ceh-content
    clang = 'ceh'
  } else if (clang == 'ceh') {
    content = document.getElementById('code-to-translate')
    content.innerHTML = en-content
    clang = 'en'
  }
}
