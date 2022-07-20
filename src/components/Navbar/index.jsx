import { Flex } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <Flex color="white" bg="green.600" justifyContent="space-around" p="20px">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/episode">Episodes</NavLink>
            <NavLink to="/character">Characters</NavLink>
            <NavLink to="/location">Locations</NavLink>
        </Flex>
    )
}

export { Navbar }