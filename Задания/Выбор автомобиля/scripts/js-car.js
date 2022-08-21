//! Список моделей и их характеристики
let superb = {
    name: 'Superb',
    price: 4500000,
    color: ['white', 'black', 'cherry'],
    maxSpeed: 280
}
let octavia = {
    name: 'Octavia',
    price: 1800000,
    color: ['white', 'black', 'gray'],
    maxSpeed: 150
}
let yeti = {
    name: 'Yeti',
    price: 3500000,
    color: ['white', 'black', 'brown'],
    maxSpeed: 150
}
let rapid = {
    name: 'Rapid',
    price: 2500000,
    color: ['white', 'black', 'red'],
    maxSpeed: 200
}

let tuareg = {
    name: 'Tuareg',
    price: 4000000,
    color: ['white', 'black', 'green'],
    maxSpeed: 260
}
let polo = {
    name: 'Polo',
    price: 1200000,
    color: ['white', 'black', 'silver'],
    maxSpeed: 160
}
let tiguan = {
    name: 'Tiguan',
    price: 3000000,
    color: ['white', 'black', 'yellow'],
    maxSpeed: 220
}

let skodaModels = [superb, octavia, yeti, rapid];
let volkswagenModels = [tuareg, polo, tiguan];


let carSkoda = new Car('Skoda', skodaModels);
let carVolkswagen = new Car('Volkswagen', volkswagenModels);

let cars = [carSkoda, carVolkswagen];

let carBrandList = document.getElementById('brand-select');
let carModelList = document.getElementById('model-select');
let carPriceList = document.getElementById('price-select');

//let modelOption = document.querySelector('.model-option');
//modelOption.classList.remove('hidden');

//! Конструктор брэнда машины и модельного ряда
function Car(brand, models) {
    this.carBrand = brand;
    this.carModels = models;
}
//? Выбор брэнда
let brandslist = function () {
    //let list = document.getElementById('brand-select');
    for (let i = 0; i < cars.length; i++) {
        let brand = cars[i].carBrand;
        let newBrandOption = document.createElement('option');
        newBrandOption.textContent = brand;
        carBrandList.appendChild(newBrandOption);
    }
}
brandslist();

//! Конструктор каждой модели в частности
function Model(name, price, color, maxSpeed) {
    this.modelName = name;
    this.modelPrice = price;
    this.modelColor = color;
    this.modelMaxSpeed = maxSpeed;
}
//? Выбор модели
Car.prototype.modelsList = function () {
    while (carModelList.firstChild) {
        carModelList.removeChild(carModelList.firstChild);
    }
    for (let i = 0; i < this.carModels.length; i++) {
        let model = this.carModels[i].name;
        let newModelOption = document.createElement('option');
        newModelOption.setAttribute('value', model);
        newModelOption.textContent = model;
        carModelList.appendChild(newModelOption);
    }
}


function brandChange() {
    //carModelList.removeChild();
    for (let i = 0; i < cars.length; i++) {
        if (carBrandList.value === cars[i].carBrand) {
            cars[i].modelsList();
        }
    }
    /*if (carBrandList.value === carSkoda.carBrand) {
        carSkoda.modelsList();
    } else if (carBrandList.value === carVolkswagen.carBrand) {
        carVolkswagen.modelsList();
    }*/
}

//? Ценовой диапозон
function priceList() {
    //let list = document.getElementById('price-select');
    let priceRangeMin = document.createElement('option');
    let priceRangeMid = document.createElement('option');
    let priceRangeMax = document.createElement('option');
    priceRangeMin.textContent = 'до 2.000.000 руб';
    priceRangeMid.textContent = 'до 3.500.000 руб';
    priceRangeMax.textContent = 'до 5.000.000 руб';
    carPriceList.appendChild(priceRangeMin);
    carPriceList.appendChild(priceRangeMid);
    carPriceList.appendChild(priceRangeMax);
}
priceList();