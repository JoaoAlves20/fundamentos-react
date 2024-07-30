import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';

import { ThemeContext } from "../../context/ThemeContext";

import { Container } from "./styles";

export default function Header() {
  const { theme, onToggleTheme } = useContext(ThemeContext)

  const history = useHistory()

  function handleNavigate() {
    history.push('/')
  }

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={onToggleTheme}>
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
      <button onClick={handleNavigate} style={{ color: '#fff' }}>
        Voltar para a Home
      </button>
    </Container>
  )
}