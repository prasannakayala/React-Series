import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Error from "./components/Error";
import { Provider  } from "react-redux";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";

const BodyLazy= React.lazy(()=>import("./components/Body"));
const AboutLazy= React.lazy(()=>import("./components/About"));
const ContactLazy= React.lazy(()=>import("./components/Contact"));
const RestaurantMenuLazy= React.lazy(()=>import("./components/RestaurantMenu"));
const CartLazy= React.lazy(()=>import("./components/Cart"));

const AppLayout = () => {
  const [userName, setUserName]= useState();

  useEffect(()=>{
    const data={
      name: "Prasanna" 
    }
    setUserName(data.name)
  },[])

  return (    
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="app"> 
      <Header />
      <Outlet />
     </div>
     </UserContext.Provider>
     </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element:<Suspense fallback={<h1>Loading...</h1>}> <BodyLazy /></Suspense>
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><AboutLazy /></Suspense>
      },
      {
        path: "/contact",
        element: <Suspense fallback={<h1>Loading...</h1>}> <ContactLazy /></Suspense>
       },
      {path: "/restaurants/:resId",
        element: <Suspense fallback={<h1>Loading...</h1>}> <RestaurantMenuLazy/></Suspense>
      },
      {path: "/cart",
        element: <Suspense fallback={<h1>Loading...</h1>}> <CartLazy/></Suspense>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
