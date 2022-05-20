import React from 'react'
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Image,
    Link,
    Tag, HStack, TagLeftIcon, TagLabel
} from '@chakra-ui/react';

export default function blogPostWithImage(props) {
    const renderTags = (tags) => {
               return (<HStack spacing={4}>
                   {tags.map((tag, index) => (<Tag colorScheme={tag.color}><TagLabel key={index}><span>#</span>{tag.name}</TagLabel></Tag>))}
        </HStack>)
    }
    return (
        <Box
                maxW={'445px'}
                w={'full'}
                minW={'350px'}
                h={'400px'}
                
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'lg'}
                rounded={'md'}
                p={6}
            transition="0.2s ease-in-out"
                    _hover={{
                        transform: 'scale(1.05)',
                        boxShadow: '2xl',
                    }}
                overflow={'hidden'}>
                    <Link textDecoration="none" to={'/'}>
                <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image
                        align={'center'}
                        w={'100%'}
                        h={'100%'}
                        fit={'cover'}
                        src={
                            props.imgSrc
                        }
                        
                    />
                </Box>
                </Link>
                <Stack>
                          

                    {props.tags ? renderTags(props.tags) : null}
                <Link
_hover={{ textDecoration: "none"}} 
to={'/'}>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        {props.title}
                    </Heading>
                </Link>
                    <Text color={'gray.500'}>
                        {props.description}
                    </Text>
                </Stack>
            </Box>
                            
    );
}