export const enableScroll = function () {
  const body = document.body;
	const pagePosition = parseInt(body.dataset.position, 10);
	body.style.top = 'auto';
	body.classList.remove('disable-scroll');
	window.scroll({
		top: pagePosition,
		left: 0
	});
	body.removeAttribute('data-position');
	body.style.paddingRight = 0;
}
