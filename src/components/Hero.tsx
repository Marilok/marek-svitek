import * as React from 'react';
import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue
} from '@chakra-ui/react';
import heroSrc from '../images/hero.png';
import { Link } from "gatsby"

export default function CallToAction() {
    return (
        <Container maxW={'8xl'}>
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: 'column', md: 'row' }}>
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                        <Text
                            as={'span'}
                            // position={'relative'}
                            // _after={{
                            //     content: "''",
                            //     width: 'full',
                            //     height: '30%',
                            //     position: 'absolute',
                            //     bottom: 1,
                            //     left: 0,
                            //     bg: 'blue.400',
                            //     zIndex: -1,
                            // }}
                            >
                            Jsem Svíťa, 
                        </Text>
                        {/* <br /> */}
                        {/* <Text as={'span'} >
                            a jsem&nbsp;	
                        </Text> */}
                        <Text as={'span'} color={'blue.400'}>
                           podnikavý středoškolák
                        </Text>
                        <Text
                            as={'span'}
                        // position={'relative'}
                        // _after={{
                        //     content: "''",
                        //     width: 'full',
                        //     height: '30%',
                        //     position: 'absolute',
                        //     bottom: 1,
                        //     left: 0,
                        //     bg: 'blue.400',
                        //     zIndex: -1,
                        // }}
                        >
                            , který občas 
                            <Text as={'span'} color={'blue.400'}> programuje weby.</Text>
                            
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        Ahooj! 😁👋 Jmenuji se Marek Svitek a o sobě bych řekl, že jsem podnikavý středoškolák z Brna.(Klišé alert 😬).Taky občas pracuji na zajímavých webových aplikacích.🤖 Na tomto webu dokumentuji zajímavé projekty, kterých jsem se účastnil a taky moje zápisky (aka Second&nbsp;Brain nebo Digital Garden) z různých přednášek a dalších osobních zkušeností.
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: 'column', sm: 'row' }}>
                        <Link to="/projekty">

                        <Button
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                            colorScheme={'blue'}
                            bg={'blue.400'}
                            _hover={{ bg: 'blue.500' }}>
                            Projekty
                        </Button>
                    </Link>

                        <Link to="/zapisky">
                        <Button
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                            >
                            Zápisky
                        </Button>
                        </Link>
                    </Stack>
                </Stack>
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    w={'full'}>
                    <Blob
                        w={'150%'}
                        h={'150%'}
                        position={'absolute'}
                        top={'-20%'}
                        left={0}
                        zIndex={-1}
                        color={useColorModeValue('blue.50', 'blue.400')}
                    />
                    <Box
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
                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
}

export const Blob = (props: IconProps) => {
    return (
        <Icon
            width={'100%'}
            viewBox="0 0 578 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                fill="currentColor" 
            />
        </Icon>
    );
};