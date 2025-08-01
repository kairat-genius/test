"use client";
import {useState} from "react";
import {Link} from "@/i18n/routing"
import {NavLink} from "@/widgets/Header/ui/NavLink";
import Image from "next/image";
import {useTranslations} from "next-intl";

export const NavBar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const t = useTranslations('header');

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };
    return (
        <div className="elementor-element elementor-element-9c9836a e-con-full e-flex e-con e-child">
            <div
                className="elementor-element elementor-element-fd50fce elementor-widget elementor-widget-ekit-nav-menu">
                <div className="elementor-widget-container">
                    <nav className="ekit-wid-con ekit_menu_responsive_tablet">
                        <button className="elementskit-menu-hamburger elementskit-menu-toggler" type="button"
                                aria-label="hamburger-icon" onClick={toggleMenu}>
                            <span className="elementskit-menu-hamburger-icon"></span>
                            <span className="elementskit-menu-hamburger-icon"></span>
                            <span className="elementskit-menu-hamburger-icon"></span>
                        </button>
                        <div
                            className={`elementskit-menu-container elementskit-menu-offcanvas-elements elementskit-navbar-nav-default ekit-nav-menu-one-page-no ekit-nav-dropdown-hover ${menuActive ? "active" : ""}`}>
                            <ul className="elementskit-navbar-nav elementskit-menu-po-center submenu-click-on-icon">
                                <NavLink linkActive="/about" linkText={t('about')}/>
                                <NavLink linkActive="/services" linkText={t('services')}/>
                                <NavLink linkActive="/portfolio" linkText={t('portfolio')}/>
                                <NavLink linkActive="/pricing-plan" linkText={t('pricingPlan')}/>
                                <NavLink linkActive="/team" linkText={t('team')}/>
                                <NavLink linkActive="/faqs" linkText={t('faqs')}/>
                                <NavLink linkActive="/blog" linkText={t('blog')}/>
                                <NavLink linkActive="/contact" linkText={t('contact')}/>

                            </ul>
                            <div className="elementskit-nav-identity-panel">
                                <div className="elementskit-site-title">
                                    <Link className="elementskit-nav-logo" href="/">
                                        <Image
                                            width={869}
                                            height={398}
                                            src="https://templatekit.bittheme.net/next/wp-content/uploads/sites/2/2024/10/Logo-1.webp"
                                            className="attachment-full size-full"
                                            alt="Logo Navbar"
                                        />
                                    </Link>
                                </div>
                                <button className="elementskit-menu-close elementskit-menu-toggler" type="button"
                                        onClick={toggleMenu}>
                                    X
                                </button>
                            </div>
                        </div>
                        <div
                            className={`elementskit-menu-overlay elementskit-menu-offcanvas-elements elementskit-menu-toggler ekit-nav-menu--overlay ${menuActive ? "active" : ""}`}></div>
                    </nav>
                </div>
            </div>
        </div>

    );
};
