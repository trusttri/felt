/*

The five principles of consent are from https://consentful.systems/
(research by Jane Im and colleagues - https://imjane.net)

*/

export type ConsentType = 'consentful' | 'unconsentful';

export type ConsentPrincipleType =
	| 'voluntary'
	| 'informed'
	| 'revertible'
	| 'specific'
	| 'unburdensome';

export const consentPrincipleTypes: ConsentPrincipleType[] = [
	'voluntary',
	'informed',
	'revertible',
	'specific',
	'unburdensome',
];

export interface ConsentPrinciple {
	type: ConsentPrincipleType;
	summary: string;
}

export const consentPrinciplesData: ConsentPrinciple[] = [
	{
		type: 'voluntary',
		summary: 'Consent is an agreement that is 1) freely given and 2) enthusiastic.',
	},
	{
		type: 'informed',
		summary:
			'People can only consent to an interaction after being given correct information about it—in an accessible way.',
	},
	{
		type: 'revertible',
		summary: 'Consent is an ongoing negotiation and can be revoked at any time.',
	},
	{
		type: 'specific',
		summary:
			'People should be able to consent to a particular action (or a particular person), and not a series of actions or people.',
	},
	{
		type: 'unburdensome',
		summary:
			'The costs associated with giving consent should not be so high that a person gives in and says "yes" when they would rather say "no."',
	},
];

const [voluntary, informed, revertible, specific, unburdensome] = consentPrinciplesData;

export const consentPrinciples: Record<ConsentPrincipleType, ConsentPrinciple> = {
	voluntary,
	informed,
	revertible,
	specific,
	unburdensome,
};
