export interface Sketch {
	id: string;
	name: string;
}

export const toSketchId = (name: string): string => `/sketch/${name}`;

export const sketches: Sketch[] = ['onboard', 'library'].map((name) => ({
	name,
	id: toSketchId(name),
}));
