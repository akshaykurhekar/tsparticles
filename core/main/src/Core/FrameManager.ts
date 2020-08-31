import type { Container } from "./Container";

/**
 * @category Core
 */
export class FrameManager {
    constructor(private readonly container: Container) {}

    public nextFrame(timestamp: DOMHighResTimeStamp): void {
        try {
            const container = this.container;
            const options = container.options;

            // FPS limit logic
            // If we are too fast, just draw without updating
            const fpsLimit = options.fpsLimit > 0 ? options.fpsLimit : 60;

            if (container.lastFrameTime !== undefined && timestamp < container.lastFrameTime + 1000 / fpsLimit) {
                container.draw();
                return;
            }

            const deltaValue = timestamp - container.lastFrameTime;

            const delta = {
                value: deltaValue,
                factor: options.fpsLimit > 0 ? (60 * deltaValue) / 1000 : 3.6,
            };

            container.lastFrameTime = timestamp;

            container.particles.draw(delta);

            if (container.getAnimationStatus()) {
                container.draw();
            }
        } catch (e) {
            console.error("tsParticles error in animation loop", e);
        }
    }
}
