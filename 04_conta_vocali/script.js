/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function primaaParola(stringa){
    
    // creeo un arrai vuoto
    

   
        return stringa.split('').filter(vocale => 'aeiouAEIOU'.includes(vocale)).length 
   
}


// Invoca la funzione qui e stampa il risultato in console
console.log(primaaParola(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)