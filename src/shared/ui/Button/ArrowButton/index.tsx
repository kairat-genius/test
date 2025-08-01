import React from 'react';
import "./navigationButton.css"
interface ArrowButtonProps {
    direction: 'prev' | 'next'; // Направление кнопки
    ariaControls: string; // Атрибут aria-controls
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, ariaControls }) => {
    // Определяем путь для SVG в зависимости от направления
    const svgPath = direction === 'prev' ? (
        <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path>
    ) : (
        <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
    );

    return (
        <button
            type="button"
            data-controls={direction}
            tabIndex={-1}
            aria-controls={ariaControls}
            className="arrow_button"
        >
      <span>
        <svg
            aria-hidden="true"
            className={`e-font-icon-svg e-fas-angle-${direction === 'prev' ? 'left' : 'right'}`}
            viewBox="0 0 256 512"
            xmlns="http://www.w3.org/2000/svg"
        >
          {svgPath}
        </svg>
      </span>
        </button>
    );
};