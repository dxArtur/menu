

let databasedish = [];

getItemsOnLocalStorage = () => {
let localStorageData = JSON.parse(localStorage.getItem("cardapio"));
  if (localStorageData != null) {
    localStorageData.forEach((element) => {
      listaCardapio.push(element);
    });
  } else {
let dish1 = {
    name: "fricasse",
    price: 22,
    ingredients: ["chicken"],
}

let dish2 = {
    name: "lasanha",
    price: 22,
    ingredients: ["chicken", "macarrão"]
};

let dish3 = {
    name: "pizza",
    price: 22,
    ingredients: ["pizza", ""]
};

databasedish.push(dish1);
databasedish.push(dish2);
databasedish.push(dish3);
localStorage.setItem("databasedish", JSON.stringify(databasedish));
  }
};

const cleancolumn = () => {
    const column = document.getElementById('column');
    while(column.lastChild.id !='stop'){
        column.removeChild(column.lastChild);
    }

}

const render = () =>{
    cleancolumn();
    databasedish.forEach (item => createdish(item));

}

const addstorage =() =>{
    localStorage.setItem('databasedish', JSON.stringify(databasedish));
}






const insertdish = (evento) =>{
    const tecla = evento.key;
    const name = evento.target.value;
    const price = evento.target.value;
    const ingredients = evento.target.value;
    if (tecla === 'Enter'){
        databasedish.push({'name': name, 'price': price, 'ingredients': ingredients});
        render();
        evento.target.value='';
    }

    localStorage.setItem('databasedish', JSON.stringify(databasedish));
}


const test = () =>{
    let database = JSON.parse(localStorage.getItem(databasedish));
    for(var item in database){
        console.log(database[item].name);
    }
    //console.log("tentando pegar o nome do prato", dbdish);
}



const createdish = (work) => {
    const dbdish = JSON.parse(localStorage.getItem('databasedish'));
    const item = document.createElement('div');
    item.classList.add('dish');
    item.innerHTML = `
    <div class="bardesign">
            </div>
                <a class="name" value="${dbdish[name]}">${dbdish[name]}</a>
                <a class="ingredientes" value="${dbdish[ingredients]}">${dbdish[ingredients]}</a>
                <a class="preco" value="${dbdish.price}">${dbdish[price]}</a>
            <div class="bardesign">
            </div>
    `;
    document.getElementById('column').appendChild(item);
    
}

