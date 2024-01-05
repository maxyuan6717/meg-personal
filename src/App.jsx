import React, { useMemo } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { useDimensions } from './hooks/useDimensions';
import { About, Clearify, Dumpling, Home, Sketchbook } from './pages';
import { base, GlobalStyle } from './ui';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  overflow-x: hidden;

  zoom: ${({ scale }) => scale};
`;

function App() {
  const { width } = useDimensions();

  const scale = useMemo(() => {
    if (width < 1200) {
      return width / 1200;
    }
    return 1;
  }, [width]);
  return (
    <Router>
      <ThemeProvider theme={base}>
        <GlobalStyle />
        <Container scale={scale}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sketchbook" element={<Sketchbook />} />
            <Route path="/dumpling-delight" element={<Dumpling />} />
            <Route path="/clearify" element={<Clearify />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
