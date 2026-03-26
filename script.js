const botao = document.getElementById("menu-btn");
const menu = document.getElementById("navbar-lista")
botao.addEventListener("click", function () {
    menu.classList.toggle("hidden");
    if(menu.classList.contains("hidden")) {
        botao.textContent = "☰"
    } else{
        botao.textContent = "X"
    }
    
   
    
    
})

