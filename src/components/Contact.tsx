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
import { Logo } from '../images/Logo';


export default function contact() {
    const LinkIcon = (thref, aria, icon) => {
        console.log(href, aria, icon);
        
        return (
        <OutboundLink target="_blank" href={href}>
        <IconButton
            aria-label={aria}
            variant="ghost"
            size="lg"
            isRound={true}
                    _hover={{ bg: useColorModeValue('pink.400', 'pink.400') }}
            icon={icon} />
        </OutboundLink>)
    };

    return (
        <Container maxW="full" mt={0} centerContent overflow="hidden">
            <Flex>
                <Box
                    // bg={useColorModeValue('#00569b', '#00569b')
                    // }
                    bg={useColorModeValue('blue.50', 'blue.400')}
                    boxShadow='xl'
                    // color="white"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}>
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem>
                                <Box>
                                    <Heading>Pojďme něco spolu tvořit!</Heading>

                                    <Text mt={{ sm: 3, md: 3, lg: 5 }}>
                                        <b>Neváhej se mě kontaktovat třeba z těchto důvodů: </b><br /> 😎 Potřebuješ zbrusu nový <i>~blazing fast~</i> web <br /> 🚀 Jsi podnikavý a rád tvoříš <br /> 😁 A nebo jakkýkoliv jiný důvod, rád si popovídám s každým</Text>

                                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                        <VStack pl={0} spacing={3} alignItems="flex-start">
                                            <OutboundLink target="_blank" href={'mailto:marek@mareksvitek.cz/'}>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="250px"
                                                    variant="ghost"
                                                    colorScheme='white'
                                                    justifyContent={'start'}
                                                    _hover={{ bg: '#0D74FF' }} leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                                                    marek@mareksvitek.cz
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
                                                _hover={{ bg: useColorModeValue('pink.200', 'pink.400')}}
                                                icon={< BsInstagram size="28px" />}
                                            />
                                        </OutboundLink>
                                        <OutboundLink target="_blank" href={'https://github.com/Marilok/'}>

                                            <IconButton
                                                aria-label="github"
                                                variant="ghost"
                                                size="lg"
                                                isRound={true}
                                                _hover={{ bg: useColorModeValue('blue.50', 'blue.400')}}
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
                                    width={'auto'}
                                    // bg={'red.500'}
                                    // overflow={'hidden'}
                                    >
                                    <Image
                                        boxShadow={'lg'}
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
                                    <Logo variant={'twoLines'}></Logo>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
            </Flex>
        </Container>
    );
}
