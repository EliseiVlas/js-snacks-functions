/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];



// Dichiara la funzione qui.

function primaParola(stringa){
    
    // creeo un arrai vuoto
    const caratteriIesimo = []

    for (let i = 0; i < stringa.length; i++){
        
        // aggiungo nel arrai vuoto ogni iniziale dei nomi
        caratteriIesimo.push(stringa[i][0]);
    }
    return caratteriIesimo
}

// Invoca la funzione qui e stampa il risultato in console

console.log(primaParola(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]