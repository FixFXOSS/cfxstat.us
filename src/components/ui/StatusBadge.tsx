import type { ServiceStatus } from "@/types/status";
import { cn } from "@/utils/cn";

const statusConfig: Record<
	ServiceStatus,
	{ label: string; color: string; bg: string; dot: string; glow: string }
> = {
	operational: {
		label: "Operational",
		color: "text-emerald-400",
		bg: "bg-emerald-500/10 border-emerald-500/20",
		dot: "bg-emerald-400",
		glow: "shadow-emerald-500/30",
	},
	degraded: {
		label: "Degraded",
		color: "text-yellow-400",
		bg: "bg-yellow-500/10 border-yellow-500/20",
		dot: "bg-yellow-400",
		glow: "shadow-yellow-500/30",
	},
	partial: {
		label: "Partial Outage",
		color: "text-orange-400",
		bg: "bg-orange-500/10 border-orange-500/20",
		dot: "bg-orange-400",
		glow: "shadow-orange-500/30",
	},
	major: {
		label: "Major Outage",
		color: "text-red-400",
		bg: "bg-red-500/10 border-red-500/20",
		dot: "bg-red-400",
		glow: "shadow-red-500/30",
	},
	unknown: {
		label: "Unknown",
		color: "text-gray-400",
		bg: "bg-gray-500/10 border-gray-500/20",
		dot: "bg-gray-400",
		glow: "shadow-gray-500/30",
	},
};

interface StatusBadgeProps {
	status: ServiceStatus;
	size?: "sm" | "md" | "lg";
	showDot?: boolean;
}

export function StatusBadge({
	status,
	size = "md",
	showDot = true,
}: StatusBadgeProps) {
	const cfg = statusConfig[status];

	const sizeClasses = {
		sm: "text-xs px-2 py-0.5",
		md: "text-sm px-3 py-1",
		lg: "text-base px-4 py-1.5",
	};

	return (
		<span
			className={cn(
				"inline-flex items-center gap-1.5 rounded-full border font-medium",
				cfg.bg,
				cfg.color,
				sizeClasses[size],
			)}
		>
			{showDot && (
				<span className="relative flex h-2 w-2">
					{status === "operational" && (
						<span
							className={cn(
								"absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
								cfg.dot,
							)}
						/>
					)}
					<span
						className={cn("relative inline-flex h-2 w-2 rounded-full", cfg.dot)}
					/>
				</span>
			)}
			{cfg.label}
		</span>
	);
}

export { statusConfig };
