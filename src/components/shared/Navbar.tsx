"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeftRight, Info, LayoutGrid, Menu, X } from "lucide-react";

const links = [
    { href: "/services", label: "Services", icon: LayoutGrid },
    { href: "/compare", label: "Compare", icon: ArrowLeftRight },
    { href: "/about", label: "About Us", icon: Info },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-20 w-full border-b border-black/[0.06] bg-white">
            <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:h-[84px] sm:px-8 lg:px-16">
                <ul className="hidden items-center gap-8 lg:flex xl:gap-11">
                    {links.map(({ href, label, icon: Icon }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className="group flex items-center gap-3 text-[15px] font-medium text-neutral-900 transition-colors hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/30 focus-visible:ring-offset-4 focus-visible:ring-offset-white"
                            >
                                <Icon
                                    className="size-[18px] text-neutral-700 transition-colors group-hover:text-brand-navy"
                                    strokeWidth={1.75}
                                />
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-1 items-center justify-between gap-3 lg:flex-none lg:justify-end">
                    <button
                        type="button"
                        onClick={() => setIsOpen((open) => !open)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        className="inline-flex size-10 items-center justify-center rounded-lg text-neutral-800 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/30 lg:hidden"
                    >
                        {isOpen ? (
                            <X className="size-5" strokeWidth={1.75} />
                        ) : (
                            <Menu className="size-5" strokeWidth={1.75} />
                        )}
                    </button>

                    <Link
                        href="/book"
                        className="inline-flex h-11 items-center justify-center rounded-[10px] bg-brand-yellow px-6 text-[15px] font-semibold text-white shadow-[0_10px_22px_-12px_rgba(250,176,5,0.85)] transition-all hover:bg-brand-yellow-dark hover:shadow-[0_14px_26px_-12px_rgba(250,176,5,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/30 focus-visible:ring-offset-2 sm:h-14 sm:px-12 sm:text-base"
                    >
                        Book Now
                    </Link>
                </div>
            </div>

            {isOpen && (
                <div
                    id="mobile-menu"
                    className="border-t border-black/[0.06] bg-white px-5 pb-5 pt-2 shadow-lg shadow-black/5 sm:px-8 lg:hidden"
                >
                    <ul className="flex flex-col">
                        {links.map(({ href, label, icon: Icon }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 rounded-lg px-2 py-3 text-[15px] font-medium text-neutral-900 transition-colors hover:bg-neutral-50 hover:text-brand-navy"
                                >
                                    <Icon className="size-[18px] text-neutral-700" strokeWidth={1.75} />
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
