export type AsyncStatus = 'initial' | 'pending' | 'success' | 'failure';

export const wait = (duration: number = 0): Promise<void> =>
	new Promise((resolve) => setTimeout(resolve, duration));

interface WrapAfter {
	(cb: WrapAfterCallback): void;
}
interface WrapAfterCallback {
	(): unknown | Promise<unknown>;
}

// TODO consider adding the value/err to the callback params?
export const wrap = <T>(fn: (after: WrapAfter) => Promise<T>): Promise<T> => {
	let cbs: WrapAfterCallback[] | null = null;
	const after: WrapAfter = (cb) => {
		(cbs || (cbs = [])).push(cb);
	};
	const call_cbs = async () => {
		if (cbs === null) return;
		for (const cb of cbs) {
			await cb();
		}
	};
	return fn(after).then(
		async (value) => {
			await call_cbs();
			return value;
		},
		async (err) => {
			await call_cbs();
			throw err;
		},
	);
};
