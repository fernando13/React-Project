import { Flex, Text, Menu, MenuButton, MenuList, MenuItem,  Button } from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import { FaChevronDown } from "react-icons/fa";
    
// const myStyles = {
//     alignItems:"center",
//     justifyContent:"space-between",
//     width:"100vw",
//     padding:"20px 20px",
//     height:"5%",
//     border:"0.5px solid #1a202c4f"
// }

const NavBar = () => {
    return (
    
        <Flex alignItems="center"
              justifyContent="space-between"
              width="100vw"
              padding="20px 20px"
              height="5%"
              border="0.5px solid #1a202c4f" bg="gray.100"
        >
            <Text>Coder's Store</Text>
            <Menu>
                <MenuButton as={Button} rightIcon={<FaChevronDown />} bg="gray.300">
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem>Cursos</MenuItem>
                    <MenuItem>Carreras</MenuItem>
                    <MenuItem>Diplomaturas</MenuItem>
                </MenuList>
            </Menu>
            <CartWidget />
        </Flex> 
    );
}

export default NavBar;

