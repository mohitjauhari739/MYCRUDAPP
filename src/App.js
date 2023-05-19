import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Add from "./Add";
import ShowUser from "./ShowUser";
import Edit from "./Edit";
export default function App(){
return(
    <>
    <h3 className="text-center">Crud Oprations</h3>
   
<BrowserRouter>
<Routes>
   <Route path="/" element={<ShowUser/>}/>
   { <Route path="/add" element={<Add/>}/>}
   { <Route path="/EditUser/:id" element={<Edit/>}/>}
</Routes>
</BrowserRouter>
    </>
);

}