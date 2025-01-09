/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
// l'tente inserisce un iniziale
const leter = prompt("inserisci una lettera")


// Dichiara la funzione qui.
function nomeSpecifico(nomi){

    // Creo un array vuoto
    const listaNomi = []

    for (let i = 0; i < nomi.length; i++){
        // se liniziale del nome e uguale a liniziale che inserisce l'user inseriscila nel array vuoto
        if(nomi[i][0] === leter){
            listaNomi.push(nomi[i])
        }
    }
    return listaNomi
}
const nomeSpecifico2 = nomi2 => {

    // Creo un array vuoto
    const listaNomi2 = []

    for (let i = 0; i < nomi2.length; i++){
        // se liniziale del nome e uguale a liniziale che inserisce l'user inseriscila nel array vuoto
        if(nomi2[i][0] === leter){
            listaNomi2.push(nomi2[i])
        }
    }
    return listaNomi2
}
// Invoca la funzione qui e stampa il risultato in console
console.log(nomeSpecifico(names));
console.log(nomeSpecifico2(names));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]