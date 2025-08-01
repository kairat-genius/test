import React from "react";

import {Link} from "@/i18n/routing";

type BreadcrumbItem = {
    label: string;
    path?: string;
};

type BreadcrumbsProps = {
    items: BreadcrumbItem[];
};

export const Breadcrumbs = ({items}: BreadcrumbsProps) => {
    const breadcrumbsItems = [
        {label: "Home", path: "/"},
        ...items,
    ];

    return (
        <div
            className="elementor-element elementor-element-8d7f8c5 elementor-icon-list--layout-inline elementor-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
            <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items elementor-inline-items">
                    {breadcrumbsItems.map((item, index) => (
                        <li key={index} className="elementor-icon-list-item elementor-inline-item">
                            {item.path ? (
                                <Link href={item.path}>
                                    {index > 0 && (
                                        <span className="elementor-icon-list-icon">
                      <i aria-hidden="true" className="icon icon-right-arrow1"></i>
                    </span>
                                    )}
                                    <span className="elementor-icon-list-text">{item.label}</span>
                                </Link>
                            ) : (
                                <>
                                    {index > 0 && (
                                        <span className="elementor-icon-list-icon">
                      <i aria-hidden="true" className="icon icon-right-arrow1"></i>
                    </span>
                                    )}
                                    <span className="elementor-icon-list-text">{item.label}</span>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


