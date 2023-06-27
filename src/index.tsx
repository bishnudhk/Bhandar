import React from "react";
// import axios from "axios";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider,Route, createRoutesFromElements } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StoreProvider } from "./Store";
import CartPage from "./pages/CartPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import ShippingAddressPage from "./pages/ShippingAddressPage";
import PaymentMethodPage from "./pages/PaymentMethodPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import ProtectedRoute from "./components/ProtectedRoute";

// axios.defaults.baseURL =
// process.env.NODE_ENV === "development" ? "http://localhost:4000" : "/"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,

//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//       {
//         path: "/product/:slug",
//         element: <ProductPage />,
//       },
//       {
//         path: "/cart",
//         element: <CartPage />,
//       },
//       {
//         path: "/signin",
//         element: <SigninPage />,
//       },
//       {
//         path: "/signup",
//         element: <SignupPage />,
//       },
     
        
//       {
//         path: "/shipping",
//         element: <ShippingAddressPage />,
//       },
//       {
//         path: "/payment",
//         element: <PaymentMethodPage />,
//       },
//     ] },
//       {
//         path: "/placeorder",
//         element: <PlaceOrderPage />,
//       },
      
    
// // ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path="product/:slug" element={<ProductPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="signin" element={<SigninPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="" element={<ProtectedRoute />}>
        <Route path="shipping" element={<ShippingAddressPage />} />
        <Route path="payment" element={<PaymentMethodPage />} />
        <Route path="placeorder" element={<PlaceOrderPage />} />
       
      </Route>

     
    </Route>
  )
)

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
