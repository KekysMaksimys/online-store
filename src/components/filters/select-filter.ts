import json from '../../data.json';
let indexesArray = Array.from(Array(json.length).keys());
let filteredCheckboxArray: unknown[] = [];
let filteredInputArray: unknown[] = [];
let finishedFilter: unknown[] = [];

function filteringCards(){
    selectFilter();
    filtersPricesStock();
    finishedFilter = filteredCheckboxArray.concat(filteredInputArray);
    showAllCards()
    hideCards();
}

function selectFilter() {
    const selectCategoryAll = document.querySelectorAll('.select');
    if (selectCategoryAll.length === 0) {
        return filteredCheckboxArray = [];
    }
    let category = "category";
    let brand = "brand";
    let selectedValuesAll: unknown[] = [];
    selectCategoryAll.forEach((el) => {
        selectedValuesAll.push(el.id);
    })
    filteredCheckboxArray = json.filter((e: {
            id: number;
            title: string;
            description: string;
            price: number;
            discountPercentage: number;
            rating: number;
            stock: number;
            brand: string;
            category: string;
            thumbnail: string;
            images: string[];
        }) => !(selectedValuesAll.includes(e.category) || selectedValuesAll.includes(e.brand))
    );
    return filteredCheckboxArray;
}

function filtersPricesStock(){
    let lowPriceInput = document.getElementById(`input-low-price`) as HTMLInputElement;
    let topPriceInput = document.getElementById(`input-top-price`) as HTMLInputElement;
    let lowStockInput = document.getElementById(`input-low-stock`) as HTMLInputElement;
    let topStockInput = document.getElementById(`input-top-stock`) as HTMLInputElement;
    let sumaryAllInput = +lowPriceInput.value + +topPriceInput.value + +lowStockInput.value + +topStockInput.value;
    if(sumaryAllInput === 0){
        return filteredInputArray = [];
    }
    let topPriceValue = +topPriceInput.value || +topPriceInput.placeholder;
    let topStockValue = +topStockInput.value || +topStockInput.placeholder;
    filteredInputArray = json.filter((e: {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[];
    }) => !(
        (e.price >= +lowPriceInput.value && e.price <= topPriceValue) && 
        (e.stock >= +lowStockInput.value && e.stock <= topStockValue))
    );
    return filteredInputArray;
}

function resetFilters(){
    const selectCategoryAll = document.querySelectorAll('.select');
    const inputNumbersAll = document.querySelectorAll('.input-numbers');
    selectCategoryAll.forEach((elem: HTMLInputElement) => {
        elem.classList.remove('select');
        elem.checked = false;
    });
    inputNumbersAll.forEach((elem: HTMLInputElement) => {
        elem.value = '';
    });
    indexesArray = Array.from(Array(json.length).keys());
    showAllCards();
}

function hideCards(){
    const productCardsAll = document.querySelectorAll('.product-card');
    if(Array.isArray(finishedFilter)){
        finishedFilter.forEach((el) =>{
            if(el && typeof el === 'object' && 'id' in el && typeof el.id === 'number'){
                productCardsAll[el.id - 1].classList.add('hidden-card');
            }
        })
    }
}

function showAllCards(){
    const productCardsAll = document.querySelectorAll('.hidden-card');
    productCardsAll.forEach((el) =>{
        el.classList.remove('hidden-card');
    })
}


export { selectFilter, filtersPricesStock, resetFilters, filteringCards};
