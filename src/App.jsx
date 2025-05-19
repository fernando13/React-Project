import { useState, useRef } from 'react'

import { Box, ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { RouterProvider } from 'react-router';
import { router } from './routes';

// ImageCarousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <ChakraProvider>
        {/* <ItemListContainer /> */}
        <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;


// function App() {
//   return (
//     <ChakraProvider>
//       <Box height="100vh">
//         <NavBar /> 
//         <RouterProvider router={router} />
//         {/* <ItemListContainer /> */}
//       </Box>
//     </ChakraProvider>
//   );
// }
