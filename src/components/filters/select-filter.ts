import json from '../../data.json';
let indexesArray = Array.from(Array(json.length).keys());
let filteredIndexesArray: any[] = [];
let hideIndexes: number[] = [];

function selectFilter() {
    const selectCategoryAll = document.querySelectorAll('.select');
    let category = "category";
    let brand = "brand";
    let selectedValuesAll: any[] = [];
    selectCategoryAll.forEach((el) => {
        selectedValuesAll.push(el.id);
    })
    filteredIndexesArray = json.filter((e: {
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

    if (selectCategoryAll.length === 0) {
        filteredIndexesArray = [];
        showAllCards();
    } else{
        showAllCards();
        hideCards();
        filteredIndexesArray.splice(0);
    }
}

function filtersPricesStock(number: number, type: string, compare: string){
    type ObjectKey = keyof typeof json[0];
    let typeFilter = type as ObjectKey;
    if(compare === 'low'){
        json.map(
            (e: {
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
            }, index) => {
                    if (+e[typeFilter] >= +number) {
                        indexesArray.splice(index, 1);
                    }
                }
            );
    }
    if(compare === 'top'){
        json.map(
            (e: {
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
            }, index) => {
                    if (+e[typeFilter] <= +number) {
                        indexesArray.splice(index, 1);
                    }
                }
            );
    }
    if(+number === 0){
        indexesArray = Array.from(Array(json.length).keys());
        showAllCards();
    }  else{
        showAllCards();
        hideCards();
    }
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
    filteredIndexesArray = [...new Set(filteredIndexesArray)];
    filteredIndexesArray.forEach((el) =>{
        productCardsAll[el.id - 1].classList.add('hidden-card');
    })
}

function showAllCards(){
    const productCardsAll = document.querySelectorAll('.hidden-card');
    productCardsAll.forEach((el) =>{
        el.classList.remove('hidden-card');
    })
}


export { selectFilter, filtersPricesStock, resetFilters};
