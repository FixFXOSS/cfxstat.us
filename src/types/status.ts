export type ServiceStatus = "operational" | "degraded" | "partial" | "major" | "unknown";

export interface ServiceEndpoint {
	/** Unique identifier */
	id: string;
	/** Display name */
	name: string;
	/** URL to health-check */
	url: string;
	/** Optional description */
	description?: string;
	/** HTTP method (default GET) */
	method?: "GET" | "HEAD" | "POST";
	/** Expected status code (default 200) */
	expectedStatus?: number;
	/** Accept partial matches, e.g. 2xx */
	acceptRange?: boolean;
}

export interface ServiceCategory {
	/** Unique identifier */
	id: string;
	/** Display name */
	name: string;
	/** Icon name (lucide) */
	icon: string;
	/** Accent colour class */
	color: string;
	/** Endpoints in this category */
	services: ServiceEndpoint[];
}

export interface ServiceResult {
	id: string;
	name: string;
	status: ServiceStatus;
	responseTime: number | null;
	statusCode: number | null;
	checkedAt: string;
	error?: string;
}

export interface CategoryResult {
	id: string;
	name: string;
	icon: string;
	color: string;
	overallStatus: ServiceStatus;
	services: ServiceResult[];
}

export interface StatusSummary {
	overall: ServiceStatus;
	categories: CategoryResult[];
	lastChecked: string;
	totalServices: number;
	operationalCount: number;
}
