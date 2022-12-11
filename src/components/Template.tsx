import * as React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Template({ children, bg }: any) {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "87vh", backgroundColor: bg }}>{children}</main>
      <Footer />
    </>
  );
}

export default Template;
