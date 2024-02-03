function gettingCurrentDate(){
	const now = new Date();
	const dd = String(now.getDate()).padStart(2, '0');
	const mm = String(now.getMonth() + 1).padStart(2, '0'); //January is 0!
	const yyyy = now.getFullYear();

	const today = yyyy + '-' + mm + '-' + dd;
	return today;
}

export {gettingCurrentDate}