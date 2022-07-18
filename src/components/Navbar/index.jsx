import { Center } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <Center>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/episode">Episodes</NavLink>
            <NavLink to="/character">Characters</NavLink>
            <NavLink to="/location">Locations</NavLink>
        </Center>
    )
}

export { Navbar }