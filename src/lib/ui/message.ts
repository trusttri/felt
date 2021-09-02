import {handPointRight, handThumbsUp, handFacingForward, sparkle} from '$lib/ui/icons';

export type MessageStatus = 'normal' | 'help' | 'error' | 'inform';

export interface MessageStatusOptions {
	color: null | string;
	icon: string | null;
}

export const messageStatusOptions: Record<MessageStatus, MessageStatusOptions> = {
	normal: {color: 'var(--text_color_light)', icon: handThumbsUp},
	help: {color: 'var(--help_color)', icon: handPointRight},
	error: {color: 'var(--error_color)', icon: handFacingForward},
	inform: {color: 'var(--text_color_light)', icon: sparkle},
};
