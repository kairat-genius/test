import React from 'react';

interface HeadingProps {
  children: string;
  align?: string;
  level?: number; // Уровень заголовка (1-6)
  color?: string;
}

export const Heading = ({ children, align, color, level = 2 }: HeadingProps) => {
  const validLevel = Math.min(Math.max(level, 1), 6);
  const Tag = `h${validLevel}` as React.ElementType;

  const divClassName = `elementor-element elementor-widget elementor-widget-heading animated ${
    align === "center" ? "text-center" : ""
  } ${color ? `color-${color}` : ""}`;

  return (
  <div className={divClassName.trim()}>
      <div className="elementor-widget-container">
        <Tag className="elementor-heading-title elementor-size-default">
          {children}
        </Tag>
      </div>
    </div>
  );
};