import * as React from 'react';
import "@fontsource/barlow"
import "@fontsource/caveat"
import {Text,
    ChakraProvider} from "@chakra-ui/react"

export const Logo = (props: any) => {
    return (
        <Text><span style={{ fontFamily: 'Barlow', fontWeight: 900 }}>Marek Svitek - </span><Text as={'span'} color={'blue.400'} style={{ fontFamily: 'Caveat', position: 'absolute',fontSize: '1.2em', fontWeight: 500,transform: 'rotate(-10deg)'}}>Svíťa</Text></Text>
    );
};