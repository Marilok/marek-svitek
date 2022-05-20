import * as React from "react"
import "../style.sass"
import "@fontsource/open-sans"
import Img from "../images/project-ip.png"
import Hero from "../components/Hero.tsx"
import Template from "../components/Template.tsx"
import { Helmet } from "react-helmet";

// import "@fontsource/open-sans/600-normal.css"
// import "@fontsource/open-sans/700-normal.css"
// import "@fontsource/open-sans/800-normal.css"

const page = () => {
    const projects = [
        {
            name: 'Dog trainer',
            siteURL: 'https://dog-trainer.vercel.app/',
            codeURL: 'https://github.com/Marilok/dog-trainer',

        },
        {
            name: 'IP Adress Tracker',
            siteURL: 'https://ip-address-tracker-master-git-main.marilokms.vercel.app/',
            codeURL: 'https://github.com/Marilok/ip-address-tracker-master',

        },
        {
            name: 'Piškvorky',
            siteURL: 'https://tic-tac-toe-delta-ten.vercel.app/',
            codeURL: 'https://github.com/Marilok/Tic-Tac-Toe',

        },

    ]



    return (

        <>
            <Helmet>
                <meta name="theme-color" content="#01579B" />
                <meta charSet="utf-8" />
                <html lang="cs" />
                <title>Podnikavý středoškolák Svíťa &#128075;</title>
                <meta name="description" content="Ahoj!  &#128075; &#128187;" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
                <meta name="theme-color" content="#01579B" />

            </Helmet>

            <Template>
                Na tomto teprv pracuji. 👷
            </Template>
        </>

    )
}

export default page