import React from "react";
import { Box, Heading, Text, Image, Stack, SimpleGrid, Container, Button, useColorModeValue } from "@chakra-ui/react";
import { FaHeart, FaSmile, FaGift } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.800")}>
      <Container maxW="container.lg" py={16}>
        <Stack spacing={8} align="center" textAlign="center">
          <Heading as="h1" size="2xl" fontWeight="extrabold">
            Welcome to the Lovable Website! <FaHeart />
          </Heading>
          <Text fontSize="xl" maxW="lg">
            Spread love, happiness, and joy to everyone around you. Life is too short not to be lovable!
          </Text>
          <Image src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlb3BsZSUyMGh1Z2dpbmd8ZW58MHx8fHwxNzExMTk1MDQzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Happy people hugging" rounded="md" shadow="md" />
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={16}>
          <Box bg="white" p={6} rounded="md" shadow="md" textAlign="center">
            <FaSmile size={48} color="teal.500" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Smile Often
            </Heading>
            <Text>Smiling is contagious. Spread happiness wherever you go!</Text>
          </Box>

          <Box bg="white" p={6} rounded="md" shadow="md" textAlign="center">
            <FaHeart size={48} color="red.500" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Love Unconditionally
            </Heading>
            <Text>Love others without expecting anything in return. That's true love.</Text>
          </Box>

          <Box bg="white" p={6} rounded="md" shadow="md" textAlign="center">
            <FaGift size={48} color="purple.500" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Give Generously
            </Heading>
            <Text>The more you give, the more you receive. Be generous with your love and kindness.</Text>
          </Box>
        </SimpleGrid>

        <Stack align="center" mt={16}>
          <Button size="lg" colorScheme="pink">
            Spread the Love!
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Index;
