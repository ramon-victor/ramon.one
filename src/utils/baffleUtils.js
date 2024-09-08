import { BAFFLE_CONFIG, BAFFLE_DURATION, INTERMEDIATE_DURATION } from "../config/config.js";

function createBaffle(element) {
	return baffle(element, BAFFLE_CONFIG);
}

export function baffleAndReveal(element) {
	const b = createBaffle(element);
	b.start();
	b.reveal(BAFFLE_DURATION);
}

export function baffleAndChange(element, newText) {
	const b = createBaffle(element);
	b.start();
	setTimeout(() => {
		b.stop();
		element.textContent = newText;
	}, BAFFLE_DURATION);
}

export function complexBaffleTransformation(element, intermediateText, finalText) {
	const b1 = createBaffle(element);
	b1.start();

	setTimeout(() => {
		b1.stop();
		element.textContent = intermediateText;

		setTimeout(() => {
			const b2 = createBaffle(element);
			b2.start();

			setTimeout(() => {
				b2.stop();
				element.textContent = finalText;
			}, BAFFLE_DURATION);
		}, INTERMEDIATE_DURATION);
	}, BAFFLE_DURATION);
}
