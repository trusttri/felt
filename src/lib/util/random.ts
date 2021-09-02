export const randomFloat = (min: number, max: number): number => Math.random() * (max - min) + min;

export const randomInt = (min: number, max: number): number =>
	Math.floor(Math.random() * (max - min + 1)) + min;

export const randomBool = (): boolean => Math.random() > 0.5;

export const randomItem = <T>(arr: T[]): T => arr[randomInt(0, arr.length - 1)];
