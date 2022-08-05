import { BrowserRouter, Routes, Route,  Navigate } from "react-router-dom";
import Teste from "../pages/teste/teste";
import Teste2 from "../pages/teste2/teste2"

//TODO: make the paths constants

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="som" element={<Teste/>}/>
                <Route path="/*" element={<Teste2/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
