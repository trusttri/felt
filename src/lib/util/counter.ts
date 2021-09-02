export interface Counter {
	(): number;
}

export interface ToCounter {
	(initial?: number): Counter;
}

// 0-based counter by default
export const toCounter: ToCounter =
	(count = 0) =>
	() =>
		count++;
