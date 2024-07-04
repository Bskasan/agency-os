import type { File } from '../system';

export interface BlockLogoCloud {
	headline?: string | null;
	id?: string;
	title?: string | null;
	logos?: (string | BlockLogoCloudFile)[];
}
export interface BlockLogoCloudFile {
	id?: string;
	sort?: number | null;
	block_logocloud_id?: (string | BlockLogoCloud) | null;
	directus_files_id?: (string | File) | null;
}
