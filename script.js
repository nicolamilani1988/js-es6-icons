function getArr(){
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

function printItems(){
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
function getTypes(){
  const items = getArr();
  // const typeSolo = items.map(elem => {
  //
  //   return elem["type"];
  // })
  // console.log(types);

  const types = [];
  for(let i = 0;i<items.length;i++){
    let value = items[i];
    let type = value["type"];
    if (!types.includes(type)){
      types.push(type);
    }
  }
  return types; // array univoco dei valori alla voce "type"
}

function addColor(){
  const items = getArr();
  const colors = ["blue","orange","purple","red","green"];
  const types = getTypes();
  for (let i = 0;i<items.length;i++){
    let item = items[i];
    let type = item["type"];
    for(let j = 0;j<types.length;j++){ //ciclo annidato per assegnare un colore a ogni type
      if(type == types[j]){
        let color = colors[j];
        item["color"] = color;
      }
    }
  }
  console.log(items);
  return items; // array iniziale con aggiunta del "color"

}

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
function filterCreate(){
  const types = getTypes();
  types.forEach(elem => {
    $("#type").append(`
        <option class="types" value="${elem}">${elem}</option>
      `);
  })
}

function filterSelect(){
  let selectedType = $(this).val();
  const types = getTypes();
  console.log(types, selectedType);

  // for(let i = 0;i<types.length;i++){
  //   if(selectedType == types[i]){
  //     $(`.element`).hide();
  //     $(`.element.${selectedType}`).show();
  //   }
  // }

  types.forEach(elem =>{
    if(selectedType == elem){
      $(`.element`).hide();
      $(`.element.${selectedType}`).show();
    }
  })

  if(selectedType == "all"){
    $(`.element`).show();
  }

}


function init(){

  printItems();
  getTypes();
  addColor();
  filterCreate();
  $(".types").click(filterSelect);
  
}

$(init);
