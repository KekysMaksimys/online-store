import { forEach } from 'lodash';
import { newTag } from './create-element';
import { openFiltersList, closeFiltersList } from './filters/open-close-filters-list';

class ProductCatalog {
    productCatalog: HTMLElement & {
        className?: string;
        innerText?: string;
        id?: number | string;
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
    };
    title: HTMLElement & {
        className?: string;
        innerText?: string;
        id?: number | string;
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
    };
    cardsList: HTMLElement & {
        className?: string;
        innerText?: string;
        id?: number | string;
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
    };
    filtersList: HTMLElement & {
        className?: string;
        innerText?: string;
        id?: number | string;
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
    };
    constructor() {
        this.productCatalog = newTag('section', { className: 'catalog-container' });
        this.title = newTag('h2', {
            className: 'main__title',
            innerText: 'Catalog',
        });
        this.filtersList = newTag('button', { 
            id: 'open__filters',
            innerText: 'Filters'
        });
        this.cardsList = newTag('ul', { className: 'cards__list' });
        this.listenEvents();
    }
    render() {
        this.productCatalog.append(this.title);
        this.productCatalog.append(this.filtersList);
        this.productCatalog.append(this.cardsList);
        return this.productCatalog;
    }

    listenEvents() {
        this.filtersList.addEventListener('click', () => {
            openFiltersList();
        })
    }
}

export { ProductCatalog };
