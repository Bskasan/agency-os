import type { BlockButtonGroup } from './block-button-group';

export interface BlockReviews {
	id?: string;
	title?: string;
	headline?: string;
	button_group?: (string | BlockButtonGroup) | null;
}
