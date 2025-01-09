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


// Invoca la funzione qui e stampa il risultato in console
console.log(primaParola(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)