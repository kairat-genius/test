"use client";
import {FC} from "react";
import {Link} from "@/i18n/routing";
import {usePathname} from "next/navigation";

interface NavLinkProps {
    linkActive: string;
    linkText: string;
}


export const NavLink: FC<NavLinkProps> = ({ linkActive, linkText = "About" }) => {
    const pathname = usePathname();
    const isActive = (path: string) => {
        return pathname === path ? "current-menu-ancestor" : "";
    };
    return (

        <li className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-706 nav-item elementskit-dropdown-has relative_position elementskit-dropdown-menu-default_width elementskit-mobile-builder-content ${isActive(linkActive)}`}>
            <Link href={linkActive} className="ekit-menu-nav-link ekit-menu-dropdown-toggle">
                {linkText}
            </Link>
        </li>

    );
};
