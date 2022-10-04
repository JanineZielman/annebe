import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { Menu } from "./Menu";

export const Header = ({ navigation, settings }) => {
  return (
    <>
      <header>
        <div className="wrapper">
          <PrismicLink href="/" className="logo">
            <img src={settings.data.logo.url}/>
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
      <Menu 
        navigation={navigation}
      />
    </>
  );
};
