// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.

// Milestone 2
// Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

// BONUS
// 1- modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo “#” seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
// 2- popolare le options della select della milestone 3 dinamicamente.

// Consigli del giorno
// Come sempre, iniziamo prima di tutto dall’analisi e comprensione della consegna.
// Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
// Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell’head della pagina.
// Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un’icona qualsiasi, in particolare focalizziamoci sulle classi.
// Come possiamo usare i dati presenti nella nostra struttura dati per creare l’elemento html nel modo corretto e visualizzare l’icona in pagina?
// Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all’interno l’icona e uno span con il nome.
// Solamente quando la parte logica è completa, ci dedichiamo al css.

const main = document.querySelector('main');

const filteredIconsAll = icons.filter((icon, index, array) => icon.color);
const filteredIconsOrange = icons.filter((icon, index, array) => icon.type === 'animal');
const filteredIconsGreen = icons.filter((icon, index, array) => icon.type === 'vegetable');
const filteredIconsBlue = icons.filter((icon, index, array) => icon.type === 'user');

function iconDivGenerator(icon) {
    let box = document.createElement("div");
    
    box.innerHTML = `
        <div>
            <i class="${icon.family} ${icon.prefix}${icon.name} ${icon.color} fa-3x"></i>
        </div>
        <div>
            <span>${icon.name}</span>
        </div>`
    
    main.appendChild(box);
   
    let i = box.querySelector("i");
    

    if (icon.type === 'animal') {
        i.style.color = randomColor();
    } else if (icon.type === 'vegetable') {
        i.style.color = randomColor();
    }
    else if (icon.type === 'user') {
        i.style.color = randomColor();
    }    
}


function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;

}



function typeSelector(i) {
    const selector = document.getElementById("icons");
    selector.addEventListener('change', function () {

        
        

        if (this.value === 'all') {
            main.innerHTML = '';
            filteredIconsAll.forEach((icons) => iconDivGenerator(icons));

            
            
        } else if (this.value === 'animal') {
            main.innerHTML = '';
            filteredIconsOrange.forEach((icons) => iconDivGenerator(icons));
        } else if (this.value === 'vegetable') {
            main.innerHTML = '';
            filteredIconsGreen.forEach((icons) => iconDivGenerator(icons));
        } else if (this.value === 'user') {
            main.innerHTML = '';
            filteredIconsBlue.forEach((icons) => iconDivGenerator(icons));
        }
    });


}


typeSelector();
