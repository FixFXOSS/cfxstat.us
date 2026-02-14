import { createFileRoute } from "@tanstack/react-router";
import StatusPageLayout from "@/components/layouts/StatusPageLayout";

export const Route = createFileRoute("/")({
	component: StatusPage,
});

function StatusPage() {
	return <StatusPageLayout />;
}
