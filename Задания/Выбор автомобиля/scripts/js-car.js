//! Список моделей и их характеристики
let superb = new Model('Superb', 4500000, ['white', 'black', 'cherry'], 280);
let octavia = new Model('Octavia', 1800000, ['white', 'black', 'gray'], 150);
let yeti = new Model('Yeti', 3500000, ['white', 'black', 'brown'], 150);
let rapid = new Model('Rapid', 2500000, ['white', 'black', 'red'], 200);

let tuareg = new Model('Tuareg', 4000000, ['white', 'black', 'green'], 260);
let polo = new Model('Polo', 1200000, ['white', 'black', 'silver'], 160);
let tiguan = new Model('Tiguan', 3000000, ['white', 'black', 'yellow'], 220);

let allModels = [superb, octavia, yeti, rapid, tuareg, polo, tiguan];
let skodaModels = [superb, octavia, yeti, rapid];
let volkswagenModels = [tuareg, polo, tiguan];


let carSkoda = new Car('Skoda', skodaModels);
let carVolkswagen = new Car('Volkswagen', volkswagenModels);

let cars = [carSkoda, carVolkswagen];

let carBrandList = document.getElementById('brand-select');
let carModelList = document.getElementById('model-select');
let carPriceList = document.getElementById('price-select');

//! Конструктор брэнда машины и модельного ряда
function Car(brand, models) {
    this.carBrand = brand;
    this.carModels = models;
}
//? Выбор брэнда
let brandslist = function () {
    for (let i = 0; i < cars.length; i++) {
        let brand = cars[i].carBrand;
        let newBrandOption = document.createElement('option');
        newBrandOption.textContent = brand;
        carBrandList.appendChild(newBrandOption);
    }
}
brandslist();
//? Ценовой диапозон
function priceList() {
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

//! Конструктор каждой модели в частности
function Model(name, price, color, maxSpeed) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.maxSpeed = maxSpeed;
}
//? Выбор модели
Car.prototype.modelsList = function startModelsList() {
    while (carModelList.firstChild) {
        carModelList.removeChild(carModelList.firstChild);
    }
    for (let i = 0; i < this.carModels.length; i++) {
        //let model = this.carModels[i].name;
        let newModelOption = document.createElement('option');
        let modelPrice = this.carModels[i].price;
        newModelOption.setAttribute('value', this.carModels[i].name);
        newModelOption.setAttribute('id', 'model-option');
        newModelOption.textContent = this.carModels[i].name;
        carModelList.appendChild(newModelOption);
        if (carPriceList.value === 'до 2.000.000 руб' && modelPrice > 2000000) {
            carModelList.removeChild(newModelOption);
        }
        if (carPriceList.value === 'до 3.500.000 руб' && modelPrice > 3500000) {
            carModelList.removeChild(newModelOption);
        }
    }
    /*carPriceList.onchange = function () {
        let modelOption = document.getElementById('option');
        if (carPriceList.value = 'до 2.000.000 руб' && Model.price > 2000000) {
            modelOption.style.display = 'none';
        } else if (carPriceList.value = 'до 3.500.000 руб' && Model.price > 3500000) {
            modelOption.style.display = 'none';
        } else if (carPriceList.value = 'до 5.000.000 руб' && Model.price > 5000000) {
            newModelOption.style.display = 'none';
        }
    }*/
}


function brandChange() {
    for (let i = 0; i < cars.length; i++) {
        if (carBrandList.value === cars[i].carBrand) {
            cars[i].modelsList();
        }
    }
}

carPriceList.onchange = function restart() {
    brandChange();
}