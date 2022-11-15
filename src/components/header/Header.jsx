import { Input,  Flex, Text, Icon, Button, } from '@chakra-ui/react'
import { CiShop, CiShoppingTag, CiShoppingCart, CiUser } from 'react-icons/ci';
import { TbPlant2 } from 'react-icons/tb';

import { Link, useLocation } from "react-router-dom";

import { useEffect, useState } from 'react';

export function Header() {  
    const location = useLocation();

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return(
        <Flex 
            height={75} 
            width='100%' 
            bg='white'
            position={offset == 0 ? 'relative' : 'fixed'} 
            pl={16} pr={16} 
            justify='space-between' 
            align='center' 
            boxShadow={offset == 0 ? 'xs' : 'md'}  
            as="header"
            zIndex={2}
            >

            <Flex align='center'>
                <Icon as={TbPlant2} mr={60} fontSize='3xl' color='black'/>  

                <Link to="/">
                    <Flex height={75} pr={30} pl={30} align='center' color='black' _hover={{ bg: "gray.100", color:'green' }}>
                        <Icon as={CiShoppingCart} fontSize='2xl' mr={3} mb={1}/>
                        <Text>Menu</Text>
                    </Flex>
                </Link>
                <Link to="/dashboard">
                    <Flex height={75} pr={30} pl={30} align='center' color='black' _hover={{ bg: "gray.100", color:'green' }}>
                        <Icon as={CiShoppingTag} fontSize='2xl' mr={3} mb={1}/>
                        <Text>Productos</Text>
                    </Flex>
                </Link>
                <Link to="/dashboard">
                    <Flex height={75} pr={30} pl={30} align='center' color='black' _hover={{ bg: "gray.100", color:'green' }}>
                        <Icon as={CiShop} fontSize='2xl' mr={3} mb={1}/>
                        <Text>Promociones</Text>
                    </Flex>
                </Link>
                
            </Flex>
            {offset!=0 ? <Input variant='flushed' placeholder='Busca tu semilla' m={10} p={6} width={400}/>:<></>}
            
            {location.pathname != '/auth' ? <Flex justifyContent='space-between'>
                <Link to='/auth'>
                    <Button borderRadius={20} p={5} mr={5} colorScheme='whatsapp'>
                        Registrar
                    </Button>
                </Link>
                <Link to='/auth'>
                    <Button borderRadius={20} p={5} variant='outline' colorScheme='whatsapp'>
                        Ingresa
                    </Button>
                </Link>
            </Flex> : <></>}
        </Flex>
    )
}
