export interface LinkItem {
	id: string;
	title: string;
	url: string;
	icon?: string;
	description?: string;
	color?: string;
	featured?: boolean;
	category?: string;
	new?: boolean;
}

export interface SocialLink extends LinkItem {
	username?: string;
	followers?: number;
}

export interface LinkCategory {
	id: string;
	name: string;
	description?: string;
	icon?: string;
	color?: string;
	links: LinkItem[];
}

export interface LinkHubProfile {
	name: string;
	avatar: string;
	title: string;
	bio: string;
	featuredLinks: LinkItem[];
	socialLinks: SocialLink[];
	categories: LinkCategory[];
}
