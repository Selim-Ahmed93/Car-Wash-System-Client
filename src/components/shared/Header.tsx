import Link from "next/link";
import { LogIn } from "lucide-react";

// Local number shown in the top bar; links need the +880 country code.
const PHONE_DISPLAY = "01912646793";
const PHONE_HREF = "tel:+8801912646793";
const WHATSAPP_HREF = "https://wa.me/8801912646793";

const LogoMark = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="Car wash logo"
        className={className}
    >
        <defs>
            <linearGradient id="logo-bg" x1="16" y1="6" x2="46" y2="58" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2f4f94" />
                <stop offset="1" stopColor="#111f3d" />
            </linearGradient>
        </defs>

        <circle cx="32" cy="32" r="32" fill="url(#logo-bg)" />

        {/* foam bubbles */}
        <circle cx="24" cy="20" r="3.4" fill="#8fd3ff" opacity=".55" />
        <circle cx="31" cy="15.5" r="2" fill="#b9e4ff" opacity=".45" />
        <circle cx="37.5" cy="19.5" r="2.6" fill="#8fd3ff" opacity=".4" />

        {/* sparkles */}
        <path
            d="M15.5 12.6v4.4M13.3 14.8h4.4M49 15v4M47 17h4"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity=".9"
        />

        {/* car */}
        <ellipse cx="32" cy="49.6" rx="19" ry="2.2" fill="#081428" opacity=".55" />
        <path
            d="M13 43.2v-4.5c0-1.7 1.2-3.1 2.9-3.4l3.5-.7 2.7-4.9a5 5 0 0 1 4.4-2.6h11a5 5 0 0 1 4.4 2.6l2.7 4.9 3.5.7c1.7.3 2.9 1.7 2.9 3.4v4.5a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2Z"
            fill="#ffc30d"
        />
        <path
            d="M24.8 35.6l2-3.7a2.2 2.2 0 0 1 2-1.2h6.4a2.2 2.2 0 0 1 2 1.2l2 3.7Z"
            fill="#102a52"
        />
        <circle cx="22" cy="45.6" r="5" fill="#0d1a33" />
        <circle cx="22" cy="45.6" r="1.9" fill="#ffc30d" />
        <circle cx="42" cy="45.6" r="5" fill="#0d1a33" />
        <circle cx="42" cy="45.6" r="1.9" fill="#ffc30d" />
    </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
);

const Header = () => {
    return (
        <header className="w-full bg-brand-navy">
            <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-5 sm:h-[92px] sm:px-8 lg:px-16">
                <Link
                    href="/"
                    aria-label="Car wash home"
                    className="group flex items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
                >
                    <LogoMark className="size-14 shrink-0 rounded-full shadow-[0_10px_26px_rgba(2,10,30,0.45)] ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105 sm:size-[76px]" />
                </Link>

                <div className="flex items-center gap-1 sm:gap-2">
                    <a
                        href={PHONE_HREF}
                        className="mr-1 text-[11px] font-medium tracking-tight text-white/85 transition-colors hover:text-brand-yellow sm:mr-2 sm:text-[15px]"
                    >
                        <span className="hidden sm:inline">Call us now: </span>
                        <span className="font-semibold whitespace-nowrap text-white">{PHONE_DISPLAY}</span>
                    </a>

                    <a
                        href={WHATSAPP_HREF}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat with us on WhatsApp"
                        className="inline-flex size-9 items-center justify-center rounded-full text-white/85 transition-colors hover:bg-white/10 hover:text-brand-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    >
                        <WhatsAppIcon className="size-[19px]" />
                    </a>

                    <Link
                        href="/signin"
                        className="ml-1 inline-flex h-9 items-center gap-2 rounded-full border border-white/25 px-3 text-[12px] font-semibold text-white/90 transition-colors hover:border-white/50 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:px-4 sm:text-[13px]"
                    >
                        <LogIn className="size-[16px]" strokeWidth={2} />
                        Sign In
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
