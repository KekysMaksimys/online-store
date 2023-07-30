/* eslint-disable @typescript-eslint/no-explicit-any */
import { CatalogCard } from './catalog-card';
import { CategoriesFilters } from './filters/categories-filters';
import { BrandsFilters } from './filters/brands-filters';
import {PricesFilter} from './filters/prices-filters';
import {StockFilter} from './filters/stock-filters';
import json from '../data.json';

async function getCards() {
    try {
        renderProducts(json);
    } catch (error) {
        console.log(error);
        console.log('Json undefiend')
    }
}
// const app = document.querySelector('body');

// if (app) {
getCards();
// }

function renderProducts(array: any[]) {
    const fragment = new DocumentFragment();
    const brands: any[] = [];
    const category: any[] = [];
    const prices: any[] = [];
    const stock: any[] = [];
    
    array.forEach((data, index) => {
        const card = new CatalogCard(data, index);
        if(!brands.includes(data.brand)){
           brands.push(data.brand); 
        }
        if(!category.includes(data.category)){
            category.push(data.category);
        }
        prices.push(data.price);
        stock.push(data.stock);
        fragment.append(card.renderCard());
    });

    const filtersCategory = document.querySelector('.filters-category-list');
    category.forEach((item) => {
        const category = new CategoriesFilters(item);
        filtersCategory.append(category.renderCategoriesBrands());
    });

    const filtersBrand = document.querySelector('.filters-brand-list');
    brands.forEach((item) => {
        const brand = new BrandsFilters(item);
        filtersBrand.append(brand.renderCategoriesBrands());
    });

    const filtersPrice = document.querySelector('.filters-price');
    const filterPrice = new PricesFilter(prices);
    filtersPrice.append(filterPrice.renderPrices());

    const filtersStock = document.querySelector('.filters-stock');
    const filterStock = new StockFilter(stock);
    filtersStock.append(filterStock.renderStock());

    const cardsList = document.querySelector('.cards__list');
    cardsList.append(fragment);

    return cardsList;
}

