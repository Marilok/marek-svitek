import * as React from "react"
import "../style.sass"
import "@fontsource/open-sans"
import Img from "../images/project-ip.png"
import Hero from "../components/Hero.tsx"
import Template from "../components/Template.tsx"
import Features from "../components/Features.tsx"
import { Helmet } from "react-helmet";

// import "@fontsource/open-sans/600-normal.css"
// import "@fontsource/open-sans/700-normal.css"
// import "@fontsource/open-sans/800-normal.css"

const page = () => {
    
    return (

        <>
            <Helmet>
            <meta name="theme-color" content="#01579B"/>
                <meta charSet="utf-8" />
<html lang="cs" />
                <title>Marek Svitek - Svíťa</title>
                <meta name="description" content="Ahoj!  &#128075; &#128187;" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
                <meta name="theme-color" content="#01579B" />

</Helmet>

                <Template>
                    <Hero />
                </Template>
                
            </>

   )
}

export default page