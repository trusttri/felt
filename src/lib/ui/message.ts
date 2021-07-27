import {hand_point_right, hand_thumbs_up, hand_facing_forward} from '$lib/ui/icons';

export type Message_Status = 'normal' | 'help' | 'error';

export interface Message_Status_Options {
	color: null | string;
	icon: string | null;
}

export const message_status_options: Record<Message_Status, Message_Status_Options> = {
	normal: {color: 'var(--text_color_light)', icon: hand_thumbs_up},
	help: {color: 'var(--help_color)', icon: hand_point_right},
	error: {color: 'var(--error_color)', icon: hand_facing_forward},
};
