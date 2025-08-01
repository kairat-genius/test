import { OtherPost } from "./OtherPost";
import { Heading, Paragraph, Share, Photo } from "@/shared/ui";

export const BlogContentDetail = () => {
  return (
    <div className="elementor-element elementor-element-82517ef e-flex e-con-boxed e-con e-parent e-lazyloaded">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-8d4c06c e-con-full e-flex e-con e-child">
          <Photo />
          <Heading>Introduction</Heading>
          <Paragraph> Curabitur elit magnis quisque donec dictum. Fringilla ut suscipit
          venenatis porttitor, at efficitur facilisis sodales dis. Nec lectus
          duis senectus congue senectus blandit sollicitudin. Varius adipiscing
          odio rhoncus ligula fermentum torquent suspendisse.</Paragraph>
          <Share />
        </div>
        <OtherPost />
      </div>
    </div>
  );
};
