import { Box, createTheme, CssBaseline, Link, Paper, Stack, ThemeProvider, Typography, useMediaQuery } from '@mui/material';
import { Container } from '@mui/system';
import { Document, Page } from 'react-pdf'
import React, { useMemo } from 'react';
import './App.css';
import Banner from './banner/Banner';
import Header from './banner/Header';
import CV from './CV';
import Divider from '@mui/material/Divider';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container> 
        <Box height={70} />
        <Stack spacing={4}>
          <Banner />
          <Stack spacing={2}>
            <Typography>
              Welcome! My name is Damian Figueroa, and I am pursuing an undergraduate degree in computer science at the University of Maryland: College Park. 
              I have had a life-long passion for software development and creatively using technology to solve problems. Through personal projects, I have 
              self-taught myself in many different areas such as mobile app development, virtual reality applications, robotics, games, cybersecurity, 
              and backend software. 
            </Typography>
            <Typography>
              I am extremely passionate about the emerging "XR" field (virtual reality, augmented reality, and mixed reality) and am currently 
              the President of the <Link href="https://xr.umd.edu">XR Club at UMD</Link>. I greatly enjoy hosting workshops (as you can see above!) to 
              educate our club members about using the Unity game engine and other specialized topics. 
            </Typography>
          </Stack>
          <Divider />
          <Box>
            <Typography variant="h4" textAlign="center">CV</Typography>
            <CV />
          </Box>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
