export interface Sketch {
	id: string;
	name: string;
}

export const to_sketch_id = (name: string): string => `/sketch/${name}`;

export const sketches: Sketch[] = ['onboard', 'library'].map((name) => ({
	name,
	id: to_sketch_id(name),
}));
