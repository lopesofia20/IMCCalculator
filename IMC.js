document.getElementById("imc-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const peso = parseFloat(document.getElementById("peso").value);
    const alturaCm = parseFloat(document.getElementById("altura").value);
  
    if (!peso || !alturaCm || alturaCm <= 0 || peso <= 0) {
      alert("Por favor, insira valores válidos para peso e altura.");
      return;
    }
  
    const alturaM = alturaCm / 100;
  
    const imc = peso / (alturaM * alturaM);
    let classificacao = "";
  
    if (imc < 18.5) {
      classificacao = "Baixo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = "Excesso de peso";
    } else if (imc >= 30 && imc < 34.9) {
      classificacao = "Obesidade Grau I";
    } else if (imc >= 35 && imc < 39.9) {
      classificacao = "Obesidade Grau II";
    } else if (imc >= 40) {
      classificacao = "Obesidade Grau III";
    }
  
    document.getElementById("resultado").innerHTML = `
      <p>Seu IMC é: ${imc.toFixed(2)}</p>
      <p>Classificação: ${classificacao}</p>
    `;
  });
  