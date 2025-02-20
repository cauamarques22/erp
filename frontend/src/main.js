import "core-js/stable"
import "regenerator-runtime/runtime"

const btnCriaProduto = document.querySelector("#btn-create-product")
btnCriaProduto.addEventListener("click", (e)=>{
    window.location.href = "produtos/create/"
})
