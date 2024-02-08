import json from '../../data.json';
import { CatalogCard } from '../catalog-card';
const showFilteredCards: unknown[] = [];

function filteringCards(){
    filteringByBrands();
    filteringByCategories();
    filteringByPrice();
    filteringByStock();
    updatingCardsListAfterFilters();
}

function filteringByBrands(){
    const brandsSelectedAll = document.querySelectorAll('.brand-select');
    if (brandsSelectedAll.length === 0) {
        showFilteredCards.splice(0);
        showFilteredCards.push(...json);
        return showFilteredCards;
    }
    const selectedBrandsName: unknown[] = [];
    brandsSelectedAll.forEach((el) => {
        selectedBrandsName.push(el.id);
    })
    const showFilteredBrandsCards = json.filter((e: {
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
        }) => (selectedBrandsName.includes(e.brand))
    );
    showFilteredCards.splice(0);
    showFilteredCards.push(...showFilteredBrandsCards);
    return showFilteredCards;
}

function filteringByCategories(){
    const categoriesSelectedAll = document.querySelectorAll('.category-select');
    if (categoriesSelectedAll.length === 0) {
        return showFilteredCards;
    }
    const selectedCategoriesName: unknown[] = [];
    categoriesSelectedAll.forEach((el) => {
        selectedCategoriesName.push(el.id);
    })
    const showFilteredCategoriesCards = showFilteredCards.filter((e: {
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
        }) => (selectedCategoriesName.includes(e.category))
    );
    showFilteredCards.splice(0);
    showFilteredCards.push(...showFilteredCategoriesCards);
    return showFilteredCards;
}

//separate function 
function filteringByPrice(){
    const lowPriceInput = document.getElementById(`input-low-price`) as HTMLInputElement;
    const topPriceInput = document.getElementById(`input-top-price`) as HTMLInputElement;
    const sumaryAllInput = +lowPriceInput.value + +topPriceInput.value;
    if(sumaryAllInput === 0){
        return showFilteredCards;
    }
    const topPriceValue = +topPriceInput.value || +topPriceInput.placeholder;
    const showFilteredPriceCards = showFilteredCards.filter((e: {
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
        }) => (e.price >= +lowPriceInput.value && e.price <= topPriceValue)
    );
    showFilteredCards.splice(0);
    showFilteredCards.push(...showFilteredPriceCards);
    return showFilteredCards;
}

function filteringByStock(){
    const lowStockInput = document.getElementById(`input-low-stock`) as HTMLInputElement;
    const topStockInput = document.getElementById(`input-top-stock`) as HTMLInputElement;
    const sumaryAllInput = +lowStockInput.value + +topStockInput.value;
    if(sumaryAllInput === 0){
        return showFilteredCards;
    }
    const topStockValue = +topStockInput.value || +topStockInput.placeholder;
    const showFilteredStockCards = showFilteredCards.filter((e: {
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
        }) => (e.stock >= +lowStockInput.value && e.stock <= topStockValue)
    );
    showFilteredCards.splice(0);
    showFilteredCards.push(...showFilteredStockCards);
    return showFilteredCards;
}
function resetFilters(){
    const brandsSelectedAll = document.querySelectorAll('.brand-select');
    const categoriesSelectedAll = document.querySelectorAll('.category-select');
    const inputNumbersAll = document.querySelectorAll('.input-numbers');
    brandsSelectedAll.forEach((elem: HTMLInputElement) => {
        elem.classList.remove('brand-select');
        elem.checked = false;
    });
    categoriesSelectedAll.forEach((elem: HTMLInputElement) => {
        elem.classList.remove('category-select');
        elem.checked = false;
    });
    inputNumbersAll.forEach((elem: HTMLInputElement) => {
        elem.value = '';
    });
    showFilteredCards.splice(0);
    showFilteredCards.push(...json);
    updatingCardsListAfterFilters();
}

function updatingCardsListAfterFilters(){
    const cardsList = document.querySelector('.cards__list');
    cardsList.innerHTML = '';
    const fragment = new DocumentFragment();
    showFilteredCards.forEach((el, index) => {
        const id: number = (el as {id: number}).id - 1
        const card = new CatalogCard(el, id);
        fragment.append(card.renderCard());
    })
    cardsList.append(fragment);
}

export {resetFilters, filteringCards};
