import * as prismicH from "@prismicio/helpers";
import { PrismicRichText, PrismicText } from "@prismicio/react";

const Quote = ({ slice }) => {
  return (
    <section className="quote">
      {prismicH.isFilled.richText(slice.primary.quote) && (
          <blockquote>
            <span>&ldquo;</span>
            <PrismicText field={slice.primary.quote} />
            <span>&rdquo;</span>
          </blockquote>
      )}
    </section>
  );
};

export default Quote;
