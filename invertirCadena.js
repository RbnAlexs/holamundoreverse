const inputText = () => {
    let cadena = (document.forms[0].cadena.value);
    alert (invertirFrase(cadena));
} 

const invertirFrase = (cadena) => (cadena.includes( '(') ) ? invertirFrase( invertirParentesis(cadena) ) : cadena;

function invertirParentesis(cadena){
    alert (cadena);
    let expRegular = /\(([^()]*)\)/i;
    let subCadena = expRegular.exec(cadena)[1];
    subCadena = subCadena.split('').reverse().join('');
    return cadena.replace(expRegular, subCadena)
}

document.getElementById('cadena').value = '(Hola (Mundo))';