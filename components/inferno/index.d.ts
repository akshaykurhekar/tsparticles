// Type definitions for preact-particles v1.15.0
// Project: https://github.com/matteobruni/react-tsparticles
// Definitions by: Matteo Bruni <https://github.com/matteobruni>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="inferno" />
import type { IParticlesProps, IParticlesState, ParticlesProps } from "./src/";
import type { ISourceOptions } from "tsparticles";
import type { Component } from "inferno";

export type IParticlesParams = IParticlesProps;

export * from "tsparticles/dist/Enums";
export type { ISourceOptions, IParticlesProps, ParticlesProps };

type Particles = Component<IParticlesProps, IParticlesState>;

declare const Particles: Particles;

export default Particles;
