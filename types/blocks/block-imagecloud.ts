import type { File } from '../system';

export interface BlockImageCloud {
	headline?: string | null;
	id?: string;
	title?: string | null;
	images?: (string | BlockImageCloudFile)[];
}
export interface BlockImageCloudFile {
	id?: string;
	sort?: number | null;
	link_to?: string;
	block_imagecloud_id?: (string | BlockImageCloud) | null;
	directus_files_id?: (string | File) | null;
}
