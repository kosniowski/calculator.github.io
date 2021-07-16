const button = document.getElementsByName('num');
const op = document.getElementsByName('op');
const igual = document.getElementsByName('igual')[0];
const borrar = document.getElementsByName('borrar')[0];

var text = document.getElementById('operations');

var operacion = '';
var numero1= '';
var numero2= '';


button.forEach((boton) => {
    boton.addEventListener('click', () => {
        text.value += boton.innerHTML;
    })
})

op.forEach((op) => {
    op.addEventListener('click', () => {
        if (text.value != '') {
            text.value += op.innerHTML;
            operacion = op.innerHTML;
        }
    })
})

borrar.addEventListener('click', () => {
    text.value = '';
});

igual.addEventListener('click', () => {
    //console.log(text.value);
    var valor = text.value;
    switch (operacion) {
        case "+":
            calcular('+'); 
            resultado = parseInt(numero1,10) + parseInt(numero2,10);
            text.value =  resultado.toString();
            limpiar();
            break;
        case "-":
            calcular('-'); 
            resultado = parseInt(numero1,10) - parseInt(numero2,10);
            text.value =  resultado.toString();
            limpiar();
            break;
        case "x":
            calcular('x'); 
            resultado = parseInt(numero1,10) * parseInt(numero2,10);
            text.value =  resultado.toString();
            limpiar();
            break;
        case "%":
            calcular('%'); 
            resultado = parseInt(numero1,10) / parseInt(numero2,10);
            text.value =  resultado.toString();
            limpiar();
            break;
        default: break;
    }
});


const limpiar = ()=>{
            numero1=''
            numero2=''
}

const calcular = (op)=>{
        pos = text.value.indexOf(op);
        fin = text.value.length;
        //console.log(fin);

        for(i=0; i<pos; i++){
                //console.log(text.value[i]);
                numero1 = numero1+ text.value[i];
        }

        pos2 = pos + 1;

        for(pos2 ; pos2<fin; pos2++){
              //console.log(text.value[pos2]);
              numero2 = numero2 + text.value[pos2];
       }
}
