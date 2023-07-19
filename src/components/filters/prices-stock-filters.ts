import { newTag } from '../create-element';
import {filtersPricesStock} from './select-filter';

class PricesStock {
    [x: string]: any;
    constructor(number: number[], type: string) {
        this.number = number;
				this.type = type;
        this.currentName = newTag('div', {
            className: 'input-section',
        });
        this.currentName.classList.add('item-active');
				this.fromLow = newTag('p', {
					innerText: 'from',
					className: `input-low`,
				});
				this.toTheTop = newTag('p', {
					innerText: 'to',
					className: `input-top`,
				});
        this.inputLow = newTag('input', {
            type: 'text',
            id: `input-low-${type}`,
						className: `input-numbers`
        });
				this.inputTop = newTag('input', {
					type: 'text',
					id: `input-top-${type}`,
					className: `input-numbers`,
				});
    }
    renderPricesStock() {
			this.sortingNumbers();
			this.addEventListeners();
			this.currentName.append(this.fromLow);
			this.currentName.append(this.toTheTop);
			this.currentName.append(this.inputLow);
			this.currentName.append(this.inputTop);

			return this.currentName;
    }

		sortingNumbers(){
			this.number.sort((a:number,b:number) => +a - +b);
			this.inputLow.placeholder = this.number[0];
			this.inputTop.placeholder = this.number[this.number.length - 1];
		}

		addEventListeners(){
			this.inputLow.addEventListener('input',() => {
				filtersPricesStock(this.inputLow.value, this.type, 'low')
			});
			this.inputTop.addEventListener('input',() => {
				filtersPricesStock(this.inputTop.value, this.type, 'top')
			})
		}
}

export { PricesStock };