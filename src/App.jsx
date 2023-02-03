import { useState } from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Purchases from "./pages/Purchases";
import Login from "./pages/Login";
import Navbar from "./components/NavBar";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <HashRouter>
      <Navbar />
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/product/:id" element={<Product />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/Purchanses" element={<Purchases />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
