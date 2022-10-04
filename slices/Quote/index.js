import * as prismicH from "@prismicio/helpers";
import { PrismicRichText, PrismicText } from "@prismicio/react";

const Quote = ({ slice }) => {
  return (
    <section className="quote">
      <div className="container">
        {prismicH.isFilled.richText(slice.primary.quote) && (
            <>
              <span>&ldquo;</span>
              <PrismicText field={slice.primary.quote} />
              <span>&rdquo;</span>
            </>
        )}
      </div>
    </section>
  );
};

export default Quote;
