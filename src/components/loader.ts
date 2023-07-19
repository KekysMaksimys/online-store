/* eslint-disable @typescript-eslint/no-explicit-any */
import { CatalogCard } from './catalog-card';
import { CategoriesBrands } from './filters/category-brand-filters';
import {PricesStock} from './filters/prices-stock-filters';
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
    let brands: any[] = [];
    let category: any[] = [];
    let prices: any[] = [];
    let stock: any[] = [];
    array.forEach((data, index) => {
        const card = new CatalogCard(data, index);
        brands.push(data.brand);
        category.push(data.category);
        prices.push(data.price);
        stock.push(data.stock);
        fragment.append(card.renderCard());
    });
    category = [...new Set(category)];
    const filtersCategory = document.querySelector('.filters-category-list');
    category.forEach((item) => {
        const category = new CategoriesBrands(item, 'category');
        filtersCategory.append(category.renderCategoriesBrands());
    });
    brands = [...new Set(brands)];
    const filtersBrand = document.querySelector('.filters-brand-list');
    brands.forEach((item) => {
        const brand = new CategoriesBrands(item, 'brand');
        filtersBrand.append(brand.renderCategoriesBrands());
    });
    const filtersPrice = document.querySelector('.filters-price');
    const filterPrice = new PricesStock(prices, 'price');
    filtersPrice.append(filterPrice.renderPricesStock());
    const filtersStock = document.querySelector('.filters-stock');
    const filterStock = new PricesStock(stock, 'stock');
    filtersStock.append(filterStock.renderPricesStock());
    const cardsList = document.querySelector('.cards__list');
    cardsList.append(fragment);
    return cardsList;
}

