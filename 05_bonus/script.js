/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

function saluto(nome){

    // inserisco la data e orario corrente
    const dataDiOggi = new Date();
    console.log(dataDiOggi);

    // estrago l'oraio preciso
    const oraCorrente = dataDiOggi.getHours();
    console.log(oraCorrente);
    let saluto = "";

    if(oraCorrente <= 13){
        saluto = "Buongiorno"
    }else if(oraCorrente <= 17){
        saluto = "Buon pomeriggio"
    }else{
        saluto = "Buonasera"
    }
    return saluto + " " + nome;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(saluto(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.