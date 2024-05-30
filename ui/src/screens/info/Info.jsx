import {
  Flex,
  Box,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export const Info = () => (
  <Flex width='100vw' justifyContent='center'>
    <Box my={20}>
      <Text fontSize='24' fontWeight='600' mb={8}>
        Available ML Models
      </Text>
      <UnorderedList>
        <ListItem>
          <RouterLink to="/skin-disease-detection">Skin Disease detection</RouterLink>
        </ListItem>
        <ListItem>Pneoumonia x-Ray</ListItem>
      </UnorderedList>
    </Box>
  </Flex>
);