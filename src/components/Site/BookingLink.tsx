"use client";

import CONSTANTS from "@/constant";

const POPUP_WIDTH = 800;
const POPUP_HEIGHT = 700;

type BookingLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function BookingLink({ className, children, ...props }: BookingLinkProps) {
    const url = CONSTANTS.calComBookingUrl;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const win = window.open(
            url,
            "cal-booking",
            `width=${POPUP_WIDTH},height=${POPUP_HEIGHT},scrollbars=yes,resizable=yes`
        );
        if (!win) window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className={className}
            {...props}
        >
            {children}
        </a>
    );
}
