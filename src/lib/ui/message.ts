import {hand_point_right, hand_thumbs_up, hand_facing_forward, sparkle} from '$lib/ui/icons';

export type MessageStatus = 'normal' | 'help' | 'error' | 'inform';

export interface MessageStatusOptions {
	color: null | string;
	icon: string | null;
}

export const message_status_options: Record<MessageStatus, MessageStatusOptions> = {
	normal: {color: 'var(--text_color_light)', icon: hand_thumbs_up},
	help: {color: 'var(--help_color)', icon: hand_point_right},
	error: {color: 'var(--error_color)', icon: hand_facing_forward},
	inform: {color: 'var(--text_color_light)', icon: sparkle},
};
