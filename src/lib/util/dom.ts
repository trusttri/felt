// The `tagName` is an `Element` property, but `contentEditable` is only `HTMLElement`s,
// and the possible inputs are all `HTMLElement`, so this type seems correct.
// If needed for things like `EventTarget`s, callers should check `el instanceof HTMLElement`.
export const isEditable = (el: HTMLElement): boolean => {
	const {tagName} = el;
	return tagName === 'INPUT' || tagName === 'TEXTAREA' || el.contentEditable === 'true';
};
