import type {Lazy} from '$lib/util/function.js';
import {lazy} from '$lib/util/function.js';

// TODO validation?

interface ToEnvString {
	(key: string): string | undefined;
	(key: string, fallback: string | Lazy<string>): string;
}

export const to_env_string: ToEnvString = (key: string, fallback?: string | Lazy<string>) => {
	const value = process.env[key];
	return typeof value === 'string' ? value : lazy(fallback)!;
};

interface ToEnvNumber {
	(key: string): number | undefined;
	(key: string, fallback: number | Lazy<number>): number;
}

export const to_env_number: ToEnvNumber = (key: string, fallback?: number | Lazy<number>) => {
	const value = parseInt(process.env[key] || '', 10);
	return Number.isNaN(value) ? lazy(fallback)! : value;
};
