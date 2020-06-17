import Livro from './modelo/livro';

const livro = new Livro('Livro 1', 109.80, 0.10)
console.log(livro.precoComDesconto());