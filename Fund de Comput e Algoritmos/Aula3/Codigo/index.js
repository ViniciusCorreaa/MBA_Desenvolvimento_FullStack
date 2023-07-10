console.log('Hello World');
function paridade(limiteSuperior) {
    for (var i=0; i <= limiteSuperior; i++) {
        if (i % 2 == 1)
            console.log(i + ' Impar');
        else 
            console.log(i + ' Par');
    }
}

paridade(10);


