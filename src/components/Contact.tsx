import * as React from 'react';
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea, Image, useColorModeValue,
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import heroSrc from '../images/hero.png';
import { OutboundLink } from "gatsby-plugin-google-gtag"


export default function contact() {
    return (
        <Container maxW="full" mt={0} centerContent overflow="hidden">
            <Flex>
                <Box
                    bg={useColorModeValue('blue.200', '#00569b')
                    }
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}>
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem>
                                <Box>
                                    <Heading>Pojďme se spolu spojit!</Heading>

                                    <Text mt={{ sm: 3, md: 3, lg: 5 }}>
                                        Neváhej se mě kontaktovat pokud: <br /> a) chceš zbrusu nový web Probrat cokoliv 😎<br /> b) jsi podnikavý a rád tvoříš 🚀<br /> a nebo jakkýkoliv jiný důvod, rád si popovídám s každým 😁</Text>

                                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                        <VStack pl={0} spacing={3} alignItems="flex-start">
                                            <OutboundLink target="_blank" href={'mailto:kontakt@mareksvitek.cz/'}>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="250px"
                                                    variant="ghost"
                                                    colorScheme='white'
                                                    justifyContent={'start'}
                                                    _hover={{ bg: '#0D74FF' }} leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                                                    kontakt@mareksvitek.cz
                                                </Button>
                                            </OutboundLink>

                                            <OutboundLink target="_blank" href={'https://www.zbozi.cz/vyrobek/jizdenka-do-brnenskeho-metra/?utm_source=mapy&utm_medium=odkaz_crosspromo&utm_campaign=april&utm_content=april_jizdenka_brno_metro'}>
                                                <Button
                                                    justifyContent={'start'}
                                                    size="md"
                                                    height="48px"
                                                    width="250px"
                                                    colorScheme='white'

                                                    variant="ghost"
                                                    _hover={{ bg: '#0D74FF' }}
                                                    leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                                                    Brno 🇨🇿
                                                </Button>
                                            </OutboundLink>
                                        </VStack>
                                    </Box>
                                    <HStack
                                        mt={{ lg: 10, md: 10 }}
                                        spacing={5}
                                        px={5}
                                        alignItems="flex-start">

                                        <OutboundLink target="_blank" href={'https://www.linkedin.com/in/mareksvitek/'}>
                                            <IconButton
                                                aria-label="linkedin"
                                                variant="ghost"
                                                size="lg"
                                                isRound={true}
                                                _hover={{ bg: '#0D74FF' }}
                                                icon={<BsLinkedin size="28px" />}
                                            />
                                        </OutboundLink>

                                        <OutboundLink target="_blank" href={'https://www.instagram.com/svitek.marek/'}>
                                            <IconButton
                                                aria-label="instagram"
                                                variant="ghost"
                                                size="lg"
                                                isRound={true}
                                                _hover={{ bg: '#0D74FF' }}
                                                icon={<BsInstagram size="28px" />}
                                            />
                                        </OutboundLink>
                                        <OutboundLink target="_blank" href={'https://github.com/Marilok/'}>

                                            <IconButton
                                                aria-label="github"
                                                variant="ghost"
                                                size="lg"
                                                isRound={true}
                                                _hover={{ bg: '#0D74FF' }}
                                                icon={<BsGithub size="28px" />}
                                            />
                                        </OutboundLink>
                                    </HStack>
                                </Box>
                            </WrapItem>
                            <WrapItem>
                                <Box
                                    position={'relative'}
                                    height={'auto'}
                                    rounded={'2xl'}
                                    boxShadow={'2xl'}
                                    width={'auto'}
                                    // overflow={'hidden'}
                                    >
                                    <Image
                                        alt={'Hero Image'}
                                        align={'center'}
                                        fit={'cover'}
                                        // w={'auto'}
                                        // h={'100%'}
                                        boxSize='150px'

                                        borderRadius='full'
                                        src={
                                            heroSrc
                                        }
                                    />
                                    <VStack spacing={4}>
                                        <Text size={'6xl'} style={{ fontFamily: 'Barlow', fontWeight: 900 }}>
                                        Marek Svitek
                                        </Text>
                                        <br/>
                                        <Text
                                        color={'blue.400'} 
                                        style={{ fontFamily: 'Caveat', position: 'absolute', fontSize: '1.2em', fontWeight: 500, transform: 'rotate(-10deg)' }}>
                                            Svíťa</Text>
                                    </VStack>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
            </Flex>
        </Container>
    );
}