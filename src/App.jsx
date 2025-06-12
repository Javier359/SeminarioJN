import "bootstrap/dist/css/bootstrap.min.css";
import Principal from "./components/Principal";
import Pie from "./components/common/Pie";
import Menu from "./components/common/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComoFunciona from "./components/ComoFunciona/ComoFunciona";
import PregutasPrincipal from "./components/Preguntas/PregutasPrincipal";

function App() {
  return (
    <BrowserRouter>

      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Principal></Principal>}></Route>
        <Route path="/como-funciona" element={<ComoFunciona></ComoFunciona>}></Route>
        <Route path="/comenzar-intento" element={<PregutasPrincipal></PregutasPrincipal>}></Route>
      </Routes>
      <Pie></Pie>
    
    </BrowserRouter>
    
    
  );
}

export default App;
