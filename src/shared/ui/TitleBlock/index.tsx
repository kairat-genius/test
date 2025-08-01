import { Heading, Paragraph } from "@/shared/ui";

interface TitleBlockProps {
  title?: string;
  align: "left" | "center"
  specification: string;
  description?: string;
}

export const TitleBlock = ({ title, specification, description, align}: TitleBlockProps) => {
  return (
    <div
    className={`elementor-element e-con-full e-flex e-con e-child padding-bottom ${
      align === "center" ? "text-center" : ""
    }`}
  >
      {/* категория блока */}
      {title && <Heading level={6}>{title}</Heading>}
      {/* заголовок */}
      <Heading>{specification}</Heading>
       {/* описание */}
      {description && <Paragraph>{description}</Paragraph>}
    </div>
  );
};