export function createTooltip(key, value) {
  const tooltip = document.createElement('div');
  const tooltipKey = document.createElement('span');

  tooltip.classList.add('tooltip');
  tooltipKey.classList.add('tooltip__span');

  tooltip.setAttribute('role', 'tooltip');
  tooltip.id = 'contact-tooltip';

  if (value) {
    const tooltipValue = document.createElement('span');

    tooltipKey.textContent = `${key}:`;
    tooltipValue.textContent = value;

    tooltipValue.classList.add('tooltip__span');

    tooltip.append(tooltipKey, tooltipValue);
  } else {
    tooltipKey.textContent = key;
    tooltip.append(tooltipKey);
  }

  return tooltip
}
