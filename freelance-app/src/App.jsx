import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Header from "./components/Header";
import Error from "./components/Error";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";

function App() {
  return (
    <BrowserRouter>
    <Header />
    
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/survey/:questionNumber" element={<Survey />}></Route>
        <Route element={<Error />}></Route>
        <Route path="/results" element={<Results />}></Route>
        <Route path="/freelances" element={<Freelances />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
