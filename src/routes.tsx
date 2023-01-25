import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Historico from "./Pages/Historico/Historico";
import NotFound from "./Pages/NotFound/NotFound";
import PaginaPadrao from "./Pages/PaginaPadrao/PaginaPadrao";

const AppRouter = () => {
 
    return( 
        <RecoilRoot>
          <Router>
              <Routes>
                 <Route path="/" element={<PaginaPadrao/>}>
                      <Route index element={<Dashboard/>}/>
                      <Route path="cadastro" element={<Cadastro/>} />   
                      <Route path="cadastro/:id" element={<Cadastro/>} />   
                      <Route path="historico" element={<Historico/>} /> 
                 </Route>  
                 <Route path="*" element={<NotFound/>}/>              
              </Routes>
          </Router>
        </RecoilRoot>
    );

}

export default AppRouter;