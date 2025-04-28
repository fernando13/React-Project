import { Container, Flex } from "@chakra-ui/react";

// const ItemListContainerV1 = (props) => {
//     return (
//         <Container fontSize="2rem" height="95%" width="100vw" alignItems="center" justifyContent="" >
//             {props.greeting}
//         </Container>
//     );
// }

const ItemListContainer = ({ greeting }) => {
    return (
        <Container
            fontSize="2rem"
            height="95%"
            width="100vw"
            alignItems="center"
            justifyContent="center"
        > 
            {greeting}
        </Container>
    );
};

export default ItemListContainer;