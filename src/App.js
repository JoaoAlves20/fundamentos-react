import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeContext } from './context/ThemeContext';

import themes from './styles/themes'

export default function App() {
  const { theme } = useContext(ThemeContext)

  // const firstRender = useRef(true)
  
  // useEffect(() => {
  //   if (firstRender.current) {
  //     firstRender.current = false
  //     return
  //   }

  //   console.debug('top')
  // }, [theme])
  
  // useEffect(() => {
  //   for (let i = 0; i <= 5000; i++) {
  //     console.log(i)
  //   }
  // }, [theme])
  
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  )
};