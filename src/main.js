import { INITIAL_DELAY } from "./config/config.js";
import { initializeBaffleEffects } from "./services/baffleService.js";

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(initializeBaffleEffects, INITIAL_DELAY);
});
