//TDD
//Test Driven Development

var novoMapa = new Map();
novoMapa.set('', 'vazio');

class HistoryMap{
    
}

//Para conseguir um identificador que não se repete e evitar Span
novoMapa.set('11/11/2011 - 23:30 - URL',{title: 'Titulo do site', url:'Url da pagina'});
novoMapa.set('11/11/2011 - 23:31 - URL',{});

var resultado = novoMapa.get('11/11/2011 - 23:30 - URL');
console.log(resultado);