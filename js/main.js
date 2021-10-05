let pokimons = document.querySelector('.pokemons');
let pokimon = document.querySelector('.pokemon');
var template = document.querySelector('template').content;
var fragmentt = document.createDocumentFragment();
for (var i=0; i < pokemons.length; i++) {
    var templateClone = template.cloneNode(true);
    templateClone.querySelector('.pokemon__img').src = pokemons[i].img;
    templateClone.querySelector('.pokemon__img').alt = pokemons[i].name;
    templateClone.querySelector('.pokemon__name').textContent = pokemons[i].name;
    templateClone.querySelector('.pokemon__order').textContent = pokemons[i].id;
    for (var q = 0; q < pokemons[i].weaknesses.length; q++) {
        var li = document.createElement('li')
        li.textContent = pokemons[i].weaknesses[q];
        templateClone.querySelector('.wiknesses').appendChild(li);
    }
    fragmentt.appendChild(templateClone);
}
pokimons.appendChild(fragmentt);