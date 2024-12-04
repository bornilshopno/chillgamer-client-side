import {
    createBrowserRouter
  } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Comp_Home/Home";
import Login from "../Comp_Auths/Login";
import Register from "../Comp_Auths/Register";


 const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,

      children:[
        {
        path:"/",
        element: <Home/>
      },
      {path:"/login",
        element:<Login></Login>
      },
      {path:"/register",
        element:<Register></Register>
      },
      {path:"/add-review",
        element:<h2>this is nested</h2>
      },
      {path:"/review/:id",
        element:<h2>this is nested</h2>
      },
      {path:"/reviews",
        element:<h2>this is nested</h2>
      },
      {path:"/my-reviews",
        element:<h2>this is nested</h2>
      },
      {path:"/update-review/:id",
        element:<h2>this is nested</h2>
      },
      {path:"/my-watchlist",
        element:<h2>this is nested</h2>
      }
    ]
    },
  ]
  ,
  {
      future: {
          v7_startTransition: true,
          v7_skipActionErrorRevalidation: true,
          v7_fetcherPersist: true,
          v7_normalizeFormMethod: true,
          v7_partialHydration: true,
          v7_relativeSplatPath: true,

      },
  }
);

  export default  router

