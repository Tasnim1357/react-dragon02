import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/NewsDetaills/NewsDetails";
import Private from "./Private";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root>Hello world!</Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=> fetch('/news.json')

        },
        {
          path:'/news/:id',
          element:<Private><NewsDetails></NewsDetails></Private>
        },
        {
          path:'/login',
          element:<Login></Login>
      },{
        path:'/register',
        element:<Register></Register>
      }
    ]
    },
  ]);
  export default router