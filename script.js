function getArr(){ //Funzione per avere array originale
  const arr = [
    {
      name: "cat",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "crow",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dog",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dove",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "dragon",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "horse",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "hippo",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "fish",
      prefix: "fa-",
      type: "animal",
      family: "fas",
    },
    {
      name: "carrot",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "apple-alt",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "lemon",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "pepper-hot",
      prefix: "fa-",
      type: "vegetable",
      family: "fas",
    },
    {
      name: "user-astronaut",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-graduate",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-ninja",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
    {
      name: "user-secret",
      prefix: "fa-",
      type: "user",
      family: "fas",
    },
  ];

  return arr;

}

// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

function printItems(){ //Funzione per stampare su pagina tutte le icone

  const items = addColor(); // = uguale a getArr() ma con aggiunta chiave color
  items.forEach(elem => {
    let{color,name,prefix,type,family} = elem;
    $(".icons").append(`
        <div class="${type} element">
          <i class = "${family} ${prefix}${name}" style="color: ${color} "></i>
          <div class="title">${name.toUpperCase()}</div>
        </div>
      `)
  })
}

// Milestone 2
// Coloriamo le icone per tipo
// 1-estrarre tutti i type
// 2-associare type - colore
// 3-aggiungere chiave all'object
function getTypes(){ //funzione per avere array di type univoci
  const items = getArr();
  const types = [];

  // svolgimento con CICLO FOR
  // for(let i = 0;i<items.length;i++){
  //   let value = items[i];
  //   let type = value["type"];
  //   if (!types.includes(type)){
  //     types.push(type);
  //   }
  // }

  // svolgimento con CICLO foreach
  items.forEach(elem => {
    let type = elem["type"];
    if (!types.includes(type)){
      types.push(type);
    }
  })

  return types; // array univoco dei valori alla voce "type"
}


function addColor(){ // funzione che mi restituisce array con key COLOR
  const items = getArr();
  const colors = ["blue","orange","purple","red","green"];
  const types = getTypes();
  // SVOLGIMENTO CON CICLO FOR
  // for (let i = 0;i<items.length;i++){
  //   let item = items[i];
  //   let type = item["type"];
  //   for(let j = 0;j<types.length;j++){ //ciclo annidato per assegnare un colore a ogni type
  //     if(type == types[j]){
  //       let color = colors[j];
  //       item["color"] = color;
  //     }
  //   }
  // }

  // SVOLGIMENTO CON CICLO MAP
  const itemsNew = items.map(elem =>{
    let type = elem["type"];
    let typeIndex = types.indexOf(type);
    let color = colors[typeIndex];
    elem["color"] = color;
    return elem;
  })
  console.log(itemsNew);
  return itemsNew; // array iniziale con aggiunta del "color"
}

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
function filterCreate(){ //funzione per creare option del menu select
  const types = getTypes();
  types.forEach(elem => {
    $("#type").append(`
        <option class="select-option">${elem}</option>
      `);
  })
}

// MIA VERSIONE
function filterSelect(){ //funzione che mi individua val() e mi nasconde/mostra relative    classi
  const selectedType = $(this).val();
  const types = getTypes();
  console.log(types, selectedType);
  // SVOLGIMENTO CICLO FOR
  // for(let i = 0;i<types.length;i++){
  //   if(selectedType == types[i]){
  //     $(`.element`).hide();
  //     $(`.element.${selectedType}`).show();
  //   }
  // }

  // SVOLGIMENTO FOREACH
  types.forEach(elem =>{
    if(selectedType == elem){
      $(`.element`).hide();
      $(`.element.${selectedType}`).show();
    }
  })

  if(!types.includes(selectedType)){
    $(`.element`).show();
  }
}



// VERSIONE Olga con change ()
function selectChange(){ // funzione che individua valore selezionato. Se non presente, ristampa tutto.
  const types = getTypes();
  const selectedType = $(this).val();

  if(types.includes(selectedType)){
    console.log(selectedType);
    selectFiltered(selectedType);
  } else {
    $(".icons").html('');
    printItems();
  }
}


function selectFiltered(type){ // funzione che mi dice cosa stampare
  const items = addColor();
  const filteredItems = items.filter(elem => {
    if(elem["type"] == type){
      return elem;
    }
  })
  printFiltered(filteredItems);
}


function printFiltered(array){ // funzione che stampa array selezionato.
  $(".icons").html('');
  array.forEach(elem => {
    let{color,name,prefix,type,family} = elem;
    $(".icons").append(`
        <div class="${type} element">
          <i class = "${family} ${prefix}${name}" style="color: ${color} "></i>
          <div class="title">${name.toUpperCase()}</div>
        </div>
      `)
  })
}


function init(){

  printItems();
  getTypes();
  addColor();
  filterCreate();
  //FUNZIONE NICOLA
  //$(".select-option").click(filterSelect); // su Chrome non funziona il click sulle options
  // FUNZIONE OLGA
  $("#type").change(selectChange);
}

$(init);
