import type { BlockButtonGroup } from '../blocks';
import type { File } from '../system';

export interface BlockHeroWithoutImage {
	id?: string;
	title?: string | null;
	headline?: string | null;
	content?: string | null;
	image?: (string | File) | null;
	button_group?: string | BlockButtonGroup) | null;
}
