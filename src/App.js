import "./assets/css/normalize.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/GlobalStyle";
import Header from "./components/partials/Header";
import Hero from "./components/partials/Hero";
import Container from "./components/styles/Container";
import Features from "./components/partials/Features";
import { useState } from "react";
function App() {
  window.addEventListener("mouseup", (e) => {
    const NAV = document.querySelector("nav");
    // hide sidebar if we click outside of it
    if (!NAV.contains(e.target) && NAV.classList.contains("show")) {
      console.log(e.target);
      NAV.classList.remove("show");
    }
  });
  let [darkMode, setDarkMode] = useState(false);
  function switchDarkMode() {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  }
  const theme = {
    colors: {
      softOrange: "hsl(35, 77%, 62%)",
      softRed: "hsl(5, 85%, 63%)",
      offWhite: "hsl(36, 100%, 99%)",
      grayishBlue: "#c5c6ce",
      darkGrayishBlue: "hsl(236, 13%, 42%)",
      veryDarkBlue: "hsl(240, 100%, 5%)",
    },
    darkMode,
    switchDarkMode,
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle darkMode={darkMode} />
      <Header />
      <Container>
        <Hero />
        <Features />
      </Container>
    </ThemeProvider>
  );
}

export default App;
