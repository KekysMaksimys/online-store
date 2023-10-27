
function openFiltersList(){
	const filterSection = document.querySelector('.filters-section') as HTMLElement;
	const catalogContainer = document.querySelector('.catalog-container') as HTMLElement;
	const cardsList = document.querySelector('.cards__list') as HTMLElement;

	const addItemToCartBtn = document.querySelectorAll('.add-item-to-cart-btn');
	const itemInfoBtn = document.querySelectorAll('.more-card-info-btn');

	filterSection.classList.toggle('open');
	catalogContainer.classList.toggle('opacity');

	addItemToCartBtn.forEach((elem:HTMLElement) =>{
			elem.classList.toggle('disable');
	});

	itemInfoBtn.forEach((elem:HTMLElement) =>{
			elem.classList.toggle('disable');
	});

	cardsList.addEventListener("click", closeFiltersList, true);
	return;
}

function closeFiltersList(){
	const filterSection = document.querySelector('.filters-section') as HTMLElement;
	const catalogContainer = document.querySelector('.catalog-container') as HTMLElement;
	const cardsList = document.querySelector('.cards__list') as HTMLElement;

	const addItemToCartBtn = document.querySelectorAll('.add-item-to-cart-btn');
	const itemInfoBtn = document.querySelectorAll('.more-card-info-btn');

	filterSection.classList.remove('open');
	catalogContainer.classList.remove('opacity');

	addItemToCartBtn.forEach((elem:HTMLElement) =>{
			elem.classList.remove('disable');
	});
	
	itemInfoBtn.forEach((elem:HTMLElement) =>{
			elem.classList.remove('disable');
	});

	cardsList.removeEventListener("click", closeFiltersList, true);
	return;
}

export {openFiltersList, closeFiltersList}