interface ParagraphProps {
  children: string;
  align?: string;
}

export const Paragraph = ({ children, align}: ParagraphProps) => {
  return (
    <div className={`elementor-element elementor-widget elementor-widget-text-editor ${align === "center" ? "text-center" : ""}`}>
      <div className="elementor-widget-container">
        <p>{children}</p>
      </div>
    </div>
  );
};
