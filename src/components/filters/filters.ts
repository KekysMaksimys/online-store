import { newTag } from '../create-element';
import {resetFilters} from './select-filter';
import { closeFiltersList } from '../open-close-filters-list';

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
    filtersDropDown;
    filtersDropDownBtn;
    filtersDropDownMenu;
    filtersBrand;
    filtersBrandName;
    filtersBrandList;
    filtersPrice;
    filtersPriceName;
    filtersStock;
    filtersStockName;
    closeFiltersList;
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
        this.closeFiltersList = newTag('button', {
            id: 'filters-list-close-btn',
        });
        //category
        this.filtersCategory = newTag('div', { className: 'filters-category' });
        this.filtersCategoryName = newTag('h3', { 
            className: 'filters-category-name',
            innerText: 'Category'
        });
        this.filtersCategoryList = newTag('div', { className: 'filters-category-list' });
        // this.filtersCategoryDropDown = newTag('div', { className: 'dropdown' });
        // this.filtersCategoryDropDownBtn = newTag('button', { 
        //     className: 'btn btn-secondary dropdown-toggle category',
        //     type: 'button',
        //     innerText: 'More Categories',
        // });
        // this.filtersCategoryDropDownBtn.setAttribute('data-bs-toggle','dropdown');
        // this.filtersCategoryDropDownBtn.setAttribute('aria-expanded','false');
        // this.filtersCategoryDropDownMenu = newTag('ul', { 
        //     className: 'dropdown-menu category'
        // });
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
        //dropdown menu
        this.filtersDropDown = newTag('div', { className: 'dropdown' });
        this.filtersDropDownBtn = newTag('button', { 
            className: 'btn btn-secondary dropdown-toggle',
            type: 'button',
            // innerText: 'More Categories',
        });
        this.filtersDropDownBtn.setAttribute('data-bs-toggle','dropdown');
        this.filtersDropDownBtn.setAttribute('aria-expanded','false');
        this.filtersDropDownMenu = newTag('ul', { 
            className: 'dropdown-menu'
        });

        this.listenEvents();
    }
    renderFilters() {
        this.filtersContainer.append(this.resetFilters);
        this.resetFilters.append(this.resetButton);
        this.resetFilters.append(this.closeFiltersList);
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

    renderDropDownCategoryLists(){
        this.filtersDropDown.append(this.filtersDropDownBtn);
        this.filtersDropDown.append(this.filtersDropDownMenu);

        this.filtersDropDownBtn.classList.add('category');
        this.filtersDropDownBtn.innerText = 'More Categories';
        this.filtersDropDownMenu.classList.add('category');

        return this.filtersDropDown
    }

    renderDropDownBrandLists(){
        this.filtersDropDown.append(this.filtersDropDownBtn);
        this.filtersDropDown.append(this.filtersDropDownMenu);

        this.filtersDropDownBtn.classList.add('brand');
        this.filtersDropDownBtn.innerText = 'More Brands';
        this.filtersDropDownMenu.classList.add('brand');

        return this.filtersDropDown
    }

    listenEvents() {
        this.resetButton.addEventListener('click', () => {
            resetFilters();
        })

        this.closeFiltersList.addEventListener('click', () => {
            closeFiltersList();
        })        
    }
}

export { Filters };
