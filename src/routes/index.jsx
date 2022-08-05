import { BrowserRouter, Routes, Route,  Navigate } from "react-router-dom";
import Teste from "../pages/home";
import Teste2 from "../pages/product";

//TODO: make the paths constants

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Teste/>}/>
                <Route path="/product" element={<Teste2/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
