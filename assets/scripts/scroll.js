const container = document.getElementById("panels");
const panels = Array.from(container.children);
const panelWidth  = panels[0].offsetWidth;
const containerWidth = panelWidth * panels.length;

let currentPosition = 0;

const moveStep = 1;

function movePanels() {
	currentPosition -= moveStep;
	container.stype.transform = 'translateX(${currentPosition}px)';

	if (Math.abs(currentPosition >= panelWidth)) {
		const firstPanel = panels.shift();
		panels.push(firstPanel);
		container.appendChild(firstPanel);

		currentPosition = 0;

		container.style.transition = 'none';
		setTimeout(() => {
			container.style.transition = 'transform 1s ease-out';
		}, 20);
	}
}

