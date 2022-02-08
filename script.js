let cero   = document.getElementById('btn_0');
let uno    = document.getElementById('btn_1');
let dos    = document.getElementById('btn_2');
let tres   = document.getElementById('btn_3');
let cuatro = document.getElementById('btn_4');
let cinco  = document.getElementById('btn_5');
let seis   = document.getElementById('btn_6');
let siete  = document.getElementById('btn_7');
let ocho   = document.getElementById('btn_8');
let nueve  = document.getElementById('btn_9');

let btn_multiplicar   = document.getElementById('btn_multiplicar');
let btn_division      = document.getElementById('btn_division');
let btn_resta         = document.getElementById('btn_resta');
let btn_suma         = document.getElementById('btn_suma');
let btn_igual         = document.getElementById('btn_igual');

let numero_a  = document.getElementById('numero_a');
let numero_b  = document.getElementById('numero_b');
let simbolo  = document.getElementById('simbolo');

let btn_limpiar  = document.getElementById('btn_limpiar');
let btn_eliminar  = document.getElementById('btn_eliminar');
let btn_historiar  = document.getElementById('btn_historiar');

function limpiar_historial(){
    localStorage.removeItem('data');
    let cajaHistoriar = document.getElementById('caja-historiar');
    cajaHistoriar.innerHTML = "";
    let btn = document.createElement('button')
    btn.innerHTML = `<button id="btn_limpiar_historiar" onclick="limpiar_historial()">Limpiar Historial</button>`
    cajaHistoriar.appendChild(btn);
}

btn_historiar.addEventListener('click', function() {
    let historiar = localStorage.getItem('data');
    historiar = JSON.parse(historiar);
    console.log(historiar)

    let cajaHistoriar = document.getElementById('caja-historiar');
    cajaHistoriar.innerHTML = "";
    for(let i = 0; i < historiar.length; i++){
        let p_1 = document.createElement('p');
        p_1.innerText = historiar[i];
        cajaHistoriar.appendChild(p_1);

    }
    let btn = document.createElement('div')
    btn.innerHTML = `<button id="btn_limpiar_historiar" onclick="limpiar_historial()">Limpiar Historial</button>`
    cajaHistoriar.appendChild(btn);

});

function guardar_historiar(){

    let historiar = localStorage.getItem('data');
    if(historiar == null){
        localStorage.setItem("data", []);
        historiar = [];
    } else {
        historiar = JSON.parse(historiar);
    }

    let data = numero_a.innerHTML + ' ' + simbolo.innerHTML + ' ' +  numero_b.innerHTML;
    historiar.push(data.toString());
    data3 = JSON.stringify(historiar);
    localStorage.setItem("data", data3);
}

function guardar_historiar_postt(){

    let historiar = localStorage.getItem('data');
    if(historiar == null){
        localStorage.setItem("data", []);
        historiar = [];
    } else {
        historiar = JSON.parse(historiar);
    }

    let data = '= ' +  numero_b.innerHTML;
    historiar.push(data.toString());
    data3 = JSON.stringify(historiar);
    localStorage.setItem("data", data3);
}

btn_eliminar.addEventListener('click', function() {
    let text = numero_b.innerHTML;
    text = text.substring(0, text.length - 1);
    if(text.length == 0){
        numero_b.innerHTML = 0;
    } else {
        numero_b.innerHTML = text;
    }
});
btn_limpiar.addEventListener('click', function() {
    numero_a.innerHTML = 0;
    numero_b.innerHTML = 0;
    simbolo.style.display = "none"
    simbolo.innerHTML = ""

});

cero.addEventListener('click', function() {
    if(numero_b.innerHTML != "0"){
        numero_b.innerHTML += "0";
    }
});

uno.addEventListener('click', function() {
    if(numero_b.innerHTML == "0"){
        numero_b.innerHTML = "1";
    } else {
        numero_b.innerHTML += "1";
    }
});

dos.addEventListener('click', function() {
    if(numero_b.innerHTML == "0"){
        numero_b.innerHTML = "2";
    } else {
        numero_b.innerHTML += "2";
    }
});

tres.addEventListener('click', function() {
    if(numero_b.innerHTML == "0"){
        numero_b.innerHTML = "3";
    } else {
        numero_b.innerHTML += "3";
    }
});

cuatro.addEventListener('click', function() {
    if(numero_b.innerHTML == "0"){
        numero_b.innerHTML = "4";
    } else {
        numero_b.innerHTML += "4";
    }
});

cinco.addEventListener('click', function() {
    if(numero_b.innerHTML == "0"){
        numero_b.innerHTML = "5";
    } else {
        numero_b.innerHTML += "5";
    }
});

seis.addEventListener('click', function() {
    if(numero_b.innerHTML == "0"){
        numero_b.innerHTML = "6";
    } else {
        numero_b.innerHTML += "6";
    }
});

siete.addEventListener('click', function() {
    if(numero_b.innerHTML == "0"){
        numero_b.innerHTML = "7";
    } else {
        numero_b.innerHTML += "7";
    }
});

ocho.addEventListener('click', function() {
    if(numero_b.innerHTML == "0"){
        numero_b.innerHTML = "8";
    } else {
        numero_b.innerHTML += "8";
    }
});

nueve.addEventListener('click', function() {
    if(numero_b.innerHTML == "0"){
        numero_b.innerHTML = "9";
    } else {
        numero_b.innerHTML += "9";
    }
});

btn_suma.addEventListener("click", function(){
    if(numero_a.innerHTML == "0"){
        numero_a.innerHTML = numero_b.innerHTML;
        simbolo.style.display = "block"
        simbolo.innerHTML = "+"
        numero_b.innerHTML = "0";
    } else {
        simbolo.innerHTML = "+"
        num_a = parseInt(numero_a.innerHTML);
        num_b = parseInt(numero_b.innerHTML);
        suma = num_a + num_b;
        numero_a.innerHTML = suma;
        numero_b.innerHTML = "0";
    }
});

btn_resta.addEventListener("click", function(){
    if(numero_a.innerHTML == "0"){
        numero_a.innerHTML = numero_b.innerHTML;
        simbolo.style.display = "block"
        simbolo.innerHTML = "-"
        numero_b.innerHTML = "0";
    } else {
        simbolo.innerHTML = "-"
        num_a = parseInt(numero_a.innerHTML);
        num_b = parseInt(numero_b.innerHTML);
        resta = num_a - num_b;
        numero_a.innerHTML = resta;
        numero_b.innerHTML = "0";
    }

});

btn_division.addEventListener("click", function(){
    if(numero_a.innerHTML == "0"){
        numero_a.innerHTML = numero_b.innerHTML;
        simbolo.style.display = "block"
        simbolo.innerHTML = "%"
        numero_b.innerHTML = "0";
    } else {
        num_a = parseInt(numero_a.innerHTML);
        num_b = parseInt(numero_b.innerHTML);
        simbolo.innerHTML = "%"
        division = num_a / num_b;
        numero_a.innerHTML = division;
        numero_b.innerHTML = "0";
    }

});

btn_multiplicar.addEventListener("click", function(){
    if(numero_a.innerHTML == "0"){
        numero_a.innerHTML = numero_b.innerHTML;
        simbolo.style.display = "block"
        simbolo.innerHTML = "x"
        numero_b.innerHTML = "0";
    } else {
        num_a = parseInt(numero_a.innerHTML);
        num_b = parseInt(numero_b.innerHTML);
        multiplicar = num_a * num_b;
        simbolo.innerHTML = "x"
        numero_a.innerHTML = multiplicar;
        numero_b.innerHTML = "0";
    }

});

btn_igual.addEventListener("click", function(){
    guardar_historiar();

    switch (simbolo.innerHTML){
        case "+":
            num_a = parseInt(numero_a.innerHTML);
            num_b = parseInt(numero_b.innerHTML);
            suma = num_a + num_b;
            numero_a.innerHTML = "0";
            numero_b.innerHTML = suma;
            simbolo.style.display = "none"

        break;
        case "-":
            num_a = parseInt(numero_a.innerHTML);
            num_b = parseInt(numero_b.innerHTML);
            resta = num_a - num_b;
            numero_a.innerHTML = "0";
            numero_b.innerHTML = resta;
            simbolo.style.display = "none"
        break;
        case "x":
            num_a = parseInt(numero_a.innerHTML);
            num_b = parseInt(numero_b.innerHTML);
            multiplicar = num_a * num_b;
            numero_a.innerHTML = "0";
            numero_b.innerHTML = multiplicar;
            simbolo.style.display = "none"
        break;
        case "%":
            num_a = parseInt(numero_a.innerHTML);
            num_b = parseInt(numero_b.innerHTML);
            dividir = num_a / num_b;
            numero_a.innerHTML = "0";
            numero_b.innerHTML = dividir;
            simbolo.style.display = "none"
        break;
    }
    guardar_historiar_postt();
});