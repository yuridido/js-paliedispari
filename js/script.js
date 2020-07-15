// Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
// Buon lavoro e buon divertimento! :slightly_smiling_face:

var parola = prompt('inserisci una parola').toLowerCase();
console.log(palindromi(parola));

function palindromi(str){
    var alorap = '';
    for (i = str.length - 1; i >= 0; i--) {
        alorap += str[i];
    }
    if (parola == alorap) {
        return "la parola è palindroma";
    } else {
        return "la parola NON è palindroma";
    }
}
