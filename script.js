"use strict";

let button = document.getElementById('calcular');


button.addEventListener('click',calculando);
button.addEventListener('click',clean);

function calculando(e){

    e.preventDefault();
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);

    let delta = Math.pow(num2,2) - 4*num1*num3;
    document.getElementById('DELTA').innerHTML = "Delta = "+delta;
    
    let Xv = -num2/2*num1;
    document.getElementById('xvertice').innerHTML = "Xv = -("+num2 +")/2*"+num1+"   Xv = "+Xv;
    
    let Yv = -delta/4*num1;
    document.getElementById('yvertice').innerHTML = "Yv = -("+delta+")/4*"+num1+" Yv = "+Yv;
    if(delta>0){
        let raiz1 = (-num2 + Math.sqrt(delta))/(2*num1);
        let raiz2 = (-num2 - Math.sqrt(delta))/(2*num1);

        document.getElementById("raizesdafuncao").innerHTML = "Raiz 1 =" +raiz1+"<br>" +"Raiz 2 = "+raiz2;
        
    
    
    }else if(delta ===0){
        let raizUnica = (-num2 + Math.sqrt(delta))/(2*num1);
        document.getElementById("raizesdafuncao").innerHTML = "Delta =0,logo as raízes tem o mesmo valor = " + raizUnica;
    }
    else if (delta <0){
        document.getElementById("raizesdafuncao").innerHTML = "Delta menor que zero,as raízes pertencem ao conjunto dos números complexos";
    }

    
}
function clean(e){
    document.getElementById('num1').value ="";
    document.getElementById('num2').value ="";
    document.getElementById('num3').value ="";
    
    
}