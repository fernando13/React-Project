import { Box, Container, Stack, Text, Image, Flex, VStack, Button, Heading, SimpleGrid, StackDivider, useColorModeValue} from "@chakra-ui/react";
import Slider from 'react-slick';

const ImageCarousel = ({ images }) => {
  const isSingleImage = images.length === 1;

  const settings = {
    dots: !isSingleImage,
    infinite: !isSingleImage,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isSingleImage,
    autoplaySpeed: 3000,
    arrows: !isSingleImage,
  };

  return (
    // if (isLoading) {
    //   return (
    //     <Box width="100%" maxW="500px" mx="auto" border={"1px"} borderRadius={"5px"} borderColor={"gray.300"}>
    //       <Skeleton height={"500px"} width="100%" borderRadius="md" mx="auto" />
    //     </Box>
    //   );
    // }

    <Box width="100%" maxW="500px" mx="auto" border="1px" borderRadius="5px" borderColor="gray.300" >
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box key={index} px={2}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              w="100%"
              h="500px"
              objectFit="cover"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};




const ItemDetailContainer = ({ product }) => {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 24 }} >
        <Flex>
          {product.images ? (<ImageCarousel images={product.images} /> ) : null}
        </Flex>
        
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }} >
              {product.title}
            </Heading>
            <Text color={useColorModeValue("gray.900", "gray.400")} fontWeight={400} fontSize={"2xl"} >
              ${product.price}
            </Text>
          </Box>

          <Stack spacing={{ base: 4, sm: 6 }} direction={"column"} divider={<StackDivider borderColor={useColorModeValue("gray.200", "gray.600")} />} >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text color={useColorModeValue("gray.500", "gray.400")} fontSize={"2xl"} fontWeight={"300"} >
                {product.description}
              </Text>
            </VStack>            
          </Stack>

          <Button rounded={"none"} w={"full"} mt={8} size={"lg"} py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{transform: "translateY(2px)", boxShadow: "lg", }}
          >
            Add to cart
          </Button>

        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ItemDetailContainer;