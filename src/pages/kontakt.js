import * as React from "react"
import "../style.sass"
import "@fontsource/open-sans"
import Hero from "../components/Hero.tsx"
import Contact from "../components/Contact.tsx"
import Template from "../components/Template.tsx"
import { Helmet } from "react-helmet";

import {
    Box,
    chakra,
    Container,Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,IconButton
} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

// import "@fontsource/open-sans/600-normal.css"
// import "@fontsource/open-sans/700-normal.css"
// import "@fontsource/open-sans/800-normal.css"


const page = () => {
   
    return (
      <>
        <Helmet>
          <meta name="theme-color" content="#01579B" />
          <meta charSet="utf-8" />
          <html lang="cs" />
          <title>
            Kontakt | Marek Svitek - Svíťa &#128075;
          </title>
          <meta name="description" content="Ahoj!  &#128075; &#128187;" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
          <meta name="theme-color" content="#01579B" />
        </Helmet>

        <Template>
          <Contact></Contact>
        </Template>
      </>
    );
}

export default page