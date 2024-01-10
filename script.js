let titulo = document.querySelector("#titulo")
console.log(titulo)

let capUl = document.querySelector("ul")
console.log(capUl)

let capA = document.querySelector("a")
console.log(capA)

let capOl = document.querySelector("#lista-ordenada")
console.log(capOl)

titulo.innerText = "Proz Educação"

capA.innerText = "Página da Proz Ecucação"

capUl.innerHTML = `
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
`
capOl.innerHTML = `
<li><a href="https://www.linkedin.com" target="_blank">Linkedin</a></li>
<li><a href="https:/www.google.com" target="_blank">Google</a></li>
<li><a href="https:/www.facebook.com" target="_blank">Facebook</a></li>
`
