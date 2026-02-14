import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import StatusPageLayout from "@/components/layouts/StatusPageLayout";
import { serviceCategories } from "@/data/services";
import { checkAllServices } from "@/utils/status-checker";
import type { StatusSummary } from "@/types/status";

const fetchStatus = createServerFn({ method: "GET" }).handler(
	async (): Promise<StatusSummary> => {
		return checkAllServices(serviceCategories);
	},
);

export const Route = createFileRoute("/")({
	loader: () => fetchStatus(),
	component: StatusPage,
});

function StatusPage() {
	const data = Route.useLoaderData();
	return <StatusPageLayout initialData={data} />;
}
