import $ from 'jquery';
import Livro from './modelo/livro';

const livro = new Livro('Livro 1', 109.80, 0.10)
// console.log(livro.precoComDesconto());

$('body').append(`<h1>${livro.nome}</h1>`);
$('body').append(`<h2>Preço R$ ${livro.precoComDesconto()}</h2>`)