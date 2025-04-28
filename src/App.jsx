//import { useState } from 'react'

//import './App.css'
import { Box, ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      <Box height="100vh">
        <NavBar />      
        <ItemListContainer greeting="Bienvenidos a mi tienda!" />
      </Box>
    </ChakraProvider>
  );
}

export default App;



