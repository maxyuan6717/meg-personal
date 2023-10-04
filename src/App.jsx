import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { About, Dumpling, Home } from './pages';
import { base, GlobalStyle } from './ui';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

function App() {
  return (
    <Router>
      <ThemeProvider theme={base}>
        <GlobalStyle />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dumpling-delight" element={<Dumpling />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
