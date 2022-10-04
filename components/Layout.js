import { Header } from "./Header";

export const Layout = ({ navigation, settings, children }) => {
  return (
    <div className="">
      <Header navigation={navigation} settings={settings} />
      <div className="container">
        <main>{children}</main>
      </div>
    </div>
  );
};
