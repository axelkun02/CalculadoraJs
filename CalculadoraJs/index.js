function insert(num) {
    var numero = document.getElementById("painel").innerHTML;
    document.getElementById("painel").innerHTML = numero + num;

}

function clean() {
    document.getElementById("painel").innerHTML = ""
}

function back() {
    var painel = document.getElementById("painel").innerHTML;
    document.getElementById("painel").innerHTML = painel.substring(0, painel.length - 1);
}

function calcular() {
    var painel = document.getElementById("painel").innerHTML;
    if(painel) {
        document.getElementById("painel").innerHTML = eval(painel);
    } else if (painel == "") {
        alert("Insira os números para realizar a operação")
        
    }

}