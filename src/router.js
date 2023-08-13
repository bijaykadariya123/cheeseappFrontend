import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Index from "./pages/index"
import Show from "./pages/Show"
import { cheeseLoader, oneCheeseLoader } from "./loader"
import { creatAction, deleteAction, updateAction } from "./action"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path ="/" element={<App/>}>
        <Route path="" element={<Index/>} loader={cheeseLoader}/>
        <Route path=":id" element={<Show/>} loader={oneCheeseLoader}/>
        <Route path="create" action ={creatAction}/>
        <Route path="update/:id" action={updateAction}/>
        <Route path ="delete/:id" action={deleteAction}/>


    </Route>
))

export default router