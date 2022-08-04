import { BrowserRouter, Routes, Route,  Navigate } from "react-router-dom";
import Teste from "../pages/teste/teste";

//TODO: Fix routes
//TODO: make the paths constants

const Routes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="som" element={<Teste/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routes;
