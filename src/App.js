import './App.css';

import Cookies from 'universal-cookie';
import { Box, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { darkTheme, lightTheme } from './theme/theme';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { RootPage } from './pages/root';
import { ImprintPage } from './pages/imprint';
import { link_imprint, link_root } from './links/links.ts';
import { FooterWidget } from './components/FooterBar';
import { color_bg_dark } from './theme/colors.ts';


function App() {

  const cookies = new Cookies();

  var _prefDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [prefMode, setPrefMode] = useState(0); // prefs: 0=notset, 1=light, 2=dark

  const _prefCookie = cookies.get('darkMode');
  if (_prefCookie !== undefined && _prefCookie !== null) {
    const newPrefMode = (_prefCookie==="true" ? 1 : 0) + 1;
    if (newPrefMode !== prefMode) setPrefMode(newPrefMode);
  }

  const theme = React.useMemo(() => 
    prefMode===0 
      ? (_prefDark ? darkTheme : lightTheme) 
      : (prefMode===2 ? darkTheme : lightTheme), [prefMode, _prefDark]);

  const isAtImprint = window.location.pathname.replaceAll("/", "") === "imprint";

  const mediaMatch500 = window.matchMedia('(max-width: 500px)');
  const mediaMatch700 = window.matchMedia('(max-width: 700px)');

  return (
    <Box style={{ backgroundColor: color_bg_dark, height: "100%" }}>
      <SnackbarProvider maxSnack={4}>
        <ThemeProvider theme={theme}>

          <Box 
            style={{ height: "100%", }}
            display={isAtImprint ? "block" : "flex"}
            flex="auto"
            alignItems="center"
            justifyContent="center"
            flexShrink={0}
            sx={{ transform: mediaMatch500.matches ? "scale(0.5)" : (
              mediaMatch700.matches ? "scale(0.75)" : "scale(1.0)"
            ) }}
          >
            <Box
              sx={{
                // bgcolor: 'primary.main',
                width: "100%",
                pt: 8,
                pb: 6,
              }}
            >
              <BrowserRouter>
                <CssBaseline />
                {
                  <Routes>
                    <Route path={link_imprint} element={<ImprintPage />} />
                    <Route path={link_root} element={<RootPage />} />
                    <Route path="*" element={ <Navigate to={link_root} /> }  />
                  </Routes>
                }
                <FooterWidget />
                    
              </BrowserRouter>
            </Box>
          </Box>
        </ThemeProvider>
      </SnackbarProvider>
    </Box>
  );
}

export default App;
