import type { INoise } from "../../../Interfaces/Particles/Noise/INoise";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { NoiseDelay } from "./NoiseDelay";

/**
 * @category Options
 */
export class Noise implements INoise, IOptionLoader<INoise> {
    public delay;
    public enable;

    constructor() {
        this.delay = new NoiseDelay();
        this.enable = false;
    }

    public load(data?: RecursivePartial<INoise>): void {
        if (data === undefined) {
            return;
        }

        this.delay.load(data.delay);

        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
    }
}
