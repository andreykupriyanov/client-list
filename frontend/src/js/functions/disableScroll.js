export const disableScroll = function () {
  const body = document.body;
	const pagePosition = window.scrollY;
  const padding = window.innerWidth - body.offsetWidth + 'px';

	body.classList.add('disable-scroll');
	body.dataset.position = pagePosition;
	body.style.top = -pagePosition + 'px';
	body.style.paddingRight = padding;
}
