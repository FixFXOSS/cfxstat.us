import type { LinkHubProfile } from "@/types/links";
import { socialLinks } from "./social-links";
import { categories } from "./categories";

export const profile: LinkHubProfile = {
	name: "FixFX",
	avatar: "/fixfx-logo.svg",
	title: "FiveM Documentation & Resources",
	bio: "Your comprehensive resource for FiveM development documentation, guides, native references, and community tools.",
	featuredLinks: [
		{
			id: "website",
			title: "FixFX Wiki",
			url: "https://fixfx.wiki",
			icon: "Globe",
			description: "Browse the official FixFX documentation hub",
			color: "bg-blue-500",
			featured: true,
		},
		{
			id: "artifacts",
			title: "FiveM Artifacts",
			url: "https://fixfx.wiki/artifacts",
			icon: "Package",
			description: "Explore and download FiveM server artifacts",
			color: "bg-purple-500",
			featured: true,
		},
		{
			id: "natives",
			title: "Native Reference",
			url: "https://fixfx.wiki/natives",
			icon: "Code",
			description: "Complete FiveM native function documentation",
			color: "bg-cyan-500",
			featured: true,
		},
        {
            id: 'fixie',
            title: "Meet Fixie",
            url: "https://fixfx.wiki/chat",
            icon: "/fixfx-logo.svg",
            description: "Get some guided assistance with all your CFX needs.",
            color: "bg-blue-500",
            featured: true,
        },
		{
			id: "discord",
			title: "Join our Discord",
			url: "https://discord.gg/cYauqJfnNK",
			icon: "/discord.png",
			description: "Connect with the FixFX community",
			color: "bg-indigo-500",
			featured: true,
		},
	],
	socialLinks,
	categories,
};
