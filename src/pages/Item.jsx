import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getProductById } from "../services/products.service";
import {Box, Container, Flex, SimpleGrid, Skeleton, SkeletonText, Stack, StackDivider, VStack, useColorModeValue, } from "@chakra-ui/react";
import ItemDetailContainer from "../components/ItemDetailContainer";

const Item = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((res) => setProduct(res.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [id]);

  return loading ? <LoadingItem /> : <ItemDetailContainer product={product} />;
};

export default Item;



const LoadingItem = () => {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 24 }} >
        <Flex>
          <Skeleton height="500px" width="100%" borderRadius="md" />
        </Flex>

        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as="header">
            <Skeleton height="40px" width="80%" mb={4} />
            <Skeleton height="30px" width="40%" />
          </Box>

          <Stack spacing={{ base: 4, sm: 6 }} direction={"column"} divider={<StackDivider borderColor={useColorModeValue("gray.200", "gray.600")} />}>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <SkeletonText noOfLines={4} spacing="4" skeletonHeight="4" width="100%" />
            </VStack>
          </Stack>

          <Skeleton height="50px" width="100%" borderRadius="md" />
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

