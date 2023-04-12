var corpo = document.querySelector('.corpo');
var cabeca = document.querySelector('.cabeca');
var boneco = document.querySelector('.boneco');

cabeca.addEventListener('click', function () {
  const dano200 = document.createElement('span');
  dano200.classList.add('dano200');
  dano200.innerText = '200';
  boneco.appendChild(dano200);

  cabeca.style.display = "none";
  corpo.style.display = "none";
  
});

corpo.addEventListener('click', function () {
    const dano50 =  document.createElement('span');
    dano50.classList.add('dano50');
    dano50.innerHTML = "50"
    boneco.appendChild(dano50);


    cabeca.style.display = "none"
    corpo.style.display = "none"
})