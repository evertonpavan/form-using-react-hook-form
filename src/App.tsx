import './App.css';
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react'
import Home from './pages/Home';
import Router from './routes';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box p={4}>
        <Router />
      </Box>
    </ChakraProvider>
  );
}

export default App;
