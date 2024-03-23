import "./App.css";
import { Container, Flex, Box } from "@chakra-ui/react";
import { Main } from "./components/main/main";

function App() {
  return (
    <Container bg={"£f8fafd"} maxW={"Container.3xl"} height={"100vh"} p={"0"}>
      <Flex height={"full"}>
        <Box height={"full"} flex={"5"} w={("20%", "30%", "20%", "50%", "60%")}>
          <Main />
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
