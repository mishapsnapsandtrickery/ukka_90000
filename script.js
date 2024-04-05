const bars = document.querySelector(".menu_button");
const minimenu = document.querySelector(".menubars");

function onClick() {
  minimenu.classList.toggle("hidden");
}

bars.addEventListener("click", onClick);


function addimg() {
  for (let i = 2; i < 80; i++) { 
    let img = document.createElement("img");
    img.src = `8c0e1b17-4f9f-411e-b7ab-185c3720bff6.pdf-${i}.png`
    document.querySelector(".img_con").appendChild(img);
  }
}