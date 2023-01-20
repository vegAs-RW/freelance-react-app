import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/survey/:questionNumber" element={<Survey />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
