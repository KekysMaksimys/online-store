import { newTag } from '../create-element';
import {filteringCards} from './select-filter';
import {uncorrectNumeralInput} from './checking-numeral-input'

class PricesFilter {
    [x: string]: any;
    constructor(price: number[]) {
        this.price = price;
        this.currentName = newTag('div', {
            className: 'input-section price',
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
            type: 'price',
            id: `input-low-price`,
						className: `input-numbers price`
        });
				this.inputTop = newTag('input', {
					type: 'price',
					id: `input-top-price`,
					className: `input-numbers price`,
				});
    }
    renderPrices() {
			this.sortingPrices();
			this.addEventListeners();
			this.currentName.append(this.fromLow);
			this.currentName.append(this.toTheTop);
			this.currentName.append(this.inputLow);
			this.currentName.append(this.inputTop);

			return this.currentName;
    }

		sortingPrices(){
			this.price.sort((a:number,b:number) => +a - +b);
			this.inputLow.placeholder = this.price[0];
			this.inputLow.min = this.price[0];
			this.inputLow.max = this.price[this.price.length - 1];
			this.inputTop.placeholder = this.price[this.price.length - 1];
			this.inputTop.min = this.price[0];
			this.inputTop.max = this.price[this.price.length - 1];
		}

		addEventListeners(){
			this.inputLow.addEventListener('input',(e: Event) => {
				if((+this.inputLow.value <= +this.inputTop.max) && 
						(+this.inputLow.value >= +this.inputLow.min))
					{
						filteringCards();
					} else{
						uncorrectNumeralInput(e);
					}
			});
			this.inputTop.addEventListener('input',(e: Event) => {
				if((+this.inputTop.value <= +this.inputTop.max) && 
					(+this.inputTop.value >= +this.inputLow.min))
				{
					filteringCards();
				} else{
					uncorrectNumeralInput(e);
				}
			})
		}
}

export { PricesFilter };