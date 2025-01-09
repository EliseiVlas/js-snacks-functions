/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function primaParola(stringa){
    
    const lettere = ["a", "e", "i", "o", "u"]
    
    let numeriVocali = 0;

    let vocaliTrovate = []
    
    for ( let i = 0; i < stringa.length; i++){
       if(lettere.includes(stringa[i])){
        numeriVocali++

        vocaliTrovate.push(stringa[i])
       }
       
    }
    console.log(vocaliTrovate.length);
    return numeriVocali + " " + vocaliTrovate;
    
}
// funzione arrai
const primaParola2 = stringa2 => {
    
    const lettere2 = ["a", "e", "i", "o", "u"]
    
    let numeriVocali2 = 0;

    let vocaliTrovate2 = []
    
    for ( let i = 0; i < stringa2.length; i++){
       if(lettere2.includes(stringa2[i])){
        numeriVocali2++

        vocaliTrovate2.push(stringa2[i])
       }
       
    }
    console.log(vocaliTrovate2.length);
    return numeriVocali2 + " " + vocaliTrovate2;
    
}



// Invoca la funzione qui e stampa il risultato in console
console.log(primaParola(word));
console.log(primaParola2(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)