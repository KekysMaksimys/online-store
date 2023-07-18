import json from '../../data.json';
let indexesArray = Array.from(Array(json.length).keys());

function selectFilter(typeFilter: string) {
    const selectCategoryAll = document.querySelectorAll('.select');
    type ObjectKey = keyof typeof json[0];
    let filter = typeFilter as ObjectKey;
    selectCategoryAll.forEach((el) => {
        json.forEach(
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
                if (e[filter] === el.id) {
                    indexesArray.splice(index, 1);
                }
            }
        );
    });
    if (selectCategoryAll.length === 0) {
        indexesArray = Array.from(Array(json.length).keys());
        showAllCards();
    } else{
        showAllCards();
        hideCards();
    }
    console.log('indexes:',indexesArray)
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
                    if (+e[typeFilter] <= +number) {
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
                    if (+e[typeFilter] >= +number) {
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

function hideCards(){
    const productCardsAll = document.querySelectorAll('.product-card');
    indexesArray = [...new Set(indexesArray)];
    indexesArray.forEach((el) =>{
        productCardsAll[el].classList.add('hidden-card');
    })
}

function showAllCards(){
    const productCardsAll = document.querySelectorAll('.hidden-card');
    productCardsAll.forEach((el) =>{
        el.classList.remove('hidden-card');
    })
}


export { selectFilter, filtersPricesStock};
