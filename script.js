function submeterForm() { 

  var nome = document.getElementById("name");
  
  console.log(nome);

  if (nome.value != "") {
    alert('Sr ' + nome.value + ', seu cadastro foi encaminhado com sucesso');

  }
}
