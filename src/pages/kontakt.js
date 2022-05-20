import * as React from "react"
import "../style.sass"
import "@fontsource/open-sans"
import Img from "../images/project-ip.png"
import Hero from "../components/Hero.tsx"
import Template from "../components/Template.tsx"
import { Helmet } from "react-helmet";
import { OutboundLink } from "gatsby-plugin-google-gtag"
import heroSrc from '../images/hero.jpg';

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
                <title>Podnikavý středoškolák Svíťa &#128075;</title>
                <meta name="description" content="Ahoj!  &#128075; &#128187;" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
                <meta name="theme-color" content="#01579B" />

            </Helmet>

            <Template>
                <OutboundLink target="_blank" href={'https://www.linkedin.com/in/mareksvitek/'}>
                <IconButton icon={<FaLinkedin />}/>
                </OutboundLink>
                <OutboundLink target="_blank" href={'https://www.instagram.com/svitek.marek/'}>
                    <IconButton icon={<FaInstagram />}/>
                </OutboundLink>
                <OutboundLink target="_blank" href={'https://github.com/Marilok/'}>
                    <IconButton icon={<FaGithub />}/>
                </OutboundLink>
<Text>Marek Svitek</Text>
<Text>Svíťa</Text>
<Text>Brno</Text>
                <Text>Neváhej se mě kontaktovat pokud: <br /> a) chceš zbrusu nový web Probrat cokoliv 😎<br /> b) jsi podnikavý a rád tvoříš 🚀<br /> a nebo jakkýkoliv jiný důvod, rád si popovídám s každým 😁</Text>
                {/* <Box
                    position={'relative'}
                    height={'auto'}
                    rounded={'2xl'}
                    boxShadow={'2xl'}
                    width={'400px'}
                    overflow={'hidden'}>
                    <Image
                        alt={'Hero Image'}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={'100%'}
                        src={
                            heroSrc
                        }
                    />
                </Box> */}
            </Template>
        </>

    )
}

export default page