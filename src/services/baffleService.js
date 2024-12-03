import { SELECTORS } from "../constants/selectors.js";
import { TRANSFORMATIONS } from "../constants/transformation.js";
import { baffleAndReveal, baffleAndChange, complexBaffleTransformation } from "../utils/baffleUtils.js";

export function initializeBaffleEffects() {
    const allBaffleElements = document.querySelectorAll(SELECTORS.allBaffle);
    const firstLetter = document.querySelector(SELECTORS.firstLetter);
    const domain = document.querySelector(SELECTORS.domain);

    allBaffleElements.forEach((el) => {
        if (el === firstLetter) {
            baffleAndChange(el, TRANSFORMATIONS.firstLetter);
        } else if (el === domain) {
            complexBaffleTransformation(el, TRANSFORMATIONS.domainIntermediate, TRANSFORMATIONS.domainFinal);
        } else {
            baffleAndReveal(el);
        }
    });
}
