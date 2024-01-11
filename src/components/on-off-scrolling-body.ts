function disablingBodyScroll(){
	const body = document.querySelector('body') as HTMLElement;
	body.style.height = '100%';
	body.style.overflowY = 'hidden'
}

function enableBodyScroll(){
	const body = document.querySelector('body') as HTMLElement;
	body.style.height = '';
	body.style.overflowY = ''
}

export{ disablingBodyScroll,enableBodyScroll }