import { useEffect, useState } from "react";
import { Stack, Box, Flex, Heading, Image, SimpleGrid, Text, Button, Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import { getAllProducts } from "../services/products.service";
import { useNavigate } from "react-router";

const ItemCard = ({id, image, title, description, price}) => {
  const navigate = useNavigate();

  return (
    // <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
    //   <Image alt={title} src={image} objectFit="cover" w="100%" h="200px" />
    //   <Stack  mt={4} spacing={2}>
    //     <Text fontWeight="bold" fontSize="lg">{title}</Text>
    //     <Text fontSize="sm" color="gray.600">{description}</Text>
    //     <Text fontSize="xl" fontWeight="semibold">${price}</Text>
    //     <Stack direction="row" spacing={3}>
    //       <Button colorScheme="teal">Buy now</Button>
    //       <Button variant="outline">Add to cart</Button>
    //     </Stack>
    //   </Stack>
    // </Box>
    <Card maxW="sm" overflow="hidden" borderWidth="1px" borderColor={"gray.400"} _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}>
      <Image alt={title} src={image} objectFit="contain" w="100%" h="200px" />
      <CardBody bgColor={''}  borderTop={"1px"} borderColor={"gray.400"}>
        <Text fontWeight="bold" fontSize="lg">{title}</Text>
        <Text fontSize="sm" color="gray.600">{description}</Text>
        <Text fontSize="xl" fontWeight="medium" letterSpacing="tight" mt="2">
          ${price}
        </Text>
      </CardBody>
      <CardFooter gap="2">
          <Button colorScheme="teal" onClick={() => navigate(`/item/${id}`)} >View</Button>
          <Button colorScheme="teal" variant="outline">Add to cart</Button>
      </CardFooter>
    </Card>
  )
}

const ItemListContainer = ({products}) => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   getAllProducts().then((res) => {
  //     setProducts(res.data.products);
  //   });
  // }, []);

  return (
    <Box width={"100%"} overflowX={"hidden"} p={4}>
      <SimpleGrid columns={{ sm:2, md:3, lg:6 }} spacing={4} width={"100%"}>
        {products.map((product) => {
          return (
            <ItemCard
              key={product.id}
              id={product.id}
              image={product.thumbnail}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default ItemListContainer;