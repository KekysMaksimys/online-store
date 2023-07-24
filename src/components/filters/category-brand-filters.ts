import { newTag } from '../create-element';
import {selectFilter} from './select-filter';

class CategoriesBrands {
    [x: string]: any;
    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
        this.currentName = newTag('div', {
            className: 'checkbox-line',
        });
        this.currentName.classList.add('item-active');
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
            target.classList.toggle('select');
            selectFilter();
            console.log(event)
        });
    }
}

export { CategoriesBrands };
