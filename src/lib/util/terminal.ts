import {red, yellow, green, cyan, blue, magenta} from 'kleur/colors';

export {
	black,
	red,
	green,
	yellow,
	blue,
	magenta,
	cyan,
	white,
	gray,
	bgBlack as blackBg,
	bgRed as redBg,
	bgGreen as greenBg,
	bgYellow as yellowBg,
	bgBlue as blueBg,
	bgMagenta as magentaBg,
	bgCyan as cyanBg,
	bgWhite as whiteBg,
	reset,
	bold,
	dim,
	italic,
	underline,
	inverse,
	hidden,
	strikethrough,
} from 'kleur/colors';

const rainbowColors = [red, yellow, green, cyan, blue, magenta];

export const rainbow = (str: string): string =>
	Array.from(str)
		.map((char, i) => rainbowColors[i % rainbowColors.length](char))
		.join('');
