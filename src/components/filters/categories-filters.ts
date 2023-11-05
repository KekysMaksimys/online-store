import { newTag } from '../create-element';
import {filteringCards} from './select-filter';

class CategoriesFilters {
    [x: string]: any;
    constructor(name: string) {
        this.name = name;
        this.currentName = newTag('li', {
            className: 'Checkbox-line',
        });
        this.currentName.classList.add('item-active');
        this.currentName.classList.add('dropdown-item');
        this.checkbox = newTag('input', {
            type: 'checkbox',
            id: this.name,
        });
        this.label = newTag('label', {
            innerText: this.name,
            id: this.name,
        });
        this.addEventsListeners();
    }
    renderCategoriesBrands() {
        this.currentName.append(this.checkbox);
        this.currentName.append(this.label);
        return this.currentName;
    }

    addEventsListeners(){
        this.checkbox.addEventListener('click', (event: Event) => {
            const target = event.target as HTMLElement;
            target.classList.toggle('category-select');
            filteringCards();
        });
    }
}

export { CategoriesFilters };
