import { newTag } from '../create-element';
import {resetFilters} from './select-filter';

interface SourcesFilters {
    className?: string;
    innerText?: string;
    id?: string | number;
    textContent?: string | number;
    type?: string;
    size?: string;
    src?: string;
    action?: string;
    innerHTML?: string;
    pattern?: string;
    required?: boolean;
    min?: string;
    name?: string;
    for?: string;
    checked?: boolean;
    width?: number;
    alt?: string;
}
class Filters {
    filtersContainer;
    resetFilters;
    resetButton;
    filtersCategory;
    filtersCategoryName;
    filtersCategoryList;
    filtersCategoryDropEnd;
    filtersCategoryDropEndBtn;
    filtersBrand;
    filtersBrandName;
    filtersBrandList;
    filtersPrice;
    filtersPriceName;
    filtersStock;
    filtersStockName;
    filtersStockTo: HTMLElement & SourcesFilters;
    constructor() {
        this.filtersContainer = newTag('section', {
            className: 'filters-section',
        });
        //buttons
        this.resetFilters = newTag('div', { className: 'filters-reset' });
        this.resetButton = newTag('button', {
            id: 'filters-reset-button',
            innerText: 'Reset Filters',
        });
        //category
        this.filtersCategory = newTag('div', { className: 'filters-category' });
        this.filtersCategoryName = newTag('h3', { 
            className: 'filters-category-name',
            innerText: 'Category'
        });
        this.filtersCategoryList = newTag('div', { className: 'filters-category-list' });
        this.filtersCategoryDropEnd = newTag('div', { className: 'btn-group dropend' });
        this.filtersCategoryDropEndBtn = newTag('div', { 
            className: 'btn btn-secondary dropdown-toggle',
            type: 'button',
            innerText: 'more categories',
            innerHTML: 'data-bs-toggle="dropdown", aria-expanded="false"'
        });
        //brand
        this.filtersBrand = newTag('div', { className: 'filters-brand' });
        this.filtersBrandName = newTag('h3', { 
            className: 'filters-brand-name',
            innerText: 'Brand'
        });
        this.filtersBrandList = newTag('div', { className: 'filters-brand-list' });
        //price
        this.filtersPrice = newTag('div', { className: 'filters-price' });
        this.filtersPriceName = newTag('h3', { 
            className: 'filters-price-name',
            innerText: 'Prices',
        });
        //stock
        this.filtersStock = newTag('div', { className: 'filters-stock' });
        this.filtersStockName = newTag('h3', { 
            className: 'filters-stock-name',
            innerText: 'Stock',
         });

        this.listenEvents();
    }
    renderFilters() {
        this.filtersContainer.append(this.resetFilters);
        this.resetFilters.append(this.resetButton);
        this.filtersContainer.append(this.filtersCategory);
        this.filtersCategory.append(this.filtersCategoryName);
        this.filtersCategory.append(this.filtersCategoryList);
        this.filtersContainer.append(this.filtersBrand);
        this.filtersBrand.append(this.filtersBrandName);
        this.filtersBrand.append(this.filtersBrandList);
        this.filtersContainer.append(this.filtersPrice);
        this.filtersPrice.append(this.filtersPriceName);
        this.filtersContainer.append(this.filtersStock);
        this.filtersStock.append(this.filtersStockName);

        return this.filtersContainer;
    }

    listenEvents() {
        this.resetButton.addEventListener('click', () => {
            resetFilters();
        })
    }
}

export { Filters };
