import { Activity, ExternalLink } from "lucide-react";

export function StatusHeader() {
	return (
		<header className="border-b border-white/6 bg-white/2 backdrop-blur-md">
			<div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 md:px-6">
				<div className="flex items-center gap-3">
					<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 border border-blue-500/20">
						<Activity size={18} className="text-blue-400" />
					</div>
					<div>
						<h1 className="text-lg font-bold text-white tracking-tight">
							CFX Status
						</h1>
						<p className="text-[11px] text-gray-500 uppercase tracking-widest">
							Unofficial
						</p>
					</div>
				</div>

				<a
					href="https://fixfx.wiki"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
				>
					by FixFX
					<ExternalLink size={12} />
				</a>
			</div>
		</header>
	);
}
