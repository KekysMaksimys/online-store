/* eslint-disable @typescript-eslint/no-explicit-any */
import { CatalogCard } from './catalog-card';
import { CategoriesBrands } from './category-brand-filters';
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
    array.forEach((data, index) => {
        const card = new CatalogCard(data, index);
        brands.push(data.brand);
        category.push(data.category);
        fragment.append(card.renderCard());
    });
    category = [...new Set(category)];
    const filtersCategory = document.querySelector('.filters-category-list');
    category.forEach((item) => {
        const category = new CategoriesBrands(item);
        filtersCategory.append(category.renderCategoriesBrands());
    });
    brands = [...new Set(brands)];
    const filtersBrand = document.querySelector('.filters-brand-list');
    brands.forEach((item) => {
        const brand = new CategoriesBrands(item);
        filtersBrand.append(brand.renderCategoriesBrands());
    });

    const cardsList = document.querySelector('.cards__list');
    cardsList.append(fragment);
    return cardsList;
}

