import json from '../data.json';
let selectCategoryArray = json;
let indexesArray = Array.from(Array(json.length).keys());

function selectCategory() {
    const selectCategoryAll = document.querySelectorAll('.select');
    selectCategoryArray = [];
    indexesArray = Array.from(Array(json.length).keys());
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
                if (e.category === el.id) {
                    selectCategoryArray.push(e);
                    indexesArray.splice(index, 1);
                }
            }
        );
    });
    if (selectCategoryAll.length === 0) {
        selectCategoryArray = json;
        indexesArray = Array.from(Array(json.length).keys());
        showAllCards();
    } else{
        showAllCards();
        hideCards();
    }
    console.log('indexes:',indexesArray)
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


export { selectCategory, selectCategoryArray };
