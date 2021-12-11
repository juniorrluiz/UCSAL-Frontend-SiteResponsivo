function calcularCalorias() {
  

  
  var sexo_do_usuario;
  var sexo = document.getElementsByName('sexo_usuario');
  for (var i = 0; i < sexo.length; i++) {
   if (sexo[i].checked) {
    sexo_do_usuario = sexo[i].value;
    } else if (!sexo[0].checked && !sexo[1].checked) {
      window.alert("Atenção! Você não selecionou o sexo.")
      return;
      
    }
  }

  var idade = document.getElementById("corpo_form_idade").value;
  var idade2 = parseInt(idade)

  if (isNaN(idade2)) {
    window.alert("Atenção! Você não digitou uma idade.")
    return;
      
  }

  var altura = document.getElementById("corpo_form_altura").value;
  var altura2 = parseInt(altura)

  if (isNaN(altura2)) {
    window.alert("Atenção! Você não digitou uma altura.")
    return;
      
  }

  var peso = document.getElementById("corpo_form_peso").value;
  var peso2 = parseInt(peso)

  if (isNaN(peso2)) {
    window.alert("Atenção! Você não digitou um peso.")
    return;
      
  }
  

  var atividade_diaria;
  var atividade = document.getElementsByName('atividade_diaria');
  for (var i = 0; i < atividade.length; i++) {
   if (atividade[i].checked) {
    atividade_diaria = atividade[i].value;
    } else if (!atividade[0].checked && !atividade[1].checked && !atividade[2].checked && !atividade[3].checked) {
      window.alert("Atenção! Você não selecionou a atividade diária.")
      return;
    }
  }

  var atividade_diaria_valor;
  switch (atividade_diaria) {
    case 'Leve':
      atividade_diaria_valor = 1.2;
      break;
    case 'Moderada':
      atividade_diaria_valor = 1,3;
      break;
    case 'Elevada':
      atividade_diaria_valor = 1,5;
      break;
    case 'Pesada':
      atividade_diaria_valor = 1,7;
      break;
    default:
//        alert("Erro #451!")
  }

  var resultado;
  if (sexo_do_usuario = "Homem") {
    resultado = (66.5 + (13.4 * peso) + (5 * altura) - (6.7 * idade)) * atividade_diaria_valor;
//      alert("Resultado H: " + resultado);
  } else if (sexo_do_usuario = "Mulher") {
    resultado = (65.1 + (9.6 * Peso) + (1.8 * altura) - (4.5 * idade)) * atividade_diaria_valor;
//      alert("Resultado M: " + resultado);
  }

  var resultado_perder = Math.round(resultado - 200);
  var resultado_manter = Math.round(resultado);
  var resultado_ganhar = Math.round(resultado + 200);

//    alert(resultado_ganhar);
//    alert(resultado_manter);
//    alert(resultado_perder);

  document.getElementById('resultado_ganhar_calorias').innerHTML = resultado_ganhar;
  document.getElementById('resultado_manter_calorias').innerHTML = resultado_manter;
  document.getElementById('resultado_perder_calorias').innerHTML = resultado_perder;
}