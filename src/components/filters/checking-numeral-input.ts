import {filteringCards} from './select-filter'

function uncorrectNumeralInput(e: Event){
	const regex = /^[0-9\b]+$/;
	const targetInput = e.target as HTMLInputElement;
	if(!regex.test(targetInput.value)){
		targetInput.value = '';
	}
	if(+targetInput.value > +targetInput.max){
		targetInput.value = `${+targetInput.max}`
	}
	if(targetInput.value === ''){
		filteringCards();
	}
	
}

export {uncorrectNumeralInput}