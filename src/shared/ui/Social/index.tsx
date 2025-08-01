import React from 'react';
import "./Social.css";

interface SocialProps {
  align?: 'center' | 'left';
}

export const Social = ({ align = 'left' }: SocialProps) => {

  return (
      <div className="elementor-element elementor-element-ac191d6">
          <ul className={`ekit_social_media ${align === 'center' ? 'text-center' : ''}`}>
            <li className="elementor-repeater-item-c19d017">
              <a href="#" aria-label="LinkedIn">
                <i aria-hidden="true" className="icon icon-linkedin"></i>
              </a>
            </li>
            <li className="elementor-repeater-item-c19d017">
              <a href="#" aria-label="whatsapp">
                <i aria-hidden="true" className="icon icon-whatsapp-1"></i>
              </a>
            </li>
            <li className="elementor-repeater-item-c19d017">
              <a href="#" aria-label="telegram">
                <i aria-hidden="true" className="icon icon-telegram"></i>
              </a>
            </li>
          </ul>
      </div>
  );
};