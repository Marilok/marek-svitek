import * as React from "react";
import "@fontsource/open-sans";
import Hero from "../components/Hero.tsx";
import Template from "../components/Template.tsx";
import Seo from "../components/seo";

const page = () => {
  return (
    <Template>
      <Hero />
    </Template>
  );
};

export const Head = () => <Seo title="Marek Svitek - Svíťa" />;

export default page;
