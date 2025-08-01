"use client";
import "./Accordion.css"
import { useState } from "react";
import {FQA} from "@/interface/global";
import {AccordionItem} from "@/shared/ui";

interface AccordionProps {
    items: FQA[];
}

export const Accordion = ({ items }: AccordionProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    return (
        <div className="elementor-element elementor-element-3eb588f elementor-widget animated fadeInRight">
            <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                    <div className="elementskit-accordion">
                        {items.map((item, index: number) => (
                            <AccordionItem fqa={item} key={item.id} isActive={index === activeIndex} onClick={() => handleToggle(index)}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
