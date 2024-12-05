import {
    createBrowserRouter
  } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Comp_Home/Home";
import Login from "../Comp_Auths/Login";
import Register from "../Comp_Auths/Register";
import AddReview from "../Comp_Review/AddReview";
import AllReview from "../Comp_Review/AllReview";
import ReviewDetails from "./ReviewDetails";
import Watchlist from "../Comp_Review/Watchlist";


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
        element:<AddReview></AddReview>
      },
      {path:"/review/:id",
        element:<ReviewDetails></ReviewDetails> ,
        loader:({params})=>fetch(`http://localhost:4000/reviews/${params.id}`)
      },
      {path:"/reviews",
        element: <AllReview></AllReview>,
        loader: ()=>fetch("http://localhost:4000/reviews")
      },
      {path:"/my-reviews",
        element:<h2>this is nested</h2>
      },
      {path:"/update-review/:id",
        element:<h2>this is nested</h2>
      },
      {path:"/my-watchlist",
        element:<Watchlist></Watchlist>,
        loader: ()=>fetch("http://localhost:4000/watchlist")
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

