import Link from "next/link";

const FooterLinks = {
    PROTOCOL: [
        { name: "Documentation", href: "#" },
        { name: "Whitepaper", href: "#" },
        { name: "Security", href: "#" },
    ],
    DEVELOPERS: [
        { name: "Quick Start", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "SDK", href: "#" },
        { name: "GitHub", href: "#" },
    ],
    COMMUNITY: [
        { name: "Discord", href: "#" },
        { name: "Twitter", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
    ],
};

export const Footer = () => {
    const sections = Object.entries(FooterLinks) as [string, { name: string; href: string }[]][];

    return (
        <div className="px-8 py-12">
            {/* mobile: 2 columns, md and up: 4 columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
                {/* make logo span full width on small screens if desired */}
                <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
                    <h3 className="text-xl font-bold text-foreground">JAINCO</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        The coordination layer for all chains. Fast, verifiable, and trust-minimized.
                    </p>
                </div>

                {sections.map(([title, links]) => (
                    <div key={title} className="flex flex-col gap-3">
                        <h4 className="text-xs font-mono text-primary tracking-wider">{title}</h4>
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>

            <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-muted-foreground font-mono">© 2025 JAINCO. ALL RIGHTS RESERVED.</p>
                <div className="flex gap-6 text-xs text-muted-foreground font-mono">
                    <Link href="#" className="hover:text-foreground transition-colors">
                        PRIVACY
                    </Link>
                    <Link href="#" className="hover:text-foreground transition-colors">
                        TERMS
                    </Link>
                    <Link href="https://pranjaljain.live/" className="hover:text-foreground transition-colors">
                        CONTACT
                    </Link>
                </div>
            </div>
        </div>
    );
};
