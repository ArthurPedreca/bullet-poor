const inimigo = document.querySelectorAll('.cabeca', '.corpo')
const boneco = document.querySelector('.inimigo')

inimigo.forEach(function(elemento){
    elemento.addEventListener('click', function(){
        boneco.style.display = "none"
    })
})