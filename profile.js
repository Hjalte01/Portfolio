let filterLang = document.querySelectorAll('#filterContainer p');

// tab go back to start or end if tabbing above limits
document.querySelector('[tabindex="0"]:first-of-type').addEventListener('keydown', (event) => {
	if (event.shiftKey && event.key === 'Tab') {
		event.preventDefault();
		document.querySelector('.projekterLinks a:last-of-type').focus();
	}
});
document.querySelector('.projekterLinks [tabindex="0"]:last-of-type').addEventListener('keydown', (event) => {
	if (event.key === 'Tab' && !event.shiftKey) {
		event.preventDefault();
		document.querySelector('[tabindex="0"]:first-of-type').focus();
	}
});

// change tabindex for ahref in menu (-1/0)
(document.querySelector('#box1').onchange = function tabHref() {
	document.querySelectorAll('#menu-grid *[tabindex]').forEach((element) => {
		element.tabIndex ^= -1;
	});
})();
// filter for libaries and languages - setting root property in js so it's changeable
document.documentElement.style.setProperty('--filter-clr', 'green');
document.querySelector('#filterContainer').onclick = (e) => {
	for (let i = 0; i < filterLang.length; i++) {
		if (e.target == filterLang[i]) {
			e.target.classList.toggle('filterPOff');
		}
	}
};
