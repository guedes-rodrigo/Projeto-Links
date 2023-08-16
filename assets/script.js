
function toogleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  const img = document.querySelector("#profile img")

  if (html.classList.contains('light')){
    img.setAttribute('src','./assets/avatar - light.jpg')}
    else{
    img.setAttribute('src','./assets/avatar.jpg')
    }
  }



//pegar tag img
// substituir a imagem}




