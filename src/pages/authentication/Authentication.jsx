import { Input, Text, Flex, Box, Button, Stack } from '@chakra-ui/react'

import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";


export function Authentication(){

    const [auth, setAuth] = useState([])

    useEffect(() => {
        setAuth('login')
    }, [])
    
    return (
        <Flex height='100vh' align='center' justify='center'>
            {auth == 'login' ? <Login setAuth={setAuth}/> : <Register setAuth={setAuth}/>}
        </Flex>
    )
}

export function Login({setAuth}){
    return(
        <Box width={600} borderRadius='12px' p={10} boxShadow='md' >
            <Text fontSize='3xl'>Inicia sesion</Text>
            <Box mt={15}> 
                <Input placeholder='Tu usuario' p={7} width={500} borderRadius='30px'/>
            </Box>
            <Box mt={5}>
                <Input type='password' placeholder='Tu Contraseña' p={7} width={500} borderRadius='30px'/>
            </Box>
            <Stack mt={10} spacing={10} direction='row' justify='center'>
                <Button size='lg' onClick={() => setAuth('register')} colorScheme='whatsapp' borderRadius='30px'>Registrate</Button>
                <Button size='lg' borderRadius='30px' colorScheme='whatsapp'>Inicia session</Button>
                <Link to='/dashboard'>
                    <Button size='lg' variant='ghost' borderRadius='30px'>
                        Volver
                    </Button>
                </Link>
            </Stack>
        </Box>
    )
}

export function Register({setAuth}){
    return(       
        <Box width={600} borderRadius='12px' p={10} boxShadow='md' >
            <Text fontSize='3xl'>Registrate</Text>
            <Box mt={15}> 
                <Input placeholder='Tu usuario' p={7} width={500} borderRadius='30px'/>
            </Box>
            <Box mt={5}>
                <Input type='password' placeholder='Tu Contraseña' p={7} width={500} borderRadius='30px'/>
            </Box>
            <Box mt={5}>
                <Input type='password' placeholder='Repite tu Contraseña' p={7} width={500} borderRadius='30px'/>
            </Box>
            <Stack mt={10} spacing={10} direction='row' justify='center'>
                <Button size='lg' onClick={() => setAuth('login')} colorScheme='whatsapp' borderRadius='30px'>Iniciar sesion</Button>
                <Button size='lg' borderRadius='30px' colorScheme='whatsapp'>Registrate</Button>
                <Link to='/dashboard'>
                    <Button size='lg' variant='ghost' borderRadius='30px'>
                        Volver
                    </Button>
                </Link>
            </Stack>
        </Box>
    )
}