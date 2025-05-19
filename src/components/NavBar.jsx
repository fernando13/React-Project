// import { Flex, Text, Menu, MenuButton, MenuList, MenuItem,  Button } from "@chakra-ui/react";
// import CartWidget from "./CartWidget";
// import { FaChevronDown } from "react-icons/fa";
// import { useNavigate } from "react-router";
    
// const NavBar = () => {

//     const navigate = useNavigate()

//     return (
    
//         <Flex alignItems="center"
//               justifyContent="space-between"
//               width="100vw"
//               padding="20px 20px"
//               height="5%"
//               border="0.5px solid #1a202c4f" bg="gray.100"
//         >
//             <Text onClick={()=> navigate("/")}>Coder's Store</Text>
//             <Menu>
//                 <MenuButton as={Button} rightIcon={<FaChevronDown />} bg="gray.300">
//                     Actions
//                 </MenuButton>
//                 <MenuList>
//                     <MenuItem>Cursos</MenuItem>
//                     <MenuItem>Carreras</MenuItem>
//                     <MenuItem>Diplomaturas</MenuItem>
//                 </MenuList>
//             </Menu>
//             <CartWidget />
//         </Flex> 
//     );
// }

// export default NavBar;


import {Flex, Text, MenuButton, Menu, MenuList, Button, MenuItem, } from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getAllCategories } from "../services/products.service";

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories()
      .then((res) => setCategories(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Flex alignItems="center" justifyContent="space-between" width="100vw" padding="0 20px" height="7vh" border="1px solid #2e2e2e" >
      <Text className="test" onClick={() => navigate("/")} cursor={"pointer"}>
        Coder's Store
      </Text>
      <Menu height={"200px"}>
        <MenuButton as={Button}>Categorias</MenuButton>
        <MenuList>
          {categories.map((item) => {
            return <MenuItem key={item.slug} onClick={() => navigate(`/category/${item.slug}`)}>{item.name}</MenuItem>;
          })}
          <MenuItem>Jordans</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </Flex>
  );
};

export default NavBar;