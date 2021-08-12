export interface Lock<TKey = any> {
	has(key: TKey): boolean;
	peek(): TKey | null;
	lock(key: TKey): boolean;
	unlock(key: TKey): boolean;
}

// TODO look at `Obtainable`
// TODO maybe this is a good usecase for xstate? or is that a little much?
export const create_lock = <TKey>(initial_key: TKey | null = null): Lock<TKey> => {
	let locked_key: TKey | null = initial_key;
	const has = (key: TKey): boolean => key === locked_key;
	const peek = (): TKey | null => locked_key;
	const lock = (key: TKey): boolean => {
		if (Object.is(locked_key, key)) return true;
		if (locked_key === null) {
			locked_key = key;
			return true;
		}
		return false;
	};
	const unlock = (key: TKey): boolean => {
		if (locked_key === key) {
			locked_key = null;
			return true;
		}
		return false;
	};
	return {has, peek, lock, unlock};
};
