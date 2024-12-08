import {
    createBrowserRouter
  } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Comp_Home/Home";
import Login from "../Comp_Auths/Login";
import Register from "../Comp_Auths/Register";
import AddReview from "../Comp_Review/AddReview";
import AllReview from "../Comp_Review/AllReview";
import ReviewDetails from "../Comp_Review/ReviewDetails";
import Watchlist from "../Comp_Review/Watchlist";
import MyReview from "../Comp_Review/MyReview";
import UpdateReview from "../Comp_Review/UpdateReview";
import ErrorPage from "../Comp_Utilities/ErrorPage";
import Developer from "../Comp_Utilities/Developer";
import PrivateRoute from "../Comp_Utilities/PrivateRoute";



 const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,

      children:[
        {
        path:"/",
        element: <Home/>,
        loader: ()=>fetch('https://server-side-chil-gamer.vercel.app/ratedReviews')
      },
      {path:"/login",
        element:<Login></Login>
      },
      {path:"/register",
        element:<Register></Register>
      },
      {path:"/add-review",
        element:<PrivateRoute><AddReview></AddReview></PrivateRoute>
      },
      {path:"/review/:id",
        element:<PrivateRoute><ReviewDetails></ReviewDetails></PrivateRoute> ,
        loader:({params})=>fetch(`https://server-side-chil-gamer.vercel.app/reviews/${params.id}`)
      },
      {path:"/reviews",
        element: <AllReview></AllReview>,
        loader: ()=>fetch("https://server-side-chil-gamer.vercel.app/reviews")
      },
      {path:"/my-reviews",
        element:<PrivateRoute><MyReview></MyReview></PrivateRoute>,
        loader: ()=>fetch("https://server-side-chil-gamer.vercel.app/reviews")
      },
      {path:"/update-review/:id",
        element:<UpdateReview></UpdateReview>,
        loader:({params})=>fetch(`https://server-side-chil-gamer.vercel.app/reviews/${params.id}`)
      },
      {path:"/my-watchlist",
        element:<PrivateRoute><Watchlist></Watchlist></PrivateRoute>,
        // loader: ()=>fetch("https://server-side-chil-gamer.vercel.app/watchlist")
      }
     
    ]
    },
  
    {path:"/developer-details",
      element: <Developer></Developer>
    },
    {path:"*",
      element:<ErrorPage></ErrorPage>
    }
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

