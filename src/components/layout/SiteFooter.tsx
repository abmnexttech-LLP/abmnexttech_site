import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import BrandMark from "@/components/brand/BrandMark";

export default function SiteFooter() {
	const currentYear = new Date().getFullYear();
	const appIdentifier =
		typeof window !== "undefined"
			? window.location.hostname
			: "abm-nexttech";

	return (
		<footer className="border-t border-border/40 bg-muted/30">
			<div className="container py-12">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{/* Company Info */}
					<div>
						<div className="mb-4">
							<BrandMark
								className="h-8 w-auto"
								textClassName="text-xl font-bold"
							/>
						</div>
						<p className="text-sm text-muted-foreground">
							Transforming financial operations through innovative
							technology and expert consulting.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="mb-4 text-sm font-semibold">
							Quick Links
						</h3>
						<nav className="flex flex-col gap-2">
							<Link
								to="/"
								className="text-sm text-muted-foreground hover:text-primary transition-colors"
							>
								Home
							</Link>
							<Link
								to="/services"
								className="text-sm text-muted-foreground hover:text-primary transition-colors"
							>
								Services
							</Link>
							<Link
								to="/product"
								className="text-sm text-muted-foreground hover:text-primary transition-colors"
							>
								Product
							</Link>
							<Link
								to="/contact"
								className="text-sm text-muted-foreground hover:text-primary transition-colors"
							>
								Contact
							</Link>
						</nav>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="mb-4 text-sm font-semibold">Contact</h3>
						<div className="flex flex-col gap-2 text-sm text-muted-foreground">
							<p>Email: {CONTACT_INFO.email}</p>
							<p>Phone: {CONTACT_INFO.phone}</p>
							<p>Address: {CONTACT_INFO.address.full}</p>
						</div>
					</div>
				</div>

				<div className="mt-8 border-t border-border/40 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
					<p className="text-sm text-muted-foreground">
						© {currentYear} ABM Nexttech LLP. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
