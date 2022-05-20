import * as React from "react"
import "../style.sass"
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";


function Template({children}) {
    return ( 
        <>
            <Navbar />
            <main style={{ minHeight: '87vh' }}>{children}</main>            <Footer />
        </>
     );
}

export default Template;