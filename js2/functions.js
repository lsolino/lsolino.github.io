/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function fat(a) {
  var x = 1;
  var fatorial = 1;
  for (x=1;x<=a;x++){
    fatorial = fatorial*x;
  }
  return fatorial;
}

function parimpar(b) {
  if (b%2 == 0) {
    return 1;
  } else {
    return 0;
  }
}

function validaEmail(str) {
  var valida = new RegExp(/^\w*(\.\w*)?@[a-z].[a-z]+(\.[a-z]+)?$/);
  
  if (valida.test(str)) {
    return 1;
  } else {
    return 0;
  }
  
}

var a = prompt('Digite um numero: ');
alert(fat(a));

var b = prompt ('Digite um numero: ');
if (parimpar(b) == 1) {
  alert('Numero par');
} else {
  alert('Numero impar');
}

var email = prompt ('Digite um email: ');
if (validaEmail(email) == 1) {
  alert('Email válido');
} else {
  alert('Email inválido');
}
