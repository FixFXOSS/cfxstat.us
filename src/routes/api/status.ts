import { createFileRoute } from "@tanstack/react-router";
import { serviceCategories } from "@/data/services";
import { checkAllServices } from "@/utils/status-checker";

export const Route = createFileRoute("/api/status")({
	server: {
		handlers: {
			GET: async () => {
				const summary = await checkAllServices(serviceCategories);
				return Response.json(summary, {
					headers: {
						"Cache-Control": "public, max-age=30, s-maxage=30",
					},
				});
			},
		},
	},
});
