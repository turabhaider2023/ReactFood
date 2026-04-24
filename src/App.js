import React,{lazy,Suspense} from "react"
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header.js";
import { Body } from "./components/Body.js";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import {About} from "./components/About.js"
import {Contact} from "./components/Contact.js"
import {Error} from "./components/Error.js"
import {RestaurantMenu} from "./components/RestaurantMenu.js"
import {Provider} from "react-redux";
import { appStore } from "./utils/appStore.js";


const Grocery = lazy(()=>import("./components/Grocery.js"))

const AppLayOut = ()=>{
    return (
        <Provider store={appStore}><div>
        <Header/>
        <Outlet/>
        </div></Provider>)
    
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayOut/>,
        children:[
             {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading..............</h1>}><Grocery/></Suspense>
    },
    {
        path:"/",
        element:<Body/>
    },
     {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
    },
        ],
        errorElement:<Error/>
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)