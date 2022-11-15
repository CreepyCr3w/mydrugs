import { Input, Box, SimpleGrid, Text, Flex, Icon } from '@chakra-ui/react'
import {FaRegSadCry} from 'react-icons/fa'

import {useState, useEffect} from 'react';

import {Card} from '../../components/card/Card.jsx'
import {get_products} from '../../data/products.js'


export function VerticallCards(){
    
    const [products, setProducts] = useState([])
    useEffect( () => setProducts(get_products()), [])

    let handleChange = (e) => {
        let query = get_products()

        let text = e.target.value.toLowerCase()
        let search1 = (product, query) => product.name.toLowerCase().includes(query)
        let search2 = (product, query) => product.description.toLowerCase().includes(query)

        setProducts(query.filter(product => search1(product, text) || search2(product, text)))
    }

    return (
        <Box align='center'>
            <Input boxShadow='md' placeholder='Busca tu semilla' borderRadius={30} m={10} p={7} width={600} onChange={handleChange}/>
                {products.length ? 

                    <SimpleGrid columns={3} width={1400}>
                        {products.map( (product) => <Card key={product.id} product={product}/>)}
                    </SimpleGrid> 
                    :
                    <Box height='100vh'>
                        <Text fontSize='2xl' mr={5}>No se encontro tu semilla</Text> 
                    </Box>
                }
        </Box>
    )
}

export function HorizontalCards(){
    
    let products = get_products()

    return(
        <Box align='center'>
                {products.length ? 

                    <Flex width='100%' overflow='scroll'>
                        {products.map( (product) => <Card key={product.id} product={product}/>)}
                    </Flex> 
                    :
                    <Text fontSize='2xl' mr={5}>No se encontro tu semilla</Text> 
                }
        </Box>
    )
}