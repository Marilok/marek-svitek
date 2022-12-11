import * as React from "react";
import "@fontsource/open-sans";
import Contact from "../components/Contact.tsx";
import Template from "../components/Template.tsx";
import Seo from "../components/seo";

const page = () => {
  return (
    <Template>
      <Contact></Contact>
    </Template>
  );
};

export const Head = () => <Seo title="Kontakt | Marek Svitek - Svíťa" />;

export default page;
