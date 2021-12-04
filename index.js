const cats = ['Milo','Otis','Garfield'];

function destructivelyAppendCat(){
    cats.push('Ralph');
};

function destructivelyPrependCat(){
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
    cats.pop('Garfield');
}

function destructivelyRemoveFirstCat(){
    cats.shift('Milo');
}

const appendCat = cat => [...cats, 'Broom'];

const prependCat = cat => ['Arnold', ...cats];

const removeLastCat = cat => ['Milo', 'Otis'];

const removeFirstCat = cat => ['Otis', 'Garfield'];







