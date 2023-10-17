import React from 'react'; // Import React

import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from 'react-redux';

import AppRoutes from "./Routes";
function App() {
  return (
    <ChakraProvider>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
