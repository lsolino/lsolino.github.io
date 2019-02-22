function palindrome(palavra) {     
  for(var i = 0; i < palavra.length / 2; i++){
    if (palavra[i] != palavra[palavra.length - i - 1]) {
      return false;
    } else {
      return true;
    }
  }  
}

var palavra = prompt('Digite algo: ');
if (palindrome(palavra) === true){
  alert("É palindrome");
} else {
  alert("Não é palindrome");
}
