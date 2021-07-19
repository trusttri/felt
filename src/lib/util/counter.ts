export interface Counter {
	(): number;
}

export interface To_Counter {
	(initial?: number): Counter;
}

// 0-based counter by default
export const to_counter: To_Counter =
	(count = 0) =>
	() =>
		count++;
