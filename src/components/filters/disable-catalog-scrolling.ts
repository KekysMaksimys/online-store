function disablingCatalogScroll(){
	const catalog = document.querySelector('.catalog-container') as HTMLElement;
	catalog.style.height = '1226px';
	catalog.style.overflowY = 'hidden'
}

function enableCatalogScroll(){
	const catalog = document.querySelector('.catalog-container') as HTMLElement;
	catalog.style.height = '';
	catalog.style.overflowY = ''
}

export{ disablingCatalogScroll,enableCatalogScroll }