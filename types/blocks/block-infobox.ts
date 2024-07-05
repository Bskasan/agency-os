import type { File } from '../system';

export interface BlockInfoBox {
	id?: string;
	title?: string | null;
	headline?: string | null;
	items?: (number | BlockInfoBoxItem)[];
}
export interface BlockInfoBoxItem {
	id?: string;
	title?: string | null;
	content?: string | null;
	image?: (string | File) | null;
	block_steps?: (string | BlockInfoBox) | null;
}
