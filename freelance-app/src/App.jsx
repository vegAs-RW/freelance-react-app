import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Header from "./components/Header";
import Error from "./components/Error";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "./utils/context";

const GlobalStyle = createGlobalStyle`
div {
  font-family: 'Trebuchet MS', Helvetica, sans-serif;
}`

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider>
    <GlobalStyle />
    <Header />
    
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/survey/:questionNumber" element={<Survey />}></Route>
        <Route element={<Error />}></Route>
        <Route path="/results" element={<Results />}></Route>
        <Route path="/freelances" element={<Freelances />}></Route>
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
