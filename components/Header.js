import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

export const Header = ({ navigation, settings }) => {
  return (
    <header>
      <div>
        <PrismicLink href="/">
          {settings.data.titel}
        </PrismicLink>
        <nav>
          {navigation.data?.links.map((item) => (
            <PrismicLink field={item.link}  key={prismicH.asText(item.label)}>
              <PrismicText field={item.label} />
            </PrismicLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
