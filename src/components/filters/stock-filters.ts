import { newTag } from '../create-element';
import {filteringCards} from './select-filter';

class StockFilter {
    [x: string]: any;
    constructor(stock: number[]) {
        this.stock = stock;
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
            type: 'stock',
            id: `input-low-stock`,
						className: `input-numbers`
        });
				this.inputTop = newTag('input', {
					type: 'stock',
					id: `input-top-stock`,
					className: `input-numbers`,
				});
    }
    renderStock() {
			this.sortingStock();
			this.addEventListeners();
			this.currentName.append(this.fromLow);
			this.currentName.append(this.toTheTop);
			this.currentName.append(this.inputLow);
			this.currentName.append(this.inputTop);

			return this.currentName;
    }

		sortingStock(){
			this.stock.sort((a:number,b:number) => +a - +b);
			this.inputLow.placeholder = this.stock[0];
			this.inputLow.min = this.stock[0];
			this.inputLow.max = this.stock[this.stock.length - 1];
			this.inputTop.placeholder = this.stock[this.stock.length - 1];
			this.inputTop.min = this.stock[0];
			this.inputTop.max = this.stock[this.stock.length - 1];
		}

		addEventListeners(){
			this.inputLow.addEventListener('input',() => {
				filteringCards()
			});
			this.inputTop.addEventListener('input',() => {
				filteringCards()
			})
		}
}

export { StockFilter };