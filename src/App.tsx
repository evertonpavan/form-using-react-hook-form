import './App.css';
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react'
import HookForm from './components/HookForm';


function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box p={4}>
        <HookForm />
      </Box>
    </ChakraProvider>
  );
}

export default App;
