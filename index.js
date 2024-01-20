function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
    html.classList.add("dark")
  } else {
    html.classList.remove("dark")
    html.classList.add("light")
  }

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/fotoDePerfil.jpg")
  } else {
    img.setAttribute("src", "./assets/fotoperfilEscuro.jpeg")
  }
}
