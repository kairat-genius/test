
import {FQA} from "@/interface/global";

interface AccordionItemProps {
  fqa: FQA;
  isActive?: boolean;
  onClick: () => void;
}

export const AccordionItem = ({ fqa, isActive, onClick }: AccordionItemProps) => {
  return (
    <div className={`elementskit-card ${isActive ? "active" : ""}`}>
      <div className="elementskit-card-header">
        <a
          href="#"
          className={`ekit-accordion--toggler elementskit-btn-link ${
            isActive ? "" : "collapse"
          }`}
          aria-expanded={isActive}
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
        >
          <span className="ekit-accordion-title">{fqa.question}</span>

          <div className="ekit_accordion_icon_group">
            <div
              className={`${
                isActive
                  ? "ekit_accordion_active_icon"
                  : "ekit_accordion_normal_icon"
              }`}
            >
              <i
                aria-hidden="true"
                className={`icon-right icon ${
                  isActive
                    ? "icon-closed icon-up-arrow"
                    : "icon-open icon-down-arrow1"
                }`}
              ></i>
            </div>
          </div>
        </a>
      </div>

      <div className={`collapse ${isActive ? "show" : ""}`}>
        <div className="elementskit-card-body ekit-accordion--content">
          <p>{fqa.answer}</p>
        </div>
      </div>
    </div>
  );
};
