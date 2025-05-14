import "bootstrap/dist/css/bootstrap.min.css";
import Principal from "./components/Principal";
import Foter from "./components/common/Foter";
import Menu from "./components/common/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>

      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Principal></Principal>}></Route>
      </Routes>
      <Foter></Foter>
    
    </BrowserRouter>
    
    
  );
}

export default App;
