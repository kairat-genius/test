"use client"
import React, {useState} from "react";
import "./SwitchLanguage.css";
import Image from "next/image";
import { useParams} from "next/navigation";
import { redirect, usePathname } from "@/i18n/routing";
import {SUPPORTED_LOCALES_LABEL, SUPPORTED_LOCALES} from "@/fetch/settings";

export const SwitchLanguage = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const {locale} = useParams<{locale: string}>();
    const pathname = usePathname();

    // Создаем массив объектов с кодом и названием языка
    const languages = SUPPORTED_LOCALES.map((code, index) => ({
        code,
        label: SUPPORTED_LOCALES_LABEL[index] || code
    }));

    // Находим текущий язык
    const currentLanguage = languages.find(lang => lang.code === locale)?.label || '';

    const handleLanguageChange = (langCode: string) => {
        redirect({href: pathname, locale: langCode});
    };

    const toggleCollapse = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="elementor-element elementor-element-441fe3e e-con-full elementor-hidden-mobile e-flex e-con e-child">
            <div className={`menubox ${isCollapsed ? 'menubox--collapsed' : ''}`} onClick={toggleCollapse}>
                <div className="menubox__label">
                    <Image
                        src="/img/lang/lang.svg"
                        className="material-icons"
                        alt="Language switch"
                        width={24}
                        height={24}
                        style={{ filter: 'invert(1)' }}
                    />
                    <span className="menubox__label-text">{currentLanguage}</span>
                </div>
                <div className={`menubox__contents ${isCollapsed ? 'menubox__contents--collapsed' : ''}`}>
                    <ul className="menubox__options">
                        {languages
                            .filter(lang => lang.code !== locale)
                            .map((lang, index) => (
                                <li
                                    className="menubox__option"
                                    key={lang.code}
                                    onClick={(e: React.MouseEvent<HTMLLIElement>) => {
                                        e.stopPropagation();
                                        handleLanguageChange(lang.code);
                                    }}
                                >
                                    <div
                                        className="menubox__option-toggle"
                                        style={{ animationDelay: `${index * 0.05}s` }}
                                    >
                                        <span className="menubox__option-label">{lang.label}</span>
                                        <span className="menubox__option-toggle-check"></span>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};