import { createFileRoute } from "@tanstack/react-router";
import LinkHubContent from "@/components/layouts/LinkHubContent";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/")({ component: LinksPage });

function LinksPage() {
	return <LinkHubContent profile={profile} />;
}
