/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata. 
Ogni cella ha un numero progressivo, da 1 a 100. 
Ci saranno quindi 10 caselle per ognuna delle 10 righe. 
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
 */

// COSA MI SERVE?

// V Una funzione event listener per il bottone (per far apparire la griglia) 
// V Un ciclo for per moltiplicare i singoli box
// V Una funzione per il clic dei singoli box
// V Condizione per la stampa in console 

// inizio prendendo il container con il suo #id
const boxContainer = document.getElementById("box-container");

// inizializzo un cilo di 100
for (let i = 1; i <= 100; i++){
    let box = document.createElement("div"); //creo un div 
    box.setAttribute("class", "single-box"); //al div assegno la classe box
    box.innerHTML=i;
    boxContainer.appendChild(box); // e lo rendo figlio dell'id box-container
    box.addEventListener("click", function(){
        box.classList.add("bg-color");
        console.log(`Hai selezionato la casella ${box.innerHTML}!`);
     })
}

let button = document.getElementById("play");
button.addEventListener("click", function(){
boxContainer.classList.remove("d-none");
})
