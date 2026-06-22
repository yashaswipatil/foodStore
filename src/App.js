import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";

import ErrorComponent from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Contact from "./components/Contact";
import { CartProvider } from "./utils/cartContext";
import OnlineStatus from "./components/OnlineStatus";


const AppLayout = () => {
  return (
    <div className="app">
      <OnlineStatus />
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
     ],
    errorElement: <ErrorComponent />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CartProvider>
    {" "}
    <RouterProvider router={appRouter} />{" "}
  </CartProvider>,
);
