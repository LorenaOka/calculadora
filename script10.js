function calcular() {
    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;
    const departamento = document.getElementById('departamento').value;
    const resultado = document.getElementById('resultado');

    if(departamento == "1"){
        resultado.value = parseInt(valor1) + parseInt(valor2);
        document.getElementById('resultado').innerText = resultado;
    }
    else if(departamento == "2"){
        resultado.value = valor1 - valor2;

        document.getElementById('resultado').innerText = resultado;
    }
    else if(departamento == "3"){
        resultado.value = valor1 / valor2;
        document.getElementById('resultado').innerText = resultado;
    }
    else if(departamento == "4"){
        resultado.value = valor1 * valor2;
        document.getElementById('resultado').innerText = resultado;
    }
}

const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener("click",calcular);