let inputHorasaulaporsemana = document.querySelector("#horasaulaporsemana");
let selectNiveldoprofessor = document.querySelector("#Niveldoprofessor");

let btsalarioprofessor = document.querySelector("#btsalarioprofessor");

let h3Salario = document.querySelector("#h3Salario");

function calcularsalariodoprofessor(){

    let HorasAula = Number(inputHorasaulaporsemana.value);
    let Nivel = selectNiveldoprofessor.value;

    let Nivel1 = 12.00;
    let Nivel2 = 17.00;
    let Nivel3 = 25.00;

    let salarioNivel1 = Nivel1 * HorasAula * 4.5;
    let salarioNivel2 = Nivel2 * HorasAula * 4.5;
    let salarioNivel3 = Nivel3 * HorasAula * 4.5;

    if( Nivel == "A" ){
        h3Salario.innerHTML = "Salario do professor nivel 1 R$ " + salarioNivel1;
    }

    else if( Nivel == "B" ){
        h3Salario.innerHTML = "Salario do professor nivel 2 R$ " + salarioNivel2;
    }

    else if( Nivel == "C" ){
        h3Salario.innerHTML = "Salario do professor nivel 3 R$ " + salarioNivel3;
    }
}

btsalarioprofessor.onclick = function(){
    calcularsalariodoprofessor();
}