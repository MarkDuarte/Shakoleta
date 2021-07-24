import React,{useState} from 'react';
import { 
    Container, 
    Input,
    FormControl,
    FormLabel,
    Box,
    Stack,
    Center,
    Image,
    Button,
    Wrap,
    WrapItem,
    Text,    
    IconButton,
    InputGroup,
    InputRightElement,
    Heading,
    AspectRatio
 } from "@chakra-ui/react"

import {ArrowBackIcon} from "@chakra-ui/icons"


export function componentBusca(props){

    return (
        <Container 
            display='flex'
            alignItems='center'
            justifyContent='flex-start'
            maxWidth='lg'
            background='#2AC28B'
            centerContent={true}
        >
            <Box
                width='100%'
                background='#219653'
                position='fixed'
                top='0px'
                zIndex={1000}
            >
                <Button
                    leftIcon={<ArrowBackIcon width='25px' height='auto'/>}
                    variant="solid"
                    padding='25px'
                    background='transparent'
                    fontSize='25px'
                    color='#fff'
                    fontFamily={`'Ubuntu', sans-serif`}
                    fontWeight='bolder'
                >
                    Home
                </Button>
            </Box>
                
            <Center
                display='block'
                padding='100px'
                background='#FFF'
                overflow='auto'
            >
                <Heading
                        display='block'
                        fontSize='35px'
                        textAlign='center'
                        as="h1"
                        fontFamily={`'Ubuntu', sans-serif`}
                        color='#2AC28B'
                        padding='20px'

                >
                        Procura de pontos
                </Heading>
                <Box>
                    <Box>
                        <Text>
                            Endereco
                        </Text>
                        <Text>
                            Porcure por sua cidade
                        </Text>
                    </Box>
                    <Box>
                        <Stack
                            width='800px'
                            direction='row'
                            spacing='35px'
                        >
                            <Input 
                                width='40%'
                                padding='15px'
                                border='2px solid #2AC28B'
                                borderRadius='10px'
                                boxShadow='0px 2px 5px 0px rgb(150,150,150)'
                            />
                            <Input 
                                width='60%'
                                padding='15px'
                                border='2px solid #2AC28B'
                                borderRadius='10px'
                                boxShadow='0px 2px 5px 0px rgb(150,150,150)'
                            />
                        </Stack>
                    </Box>
                </Box>
            </Center>
        </Container>
    )
}


export default componentBusca;