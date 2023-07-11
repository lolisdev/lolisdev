import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './components/Body.css';
import Header from './components/Header';
import About from './pages/About';
import Qualification from './pages/Qualification.jsx';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Body from './components/Body';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Body>
        
        <Header />
        <About />
        <Qualification />
        <Projects />
        <Footer />
      </Body>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
